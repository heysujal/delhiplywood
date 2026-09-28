import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import businessConfig from "@/config/business.json"
import reviewsConfig from "@/config/reviews.json"
import { baseUrl, telHref, directionsHref } from "@/lib/contact"

const { businessName, owner, about, established, address, hours, phone } = businessConfig
const years = new Date().getFullYear() - Number(established)

const title = `About Us | ${businessName}, Alipur, Delhi, since ${established}`
const description = `${businessName} was started in ${established} by ${owner.name} in Alipur, Delhi. ${years}+ years of plywood, boards, laminates and hardware, with delivery across Delhi NCR.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: { type: "profile", url: `${baseUrl}/about`, title, description },
}

// Newest written Google reviews (they mostly talk about the owner's guidance).
const customerWords = reviewsConfig.reviews.filter((r) => r.text).slice(0, 3)

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${baseUrl}/about`,
    name: title,
    about: { "@id": `${baseUrl}/#business` },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-4 sm:px-6 lg:px-8 pt-28 pb-24">
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
              About
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-2xl border border-amber-100/60 shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-5">
            <figure className="md:col-span-2">
              <Image
                src={owner.photo}
                alt={`${owner.name}, owner of ${businessName}, at the shop counter in Alipur`}
                width={540}
                height={675}
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="w-full aspect-square md:aspect-auto md:h-full object-cover object-[50%_20%]"
              />
              <figcaption className="sr-only">
                {owner.name} at the {businessName} counter
              </figcaption>
            </figure>

            <div className="md:col-span-3 p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">
                Since {established} · Alipur, Delhi
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-6">About {businessName}</h1>
              <div className="space-y-4 text-amber-800 leading-relaxed">
                {about.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <dl className="grid grid-cols-2 gap-4 mt-8 text-sm">
                <div className="rounded-xl bg-amber-50 p-4">
                  <dt className="text-amber-700">Owner</dt>
                  <dd className="font-semibold text-amber-900">{owner.name}</dd>
                </div>
                <div className="rounded-xl bg-amber-50 p-4">
                  <dt className="text-amber-700">In business</dt>
                  <dd className="font-semibold text-amber-900">{years}+ years (since {established})</dd>
                </div>
              </dl>
            </div>
          </div>

          {customerWords.length > 0 && (
            <section className="p-6 sm:p-10 border-t border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-4">What customers say</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {customerWords.map((review) => (
                  <blockquote key={review.author} className="rounded-xl bg-amber-50/60 p-4 text-amber-800">
                    <p className="leading-relaxed">"{review.text}"</p>
                    <footer className="mt-2 text-sm font-semibold text-amber-900">
                      {review.author}, Google review
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          )}

          <section className="p-6 sm:p-10 border-t border-amber-100 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-3">Visit the shop</h2>
              <p className="text-amber-800">{address.full}</p>
              <p className="text-amber-800 mt-2">Open every day, {hours.weekdays}</p>
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 underline font-semibold text-amber-900">
                Get directions
              </a>
            </div>
            <div>
              <h2 className="text-xl font-bold text-amber-900 mb-3">Talk to us</h2>
              <p className="text-amber-800">
                Call{" "}
                <a href={telHref} className="font-semibold text-amber-900 underline">
                  {phone}
                </a>{" "}
                or browse{" "}
                <Link href="/products" className="font-semibold text-amber-900 underline">
                  our products
                </Link>
                .
              </p>
            </div>
          </section>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      </div>
    </main>
  )
}
