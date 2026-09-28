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
}

export default nextConfig