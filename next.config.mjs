/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Essays used to be web pages at /writing/<slug>; they're now PDFs at /writing/<slug>.pdf.
  async redirects() {
    return [
      {
        source: "/writing/:slug((?!.*\\.pdf$)[^/]+)",
        destination: "/writing/:slug.pdf",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
