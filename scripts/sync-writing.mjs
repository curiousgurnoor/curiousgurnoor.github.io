// Publishes every PDF in writing/ to a clean URL and builds the home page list.
//
//   writing/2026-11-19 My Essay Title.pdf
//     -> served at /writing/my-essay-title.pdf, listed as "My Essay Title"
//
// The optional date prefix (YYYY-MM-DD or YYYY-MM) only sets the order (newest first).
// Files without a date are listed after the dated ones, alphabetically.
// Runs automatically before `dev` and `build` (see package.json).
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const root = process.cwd()
const SOURCE_DIR = path.join(root, "writing")
const PUBLIC_DIR = path.join(root, "public", "writing")
const LIST_FILE = path.join(root, "app", "writing-list.json")

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function readWriting() {
  if (!fs.existsSync(SOURCE_DIR)) return []
  const used = new Set()
  return fs
    .readdirSync(SOURCE_DIR)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .map((file) => {
      const name = file.slice(0, -4).trim()
      const m = name.match(/^(\d{4}-\d{2}(?:-\d{2})?)\s+(.+)$/)
      const title = m ? m[2].trim() : name
      let slug = slugify(title) || "essay"
      for (let n = 2; used.has(slug); n++) slug = `${slugify(title)}-${n}`
      used.add(slug)
      return { file, title, date: m ? m[1] : null, slug }
    })
}

function main() {
  const items = readWriting()
  fs.rmSync(PUBLIC_DIR, { recursive: true, force: true })
  fs.mkdirSync(PUBLIC_DIR, { recursive: true })
  for (const it of items) {
    fs.copyFileSync(path.join(SOURCE_DIR, it.file), path.join(PUBLIC_DIR, `${it.slug}.pdf`))
  }
  const list = items.map(({ title, date, slug }) => ({ title, date, href: `/writing/${slug}.pdf` }))
  fs.writeFileSync(LIST_FILE, JSON.stringify(list, null, 2) + "\n")
  console.log(`sync-writing: published ${items.length} PDF(s) from writing/`)
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main()
}
