import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import BlogCard from "@/components/BlogCard"

const baseUrl = "https://delhiplywood.com"

export const metadata: Metadata = {
  title: "Plywood & Sunmica Blog | Buying Guides & Tips | Delhi Plywood House",
  description:
    "Read expert guides on plywood, sunmica, laminates, MDF and modular kitchen materials in Delhi. Learn how to choose the best plywood for kitchen, wardrobe and home renovation.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/blog`,
    title: "Delhi Plywood House Blog | Plywood & Sunmica Guides",
    description:
      "In-depth plywood and laminate guides for modular kitchens, wardrobes and Delhi home renovation projects.",
    images: [
      {
        url: `${baseUrl}/hero-logo.png`,
        width: 1200,
        height: 630,
        alt: "Delhi Plywood House - Plywood & Hardware in Delhi",
      },
    ],
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-4 sm:px-6 lg:px-8 py-24">
      <div className="container mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm mb-4 text-amber-700">
          <ol className="flex items-center gap-1">
            <li>
              <Link href="/" className="hover:text-amber-900 font-medium">
                Home
              </Link>
            </li>
            <li aria-hidden className="px-1">
              /
            </li>
            <li className="text-amber-900 font-semibold" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Plywood &amp; Sunmica Blog for Delhi Homes
          </h1>
          <p className="text-amber-800 text-lg max-w-3xl">
            Practical guides from Delhi Plywood House to help you choose the right plywood, sunmica,
            laminates and MDF for modular kitchens, wardrobes and full home renovation in Delhi NCR.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>

        <section className="mt-12 text-sm text-amber-700">
          <p>
            Looking for{" "}
            <strong>“plywood near me in Delhi”</strong> or the{" "}
            <strong>best plywood shop in Alipur</strong>?{" "}
            <Link href="/" className="font-semibold text-amber-900 hover:text-amber-700">
              Visit Delhi Plywood House
            </Link>{" "}
            for HDMR boards, Action TESA, sunmica, laminates and complete hardware solutions.
          </p>
        </section>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: baseUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${baseUrl}/blog`,
                },
              ],
            }),
          }}
        />
      </div>
    </main>
  )
}

