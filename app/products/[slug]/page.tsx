import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import businessConfig from "@/config/business.json"
import { getProduct, products, productPath, relatedProducts } from "@/lib/products"
import { baseUrl, telHref, whatsappHref, productEnquiry } from "@/lib/contact"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug)
  if (!product) return {}

  const title = product.seoTitle ?? `${product.name} in Delhi | Nitin Plywood House`
  const brands = product.brands?.length ? ` Brands: ${product.brands.join(", ")}.` : ""
  const description =
    product.seoDescription ??
    `${product.summary}${brands} Available at Nitin Plywood House, Alipur, with delivery across Delhi NCR. Call ${businessConfig.phone}.`
  const url = `${baseUrl}${productPath(product.slug)}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: `${baseUrl}${product.image ?? businessConfig.ogImage}`, alt: product.name }],
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug)
  if (!product) return notFound()

  const url = `${baseUrl}${productPath(product.slug)}`
  const related = relatedProducts(product)

  const specs = [
    ["Grade", product.grade],
    ["Thickness", product.thickness],
    ["Sizes", product.sizes],
    ["Range", product.range],
    ["Includes", product.categories],
    ["Brands", product.brands?.join(", ")],
  ].filter((row): row is [string, string] => Boolean(row[1]))

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Products", item: `${baseUrl}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: url },
    ],
  }

  // Product markup only with a real price range: Google flags Product items
  // without offers, and invented prices violate its policies.
  const productSchema = product.priceRange && {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.intro,
    image: product.image ? `${baseUrl}${product.image}` : undefined,
    url,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: product.priceRange.min,
      highPrice: product.priceRange.max,
      availability: "https://schema.org/InStock",
      seller: { "@id": `${baseUrl}/#business` },
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      <div className="container mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm mb-6 text-amber-700">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-amber-900 font-medium">
                Home
              </Link>
            </li>
            <li aria-hidden className="px-1">
              /
            </li>
            <li>
              <Link href="/products" className="hover:text-amber-900 font-medium">
                Products
              </Link>
            </li>
            <li aria-hidden className="px-1">
              /
            </li>
            <li className="text-amber-900 font-semibold" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-2xl border border-amber-100/60 shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {product.image ? (
              <Image
                src={product.image}
                alt={`${product.name} in stock at Nitin Plywood House, Delhi`}
                width={800}
                height={800}
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-72 md:h-[460px] object-cover"
              />
            ) : (
              <div className="flex items-center justify-center text-8xl bg-amber-50 h-72 md:h-full">
                {product.icon}
              </div>
            )}

            <div className="p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">
                {product.group}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
                {product.name} in Delhi
              </h1>
              <p className="text-amber-800 leading-relaxed mb-6">{product.intro}</p>

              {specs.length > 0 && (
                <table className="w-full text-sm mb-6">
                  <tbody>
                    {specs.map(([label, value]) => (
                      <tr key={label} className="border-b border-amber-100">
                        <th scope="row" className="text-left py-2 pr-4 font-semibold text-amber-900 w-28 align-top">
                          {label}
                        </th>
                        <td className="py-2 text-amber-800">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {product.priceRange && (
                <p className="mb-6 text-amber-900">
                  <strong>Price:</strong> ₹{product.priceRange.min.toLocaleString("en-IN")} – ₹
                  {product.priceRange.max.toLocaleString("en-IN")} {product.priceRange.unit}{" "}
                  <Link href="/plywood-price-delhi" className="underline text-amber-700">
                    (price list)
                  </Link>
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 shadow-lg"
                >
                  Call for price
                </a>
                <a
                  href={whatsappHref(productEnquiry(product.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-lg font-semibold text-amber-900 border-2 border-amber-600/30 bg-white hover:bg-amber-50"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 border-t border-amber-100 grid gap-10 md:grid-cols-2">
            {product.uses && product.uses.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-amber-900 mb-3">Where to use {product.name}</h2>
                <ul className="list-disc list-inside space-y-1 text-amber-800">
                  {product.uses.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>
              </section>
            )}
            {product.howToChoose && product.howToChoose.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-amber-900 mb-3">How to choose</h2>
                <ul className="list-disc list-inside space-y-1 text-amber-800">
                  {product.howToChoose.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {product.brands && product.brands.length > 0 && (
            <section className="px-6 sm:px-10 pb-8">
              <h2 className="text-xl font-bold text-amber-900 mb-3">Brands available at our store</h2>
              <ul className="flex flex-wrap gap-2">
                {product.brands.map((brand) => (
                  <li key={brand} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    {brand}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="px-6 sm:px-10 pb-10">
            <h2 className="text-xl font-bold text-amber-900 mb-3">Frequently asked questions</h2>
            <div className="space-y-3">
              {[
                ...(product.faqs ?? []),
                {
                  q: `Do you deliver ${product.name} across Delhi?`,
                  a: "Yes. We deliver across Delhi and Delhi NCR (Gurugram, Noida, Ghaziabad, Faridabad, Sonipat, Bahadurgarh), often the same day depending on stock and timing, and supply across India by transport.",
                },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                  <summary className="cursor-pointer font-semibold text-amber-900">{faq.q}</summary>
                  <p className="mt-2 text-amber-800 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Related products</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={productPath(item.slug)}
                  className="block h-full rounded-xl bg-white border border-amber-100 p-4 hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-amber-900">{item.name}</span>
                  <span className="block text-sm text-amber-700 mt-1">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-amber-800">
            Visit us at {businessConfig.address.full}, or{" "}
            <Link href="/products" className="underline font-semibold text-amber-900">
              see all products
            </Link>
            .
          </p>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {productSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
          />
        )}
      </div>
    </main>
  )
}
