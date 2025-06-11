import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/blog" className="text-blue-600 underline text-sm">
            ← back to articles
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">article not found</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <p>Sorry, the article you're looking for doesn't exist.</p>
          <p>
            <Link href="/blog" className="text-blue-600 underline">
              Return to articles
            </Link>
          </p>
        </main>
      </div>
    </div>
  )
}
