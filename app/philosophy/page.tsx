import Link from "next/link"

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">collection of personal philosophies</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <div className="space-y-4">
            <div>
              <p className="font-bold">on curiosity</p>
              <div className="ml-6 space-y-2">
                <p>
                  curiosity is the engine of achievement. it's what drives us to ask "why?" and "what if?" even when the
                  answers might challenge our existing beliefs.
                </p>
                <p>
                  i believe the most interesting problems exist at the intersection of disciplines—where finance meets
                  technology, where game theory meets human behavior, where engineering meets philosophy.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
