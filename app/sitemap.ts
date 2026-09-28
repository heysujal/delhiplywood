import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { products, productPath } from "@/lib/products"

const baseUrl = "https://delhiplywood.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/renovation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const productRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/products`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...products.map((product) => ({
      url: `${baseUrl}${productPath(product.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]

  return [...staticRoutes, ...productRoutes, ...blogRoutes]
}

