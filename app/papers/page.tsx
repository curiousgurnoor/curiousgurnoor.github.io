import Link from "next/link"

export default function PapersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">papers</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <p>academic papers and working papers i've authored or co-authored.</p>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-base mb-3">published</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    "Mechanism Design for Decentralized Autonomous Organizations: A Game-Theoretic Approach"
                  </p>
                  <p className="text-gray-600">
                    with Christine Parlour. <em>Journal of Financial Economics</em>, 2024.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    [
                    <a href="#" className="text-blue-600 underline">
                      paper
                    </a>
                    ] [
                    <a href="#" className="text-blue-600 underline">
                      slides
                    </a>
                    ] [
                    <a href="#" className="text-blue-600 underline">
                      code
                    </a>
                    ]
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    We analyze optimal governance mechanisms for DAOs using mechanism design theory, showing how
                    token-weighted voting can lead to suboptimal outcomes and proposing alternative voting schemes.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mb-3">working papers</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    "Liquidity Provision in Automated Market Makers: Risk, Return, and Optimal Strategies"
                  </p>
                  <p className="text-gray-600">
                    with David Parkes. Under review at <em>Review of Financial Studies</em>.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    [
                    <a href="#" className="text-blue-600 underline">
                      draft
                    </a>
                    ] [
                    <a href="#" className="text-blue-600 underline">
                      slides
                    </a>
                    ]
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    We develop a comprehensive framework for analyzing LP strategies in AMMs, incorporating impermanent
                    loss, fee income, and optimal rebalancing.
                  </p>
                </div>

                <div>
                  <p className="font-medium">"Sustainable Venture Capital: ESG Integration and Performance"</p>
                  <p className="text-gray-600">Solo author. Working paper, 2024.</p>
                  <p className="text-sm text-gray-500 mt-1">
                    [
                    <a href="#" className="text-blue-600 underline">
                      draft
                    </a>
                    ]
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Empirical analysis of how ESG considerations affect VC investment decisions and portfolio company
                    performance using proprietary dataset.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mb-3">work in progress</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">"Cross-Chain Arbitrage and Price Discovery in Decentralized Finance"</p>
                  <p className="text-gray-600">with Liz Bradley and Mike Mozer.</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Analyzing arbitrage opportunities across different blockchain networks and their impact on price
                    efficiency in DeFi markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
