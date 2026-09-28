import Link from "next/link"

export default function BlogPost({
  title,
  html,
  date,
  readTime,
  tags,
}: {
  title: string
  html: string
  date: string
  readTime: string
  tags: string[]
}) {
  return (
    <article className="bg-white rounded-2xl border border-amber-100/60 shadow-lg p-6 sm:p-10">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">
          {new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}{" "}
          • {readTime}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">{title}</h1>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs text-amber-600">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-amber-50 border border-amber-100 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer className="mt-10 border-t border-amber-100 pt-6 text-sm text-amber-700">
        <p className="font-semibold mb-2">Written by Nitin Plywood House Team</p>
        <p>
          Need quality plywood or laminates in Delhi?{" "}
          <a href="tel:+919212017608" className="font-bold text-amber-900">
            Call +91-9212017608
          </a>{" "}
          or{" "}
          <Link href="/" className="font-semibold text-amber-900 hover:text-amber-700">
            visit our Alipur plywood shop
          </Link>
          .
        </p>
      </footer>
    </article>
  )
}
