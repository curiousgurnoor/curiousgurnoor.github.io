import Link from "next/link"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">articles & papers</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <div className="space-y-4">
            <div>
              <p className="font-bold">venture capital & investing</p>
              <div className="ml-6 space-y-1">
                <p>• "The Economics of Venture Capital" by Metrick & Yasuda (2010)</p>
              </div>
            </div>

            <div>
              <p className="font-bold">economics & finance</p>
              <div className="ml-6 space-y-1">
                <p className="italic">trading</p>
                <div className="ml-6 space-y-1"></div>
                <p className="italic">crypto</p>
                <div className="ml-6 space-y-1"></div>
                <p className="italic">macro</p>
                <div className="ml-6 space-y-1"></div>
                <p className="italic">money</p>
                <div className="ml-6 space-y-1"></div>
                <p className="italic">financial engineering</p>
                <div className="ml-6 space-y-1"></div>
                <p className="italic">mechanism design</p>
                <div className="ml-6 space-y-1"></div>
              </div>
            </div>

            <div>
              <p className="font-bold">behavioral economics & psychology</p>
              <div className="ml-6 space-y-1"></div>
            </div>

            <div>
              <p className="font-bold">philosophy</p>
              <div className="ml-6 space-y-1"></div>
            </div>

            <div>
              <p className="font-bold">biography</p>
              <div className="ml-6 space-y-1"></div>
            </div>

            <div>
              <p className="font-bold">textbooks</p>
              <div className="ml-6 space-y-1"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
