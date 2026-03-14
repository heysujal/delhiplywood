import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

export default function BlogCard({ post }: { post: BlogPost }) {
  const { slug, frontmatter } = post
  return (
    <article className="bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-100/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">
          {new Date(frontmatter.date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-2">
          <Link href={`/blog/${slug}`} className="hover:text-amber-600 transition-colors">
            {frontmatter.title}
          </Link>
        </h2>
        <p className="text-amber-700 mb-3 line-clamp-3">{frontmatter.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-amber-600 mb-4">
          <span className="px-2 py-1 bg-amber-100 rounded-full font-medium">
            {frontmatter.readTime}
          </span>
          {frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-orange-50 border border-amber-100 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-amber-900 font-semibold hover:text-amber-600"
        >
          Read article
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}

