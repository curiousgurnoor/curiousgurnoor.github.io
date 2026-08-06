import Link from "next/link"

export default function WritingArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">articles</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <p>articles, blog posts, and other written pieces i've published.</p>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-base mb-3">2024</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    <a href="#" className="text-blue-600 underline">
                      "The Future of Decentralized Governance: Lessons from Traditional Finance"
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <em>Placeholder VC Blog</em>, December 2024
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Exploring how traditional corporate governance mechanisms can inform the design of DAO governance
                    systems.
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    <a href="#" className="text-blue-600 underline">
                      "MEV and Market Efficiency: A Regulatory Perspective"
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <em>Berkeley Blockchain Review</em>, October 2024
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Analysis of how maximal extractable value affects market efficiency and potential regulatory
                    responses.
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    <a href="#" className="text-blue-600 underline">
                      "Sustainable Investing in Crypto: Beyond the Energy Debate"
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <em>CoinDesk</em>, August 2024
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Examining ESG considerations in cryptocurrency investments beyond environmental concerns.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mb-3">2023</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    <a href="#" className="text-blue-600 underline">
                      "Liquidity Mining: Incentive Design and Market Dynamics"
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <em>DeFi Pulse</em>, November 2023
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Deep dive into liquidity mining programs and their effects on protocol adoption and token economics.
                  </p>
                </div>

                <div>
                  <p className="font-medium">
                    <a href="#" className="text-blue-600 underline">
                      "The Economics of Layer 2 Scaling Solutions"
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <em>Ethereum Foundation Blog</em>, September 2023
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Economic analysis of different L2 scaling approaches and their implications for the Ethereum
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-base mb-3">guest posts & interviews</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">
                    <a href="#" className="text-blue-600 underline">
                      "Building the Future of Finance: A Student's Perspective"
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <em>Berkeley Engineering Magazine</em>, Spring 2024
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Interview about my journey from engineering to finance and blockchain research.
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
