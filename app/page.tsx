"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/profile.jpg"
              alt="Gurnoor Singh Narula"
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
            <h1 className="text-2xl font-mono font-bold text-black">gurnoor singh narula</h1>
          </div>
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
              (-) [2021-2024] bachelor's in electrical engineering & computer science @ uc berkeley
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
                about my areas of focus and lessons i've learnt.
              </p>
            </div>

            <div>
              <p className="font-medium">links</p>
              <div className="ml-6 space-y-1">
                <p>
                  -{" "}
                  <a
                    href="https://drive.google.com/file/d/1B65ulw34f1rNXt4mmZGhEOz363QonwHw/view?usp=sharing"
                    className="text-blue-600 underline"
                  >
                    resume
                  </a>
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

            <SecretProjects />
          </div>
        </main>
      </div>
    </div>
  )
}

function SecretProjects() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-dashed border-gray-300 rounded p-2 hover:border-gray-500 transition-colors">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left flex items-center gap-2 text-gray-600 hover:text-black focus:outline-none transition-colors font-mono"
      >
        <span className="text-green-600">{isExpanded ? ">" : "$"}</span>
        <span className="text-purple-600">cat</span>{" "}
        {isExpanded ? "other_cool_things.txt" : "./hidden/other_cool_things.txt"}
        {!isExpanded && <span className="text-gray-400 text-xs ml-2 animate-pulse">(click to reveal)</span>}
      </button>

      {isExpanded && (
        <div className="mt-3 pl-4 border-l-2 border-green-200 space-y-3 text-sm leading-relaxed">
          <div className="group">
            <p className="flex items-start">
              <span className="text-green-600 mr-2 font-mono">{">"}</span>
              <a href="https://lu.ma/calendar/cal-83qgXZHIf3NOLJd" className="text-blue-600 underline">
                [rcnyc]
              </a>
              <span className="ml-1">:</span>
            </p>
            <p className="text-gray-600 ml-6 group-hover:text-black transition-colors">
              a series of concerted meetings for new york's crypto community to examine the most compelling ideas at the
              bleeding edge of r&d
            </p>
          </div>

          <div className="group">
            <p className="flex items-start">
              <span className="text-green-600 mr-2 font-mono">{">"}</span>
              <a href="https://www.instagram.com/gurnoorsgarage/" className="text-blue-600 underline">
                gurnoor's garage
              </a>
              <span className="ml-1">:</span>
            </p>
            <p className="text-gray-600 ml-6 group-hover:text-black transition-colors">
              a documentation of my favorite car finds on streets, at cafes, at car shows, and literally anywhere else
              (also some opinions and observations about the automobile & racing world)
            </p>
          </div>

          <div className="group">
            <p className="flex items-start">
              <span className="text-green-600 mr-2 font-mono">{">"}</span>
              <Link href="#" className="text-blue-600 underline">
                the practice garage (TODO)
              </Link>
              <span className="ml-1">:</span>
            </p>
            <p className="text-gray-600 ml-6 group-hover:text-black transition-colors">
              my performances of original jazz improv, classic etudes, & big band/blues music on my selmer mark VI tenor
              saxophone
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
