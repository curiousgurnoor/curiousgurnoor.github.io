"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

interface WordPressPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  slug: string
  date: string
  link: string
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim()
}

export default function BlogPage() {
  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)

        // Try different WordPress API endpoints
        const endpoints = [
          "https://public-api.wordpress.com/wp/v2/sites/gurnoornarula.wordpress.com/posts?per_page=20",
          "https://gurnoornarula.wordpress.com/wp-json/wp/v2/posts?per_page=20",
        ]

        let fetchedPosts: WordPressPost[] = []

        for (const endpoint of endpoints) {
          try {
            console.log(`Trying endpoint: ${endpoint}`)

            const response = await fetch(endpoint, {
              headers: {
                Accept: "application/json",
              },
            })

            console.log(`Response status: ${response.status}`)

            if (response.ok) {
              const data = await response.json()
              console.log(`Successfully fetched ${data.length} posts`)
              fetchedPosts = data
              break
            }
          } catch (err) {
            console.error(`Failed to fetch from ${endpoint}:`, err)
            continue
          }
        }

        if (fetchedPosts.length === 0) {
          // Fallback to mock data for preview
          fetchedPosts = [
            {
              id: 1,
              title: { rendered: "Mechanism Design in DeFi: A Practical Approach" },
              content: { rendered: "<p>Sample content...</p>" },
              excerpt: { rendered: "A deep dive into applying game theory and mechanism design to DeFi protocols." },
              slug: "mechanism-design-defi",
              date: "2024-12-15T00:00:00",
              link: "#",
            },
            {
              id: 2,
              title: { rendered: "The Economics of Token Distribution" },
              content: { rendered: "<p>Sample content...</p>" },
              excerpt: { rendered: "An analysis of various token distribution strategies and their market effects." },
              slug: "economics-token-distribution",
              date: "2024-11-20T00:00:00",
              link: "#",
            },
          ]
        }

        setPosts(fetchedPosts)
      } catch (err) {
        console.error("Error in fetchPosts:", err)
        setError("Failed to load posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Group posts by year
  const groupedPosts = posts.reduce(
    (acc, post) => {
      const date = new Date(post.date)
      const year = date.getFullYear().toString()

      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(post)
      return acc
    },
    {} as Record<string, WordPressPost[]>,
  )

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPosts).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <header className="mb-8">
            <Link href="/" className="text-blue-600 underline text-sm">
              ← back to home
            </Link>
            <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">articles & papers</h1>
          </header>
          <p className="text-sm text-gray-600">Loading posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <header className="mb-8">
            <Link href="/" className="text-blue-600 underline text-sm">
              ← back to home
            </Link>
            <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">articles & papers</h1>
          </header>
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </div>
    )
  }

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
          <p>academic papers, articles, and other written pieces i've published.</p>

          {posts.length === 0 ? (
            <p className="text-gray-600">No posts found.</p>
          ) : (
            <div className="space-y-6">
              {sortedYears.map((year) => (
                <div key={year} className="space-y-4">
                  <h2 className="font-semibold text-base mb-3">{year}</h2>
                  <div className="space-y-4">
                    {groupedPosts[year].map((post) => (
                      <div key={post.id}>
                        <p className="font-medium">
                          <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
                            {stripHtml(post.title.rendered)}
                          </Link>
                        </p>
                        <p className="text-gray-600">{formatDate(post.date)}</p>
                        {post.excerpt.rendered && (
                          <p className="text-gray-600 mt-2 text-sm">
                            {stripHtml(post.excerpt.rendered).substring(0, 150)}...
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
