"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

interface WordPressPost {
  id: number
  title: { rendered: string }
  content: { rendered: string }
  slug: string
  date: string
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  const [post, setPost] = useState<WordPressPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true)

        // Try different WordPress API endpoints
        const endpoints = [
          `https://public-api.wordpress.com/wp/v2/sites/gurnoornarula.wordpress.com/posts?slug=${slug}`,
          `https://gurnoornarula.wordpress.com/wp-json/wp/v2/posts?slug=${slug}`,
        ]

        let fetchedPost: WordPressPost | null = null

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
              const posts = await response.json()
              if (posts.length > 0) {
                console.log(`Successfully fetched post: ${posts[0].title.rendered}`)
                fetchedPost = posts[0]
                break
              }
            }
          } catch (err) {
            console.error(`Failed to fetch from ${endpoint}:`, err)
            continue
          }
        }

        if (!fetchedPost && slug === "mechanism-design-defi") {
          // Fallback for preview
          fetchedPost = {
            id: 1,
            title: { rendered: "Mechanism Design in DeFi: A Practical Approach" },
            content: {
              rendered: `
              <p>Decentralized Finance (DeFi) represents one of the most significant innovations in the financial sector, offering unprecedented opportunities for financial inclusion and innovation.</p>
              <h2>The Role of Mechanism Design</h2>
              <p>Mechanism design provides a framework for designing systems where participants with private information can be incentivized to act in ways that achieve desired outcomes.</p>
              `,
            },
            slug: "mechanism-design-defi",
            date: "2024-12-15T00:00:00",
          }
        }

        setPost(fetchedPost)
      } catch (err) {
        console.error("Error in fetchPost:", err)
        setError("Failed to load post")
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <header className="mb-8">
            <Link href="/blog" className="text-blue-600 underline text-sm">
              ← back to articles
            </Link>
            <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">Loading...</h1>
          </header>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <header className="mb-8">
            <Link href="/blog" className="text-blue-600 underline text-sm">
              ← back to articles
            </Link>
            <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-6">Post not found</h1>
          </header>
          <p className="text-sm text-gray-600">The requested article could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <header className="mb-8">
          <Link href="/blog" className="text-blue-600 underline text-sm">
            ← back to articles
          </Link>
          <h1 className="text-2xl font-mono font-bold text-black mt-4 mb-2">{post.title.rendered}</h1>
          <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
        </header>

        <main>
          <div
            className="text-sm leading-relaxed space-y-4 [&>h1]:text-lg [&>h1]:font-bold [&>h1]:mt-6 [&>h1]:mb-3 [&>h2]:text-base [&>h2]:font-semibold [&>h2]:mt-5 [&>h2]:mb-2 [&>h3]:text-sm [&>h3]:font-medium [&>h3]:mt-4 [&>h3]:mb-2 [&>p]:mb-3 [&>ul]:ml-4 [&>ol]:ml-4 [&>li]:mb-1 [&>blockquote]:border-l-2 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>a]:text-blue-600 [&>a]:underline [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </main>
      </div>
    </div>
  )
}
