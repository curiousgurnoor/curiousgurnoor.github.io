import Link from "next/link"

export default function SomedayPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">someday i hope to...</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <div className="space-y-4">
            <div>
              <p className="font-normal">travel the world by playing semi-professional test cricket, embarking on roadtrips in classic aston martins and porsches, and studying different flavours of the jazz saxophone.</p>
            </div>
            <div>
              <p className="font-normal">own an establishment that combines important but quickly fading cultures: coffee, cars, jazz, and uninterrupted intellectual conversations. </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
