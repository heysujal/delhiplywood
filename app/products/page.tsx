import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { productsByGroup, productPath } from "@/lib/products"
import { baseUrl } from "@/lib/contact"

const title = "Plywood, Boards, Laminates & Hardware in Delhi | Nitin Plywood House"
const description =
  "Browse BWP, BWR, Gurjan and pine plywood, block board, MDF, HDHMR, WPC boards, doors, laminates, edge band, Fevicol and hardware at Nitin Plywood House, Alipur, Delhi."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/products` },
  openGraph: { type: "website", url: `${baseUrl}/products`, title, description },
}

export default function ProductsPage() {
  const groups = productsByGroup()

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      <div className="container mx-auto max-w-6xl">
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
              Products
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Plywood, Boards, Laminates &amp; Hardware in Delhi
          </h1>
          <p className="text-amber-800 text-lg max-w-3xl">
            Everything your carpenter needs, from one shop in Alipur: plywood in every grade, boards,
            doors, laminates, adhesives and fittings, with delivery across Delhi NCR.
          </p>
        </header>

        {groups.map(({ group, items }) => (
          <section key={group} className="mb-12">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">{group}</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={productPath(product.slug)}
                    className="block h-full bg-white rounded-2xl border border-amber-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={400}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="w-full h-44 object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center text-6xl bg-amber-50 h-44">
                        {product.icon}
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-amber-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-amber-700">{product.summary}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
