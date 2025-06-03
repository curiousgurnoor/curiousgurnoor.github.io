import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-mono font-bold text-black mb-6">gurnoor singh narula</h1>
        </header>

        {/* Main Content */}
        <main className="space-y-6 text-sm leading-relaxed">
          <div>
            <p className="mb-2">
              hey there! i am currently a research analyst at{" "}
              <a href="http://www.placeholder.vc/" className="text-blue-600 underline">
                placeholder vc
              </a>
              , where i focus on:
            </p>
            <p className="ml-4">(-) venture capital investing</p>
            <p className="ml-4">(-) blockchain infrastructure, defi, and crytpoasset market research</p>
            <p className="ml-4">(-) game theory, mechanism design, and auction theory</p>
            <p className="ml-4">(-) financial economics and engineering</p>
          </div>

          <div>
            <p>prior to joining placeholder vc:</p>
            <p className="ml-4">
              (-) [2023-present] research assistant @ haas school of business, under the mentorship of{" "}
              <a href="https://sites.google.com/berkeley.edu/thefinanceparlour/" className="text-blue-600 underline">
                prof. christine parlour
              </a>
            </p>
            <p className="ml-4">(-) [2023-2024] president @ blockchain at berkeley</p>
            <p className="ml-4">(-) [2022-2023] managing director @ berkeley blockchain xcelerator</p>
            <p className="ml-4">
              (-) [2021-2024] bachelor's in electrical engineering and computer science @ uc berkeley
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-4">
            <div>
              <p className="font-medium">value consumed</p>
              <div className="ml-6 space-y-1">
                <p>
                  -{" "}
                  <Link href="/books" className="text-blue-600 underline">
                    books
                  </Link>
                </p>
                <p>
                  -{" "}
                  <Link href="/articles" className="text-blue-600 underline">
                    articles & papers
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium">value produced</p>
              <div className="ml-6 space-y-1">
                <p>
                  -{" "}
                  <a href="https://hackmd.io/@curiousgurnoor" className="text-blue-600 underline">
                    articles & papers
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="font-medium">links</p>
              <div className="ml-6 space-y-1">
                <p>
                  -{" "}
                  <Link href="#" className="text-blue-600 underline">
                    cv (TODO)
                  </Link>
                </p>
                <p>
                  -{" "}
                  <a href="https://github.com/curiousgurnoor" className="text-blue-600 underline">
                    github
                  </a>
                </p>
                <p>
                  -{" "}
                  <a href="https://x.com/curiousgurnoor" className="text-blue-600 underline">
                    twitter
                  </a>
                </p>
                <p>
                  -{" "}
                  <a href="https://www.linkedin.com/in/gurnoornarula/" className="text-blue-600 underline">
                    linkedin
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
