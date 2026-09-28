import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import BlogPost from "@/components/BlogPost"

const baseUrl = "https://delhiplywood.com"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const url = `${baseUrl}/blog/${post.slug}`

  return {
    title: `${post.frontmatter.title} | Nitin Plywood House Blog`,
    description: post.frontmatter.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [
        {
          url: `${baseUrl}${post.frontmatter.image}`,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aOverlap = a.frontmatter.tags.filter((tag) => post.frontmatter.tags.includes(tag)).length
      const bOverlap = b.frontmatter.tags.filter((tag) => post.frontmatter.tags.includes(tag)).length
      return bOverlap - aOverlap
    })
    .slice(0, 3)

  const url = `${baseUrl}/blog/${post.slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Organization",
      name: "Nitin Plywood House",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Nitin Plywood House",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/nitin-plywood-house-logo.png`,
      },
    },
    image: `${baseUrl}${post.frontmatter.image}`,
    mainEntityOfPage: url,
  }

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
            <li>
              <Link href="/blog" className="hover:text-amber-900 font-medium">
                Blog
              </Link>
            </li>
            <li aria-hidden className="px-1">
              /
            </li>
            <li className="text-amber-900 font-semibold" aria-current="page">
              {post.frontmatter.title}
            </li>
          </ol>
        </nav>

        <BlogPost
          title={post.frontmatter.title}
          html={post.html}
          date={post.frontmatter.date}
          readTime={post.frontmatter.readTime}
          tags={post.frontmatter.tags}
        />

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Related posts</h2>
            <ul className="list-disc list-inside text-amber-800 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="font-semibold text-amber-900 hover:text-amber-700"
                  >
                    {r.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10 bg-white/90 border border-amber-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-amber-900 mb-3">
            Need quality plywood for your project?
          </h2>
          <p className="text-amber-800 mb-3">
            Nitin Plywood House supplies Meranti plywood, pine plywood, MDF, HDMR, sunmica and
            laminates for modular kitchens, wardrobes and full home renovation in Delhi NCR with
            Pan-India supply support.
          </p>
          <p className="text-amber-900 font-semibold">
            Need quality plywood?{" "}
            <a href="tel:+919212017608" className="underline">
              Call +91-9212017608
            </a>{" "}
            or{" "}
            <a
              href="https://wa.me/919212017608"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              chat on WhatsApp
            </a>
            .
          </p>
          <div className="mt-4 text-sm text-amber-800 flex flex-wrap gap-4">
            <Link href="/renovation" className="underline font-semibold text-amber-900">
              Renovation material planning
            </Link>
            <Link href="/blog" className="underline font-semibold text-amber-900">
              Read more plywood guides
            </Link>
          </div>
        </section>

        <a
          href="https://wa.me/919212017608"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-colors"
          aria-label="WhatsApp chat Nitin Plywood House"
        >
          💬
        </a>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </div>
    </main>
  )
}
