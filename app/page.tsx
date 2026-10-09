import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-black mb-1" style={{ fontFamily: '"Segoe Print", "Bradley Hand", cursive', fontWeight: 800, letterSpacing: '-0.02em' }}>gurnoor singh narula</h1>
        </header>

        {/* Main Content */}
        <main className="space-y-3 text-sm leading-relaxed">
          <div>
            <p className="mb-2">
              hey there! i&apos;m an <span>early-stage<sup>1</sup></span> venture investor at{" "}
              <a href="https://www.hashed.com/" className="text-blue-600 underline">
                hashed
              </a>
              . i believe<sup>2</sup> that:
            </p>
            <p className="ml-4">(-) financial infra and assets will run on programmable, composable, and distributed rails</p>
            <p className="ml-4">(-) consumer data economies will exist in a local, decentralized, and private manner</p>
            <p className="ml-4">(-) esoteric AI infrastructure will continue to scale frontier intelligence</p>
            <p className="ml-4">(-) we can throw frontier models to solve hard problems in life sciences, deployment-ready robotics, and smart defense</p>
            <p className="mt-2">
              my investments include:{" "}
              <a href="https://theagi.company" className="text-blue-600 underline">
                agi inc.
              </a>
            </p>
            <p className="mt-2">i&apos;m also:</p>
            <p className="ml-4">
              (-) building out{" "}
              <a href="https://euclidrisk.com" className="text-blue-600 underline">
                euclid labs
              </a>{" "}with my friends{" "}
              <a href="https://linkedin.com/in/kiyan-mohebbizadeh" className="text-blue-600 underline">
                kiyan
              </a>{" "}
              and{" "}
              <a href="https://linkedin.com/in/antoine-lena" className="text-blue-600 underline">
                antoine
              </a>
            </p>
            <p className="ml-4">(-) learning collaboratively with{" "}<a href="https://luma.com/rcnyc" className="text-blue-600 underline">[rcnyc]</a>{" "}to examine compelling frontier r&amp;d ideas</p>
            <p className="ml-4">
              (-) researching @ haas school of business, under the mentorship of{" "}
              <a href="https://sites.google.com/berkeley.edu/thefinanceparlour/" className="text-blue-600 underline">
                prof. christine parlour
              </a>
            </p>
          </div>


          {/* Content Sections */}
          <div className="space-y-4">
            <div>
              <p>
                i do some{" "}
                <Link href="/blog" className="text-blue-600 underline">
                  writing
                </Link>{" "}
                about conceptual frameworks in venture investing & technology, niche areas of frontier research i find exciting, and interesting conversations i have with folks in the space.
              </p>
              <p className="mt-2">
                i also enjoy reading, and i{"'"}m currently studying{" "}
                <em>Technological Revolutions & Financial Capital</em> by Prof. Carlota Perez.
              </p>
              <div className="mt-4">
                <p>prior to joining hashed:</p>
                <p className="ml-4">
                  (-) [2024 - 2026] research analyst @{" "}
                  <a href="https://www.placeholder.vc/" className="text-blue-600 underline">
                    placeholder vc
                  </a>
                </p>
                <p className="ml-4">(-) [2023 - 2024] president @ blockchain at berkeley</p>
                <p className="ml-4">
                  (-) [summer '23] fpga research intern @ intel (contributed to{" "}
                  <a href="https://arxiv.org/pdf/2412.12481" className="text-blue-600 underline">
                    this paper
                  </a>
                  )
                </p>
                <p className="ml-4">(-) [2022 - 2023] managing director @ berkeley blockchain xcelerator</p>
                <p className="ml-4">
                  (-) [2021 - 2024] bachelor&apos;s in electrical engineering & computer science @ uc berkeley
                </p>
              </div>
              <p className="mt-4">
                drop me a line at gurnoor(at)hashed(dot)com. find me on{" "}
                <a href="https://x.com/curiousgurnoor" className="text-blue-600 underline">
                  twitter
                </a>
                ,{" "}
                <a href="https://www.linkedin.com/in/gurnoornarula/" className="text-blue-600 underline">
                  linkedin
                </a>
                , and{" "}
                <a href="https://github.com/curiousgurnoor" className="text-blue-600 underline">
                  github
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-6 italic">
            <p>
              1: <a href="https://youtube.com/watch?v=jTu8lvRcpuw" className="text-blue-600 underline">playing the infinite game</a>
            </p>
            <p>
              2: <a href="https://avc.com/2016/06/strong-views-weakly-held" className="text-blue-600 underline">strong views, weakly held</a>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
