import Link from "next/link"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/" className="text-blue-600 underline text-sm">
            ← back to home
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">selected articles, papers, & talks</h1>
        </header>

        <main className="space-y-6 text-sm leading-relaxed">
          <div className="space-y-4">
            <div>
              <p className="font-bold">june 2025</p>
              <div className="ml-6 space-y-1">
                <p>
                  •{" "}
                  <a href="https://www.youtube.com/watch?v=99XsVSN_doQ" className="text-blue-600 underline">
                    Link
                  </a>
                  . Tokens are Broken, <em>Felipe Montealegre</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://www.youtube.com/watch?v=1ymrnRrhMug" className="text-blue-600 underline">
                    Link
                  </a>
                  . GigaCompute & Beyond, <em>Ben Livshits</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://www.youtube.com/watch?v=SkKmnZb77Gs" className="text-blue-600 underline">
                    Link
                  </a>
                  . MPC for Privacy & UX, <em>Dev Ohja</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://www.helius.dev/blog/simd-228" className="text-blue-600 underline">
                    Link
                  </a>
                  . SIMD-228: A Critical Analysis, <em>Lostin & Ichigo</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://www.helius.dev/blog/alpenglow" className="text-blue-600 underline">
                    Link
                  </a>
                  . Alpenglow: Solana's Great Consensus Rewrite, <em>Lostin & Ichigo</em>
                </p>
                <p>
                  •{" "}
                  <a
                    href="https://www.helius.dev/blog/solana-foundation-delegation-program-sfdp"
                    className="text-blue-600 underline"
                  >
                    Link
                  </a>
                  . The Solana Foundation Delegation Program & the Challenges Facing Long-tail Validators,{" "}
                  <em>Lostin</em>
                </p>
                <p>
                  •{" "}
                  <a
                    href="https://www.broadridge.com/_assets/pdf/broadridge-crypto-asset-disclosure-study-report.pdf"
                    className="text-blue-600 underline"
                  >
                    Link
                  </a>
                  . Crypto Asset Disclosure Study, <em>Broadridge</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://assets.pubpub.org/efeeza8o/01656289809141.pdf" className="text-blue-600 underline">
                    Link
                  </a>
                  . Disclosure, dApps, & DeFi, <em>Chris Brummer</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://github.com/CommissionerPeirce/SafeHarbor2.0" className="text-blue-600 underline">
                    Link
                  </a>
                  . Proposed Safe Harbor – Time-limited Exemption for Tokens, <em>Hester Pierce</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://www.youtube.com/watch?v=7tEx5eVX_B0" className="text-blue-600 underline">
                    Link
                  </a>
                  . Fred Wilson & Brad Burnham (Union Square Ventures), <em>The Slow Hunch</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://impressive-horses-5641a8b530.media.strapiapp.com/Aerodrome_Token_Transparency_Framework_Q2_2025_da694e4f13.pdf" className="text-blue-600 underline">
                    Link
                  </a>
                  . Token Transparency Framework, <em>Blockworks</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://www.researchgate.net/publication/237668678_A_Historical_Primer_on_the_Business_of_Credit_Ratings" className="text-blue-600 underline">
                    Link
                  </a>
                  . A Historical Primer on the Business of Credit Ratings, <em>Richard Sylla</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://dba.mirror.xyz/UTPfxWe65dYrUu_RJX-5VkAJypFRyw3AZh6m0dRXYZk" className="text-blue-600 underline">
                    Link
                  </a>
                  . Endgame: Proof of Governance, <em>Jon Charbonneau</em>
                </p>
                <p>
                  •{" "}
                  <a href="https://forum.celestia.org/t/proof-of-governance-as-the-endgame-for-lsts/2036" className="text-blue-600 underline">
                    Link
                  </a>
                  . Proof-of-Governance as the Endgame for LSTs, <em>John Adler</em>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
