import Link from "next/link"

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">
            collection of personal philosophies
          </h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <div className="space-y-4">
            <div>
              <ul className="ml-8 list-disc space-y-2">
                <li>
                  Curiosity is the engine of achievement. It's what drives us to ask "why?" and "what if?" even when the answers might challenge our existing beliefs.
                </li>
                <li>
                  Every day is a learning and examination day; remaining hungry allows you to continue learning without your ego clouding potential growth. You don't know what you don't know.
                </li>
                <li>
                  Hard work is a baseline requirement to achieve what you want, but there is no point placing yourself under pressure.
                </li>
                <li>
                  Trust that working hard and remaining aligned to your goals will help you get there.
                </li>
                <li>
                  We exist as humans for a very short time. Why should we spend that time fighting or living under pressure?
                </li>
                <li>
                  From Guru Nanak: We humans exist for one breath at a time, not knowing (allotted time of) the life span or even what will happen next.
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
