"use client"

import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/cardsharps.jpg"
            alt="The Cardsharps by Caravaggio"
            width={510}
            height={400}
            className="object-cover"
            priority
          />
        </div>

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-mono font-bold text-black mb-1">gurnoor singh narula</h1>
        </header>

        {/* Main Content */}
        <main className="space-y-3 text-sm leading-relaxed">
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
            <p className="ml-4">
              (-) collaborative learning with{" "}
              <a href="https://lu.ma/calendar/cal-83qgXZHIf3NOLJd" className="text-blue-600 underline">
                [rcnyc]
              </a>{" "}
              to examine compelling ideas at the frontier of cryptonetworks
            </p>
          </div>

          <div>
            <p>prior to joining placeholder vc:</p>
            <p className="ml-4">
              (-) [2023 - current] research assistant @ haas school of business, under the mentorship of{" "}
              <a href="https://sites.google.com/berkeley.edu/thefinanceparlour/" className="text-blue-600 underline">
                prof. christine parlour
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
              (-) [2021 - 2024] bachelor's in electrical engineering & computer science @ uc berkeley
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-4">
            <div>
              <p>
                i also do some{" "}
                <Link href="/blog" className="text-blue-600 underline">
                  writing
                </Link>{" "}
                about my areas of focus and lessons i've learnt. i also enjoy{" "}
                <Link href="/books" className="text-blue-600 underline">
                  reading
                </Link>
                .
              </p>
            </div>
            <div>
              <p>
                find me on{" "}
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
        </main>
      </div>
    </div>
  )
}
