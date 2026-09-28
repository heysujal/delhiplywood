import catalog from "@/config/products.json"

export type ProductFaq = { q: string; a: string }

export type Product = {
  slug: string
  name: string
  group: string
  icon: string
  summary: string
  intro: string
  image?: string
  grade?: string
  thickness?: string
  sizes?: string
  range?: string
  categories?: string
  brands?: string[]
  uses?: string[]
  howToChoose?: string[]
  faqs?: ProductFaq[]
  // Only set when the shop provides a real range; drives Product schema.
  priceRange?: { min: number; max: number; unit: string }
  seoTitle?: string
  seoDescription?: string
}

export const productGroups: string[] = catalog.groups
export const products: Product[] = catalog.products as Product[]

export const productPath = (slug: string) => `/products/${slug}`

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function productsByGroup(): { group: string; items: Product[] }[] {
  return productGroups
    .map((group) => ({ group, items: products.filter((p) => p.group === group) }))
    .filter(({ items }) => items.length > 0)
}

// Same group first, then the rest, excluding the product itself.
export function relatedProducts(product: Product, count = 3): Product[] {
  const others = products.filter((p) => p.slug !== product.slug)
  return [
    ...others.filter((p) => p.group === product.group),
    ...others.filter((p) => p.group !== product.group),
  ].slice(0, count)
}

// Brands grouped by product group, for the "Brands available" section.
export function brandsByGroup(): { group: string; brands: string[] }[] {
  return productsByGroup()
    .map(({ group, items }) => ({
      group,
      brands: [...new Set(items.flatMap((p) => p.brands ?? []))],
    }))
    .filter(({ brands }) => brands.length > 0)
}
