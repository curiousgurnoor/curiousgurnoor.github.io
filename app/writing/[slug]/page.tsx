import fs from "fs"
import path from "path"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { marked } from "marked"

// Each essay is a Markdown file in content/writing/<slug>.md, served at /writing/<slug>.
const WRITING_DIR = path.join(process.cwd(), "content", "writing")

export const dynamicParams = false

type Essay = { title: string; date?: string; html: string }

function loadEssay(slug: string): Essay | null {
  const file = path.join(WRITING_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, "utf8")

  // Optional front matter block: ---\nkey: value\n---
  const fields: Record<string, string> = {}
  let body = raw
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (fm) {
    for (const line of fm[1].split("\n")) {
      const i = line.indexOf(":")
      if (i > 0) fields[line.slice(0, i).trim()] = line.slice(i + 1).trim()
    }
    body = raw.slice(fm[0].length)
  }
  // <!-- notes --> are for the author only and never reach the page.
  body = body.replace(/<!--[\s\S]*?-->/g, "")

  return {
    title: fields.title ?? slug,
    date: fields.date,
    html: marked.parse(body, { async: false }) as string,
  }
}

export function generateStaticParams() {
  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const essay = loadEssay(params.slug)
  return { title: essay ? `${essay.title} · gurnoor singh narula` : "curiousgurnoor" }
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const essay = loadEssay(params.slug)
  if (!essay) notFound()

  return (
    // The page is exactly one screen tall; only the essay box below the title scrolls.
    <div
      className="h-screen h-[100dvh] overflow-hidden"
      style={{
        backgroundColor: "#F5F2EA",
        backgroundImage: "radial-gradient(#E4DDCF 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <div className="max-w-4xl h-full mx-auto px-6 py-8 sm:py-12 flex flex-col">
        <Link href="/" className="text-blue-600 underline text-sm self-start">
          ← home
        </Link>
        <article className="w-full mt-6 flex flex-col flex-1 min-h-0">
          <h1
            className="text-2xl font-bold text-black mb-1"
            style={{ fontFamily: '"Bradley Hand", "Segoe Print", "Comic Sans MS", cursive' }}
          >
            {essay.title}
          </h1>
          {essay.date && <p className="text-xs text-gray-600">{essay.date}</p>}
          <div className="writing-scroll mt-5 flex-1 min-h-0 overflow-y-scroll rounded border border-[#D9D0BE] bg-white/40 px-5 py-4 sm:px-6 sm:py-5">
            <div className="essay" dangerouslySetInnerHTML={{ __html: essay.html }} />
          </div>
        </article>
      </div>
    </div>
  )
}
