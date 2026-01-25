import Link from "next/link"

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">things i've read</h1>
        </header>

        <main className="space-y-8">
          {/* Books Section */}
          <section>
            <h2 className="text-lg font-mono font-semibold text-black mb-4">books</h2>
          </section>

          {/* Blogs, Reports, and Papers Section */}
          <section>
            <h2 className="text-lg font-mono font-semibold text-black mb-4">blogs, reports, & papers</h2>
          </section>
        </main>
      </div>
    </div>
  )
}
