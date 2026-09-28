/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Let Vercel resize photos per card/screen instead of shipping 1200px files.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // www served a full duplicate of the site, which Google crawled as a
  // separate host. Send it to the apex domain the canonicals point at.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.delhiplywood.com" }],
        destination: "https://delhiplywood.com/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig