import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import gfm from "remark-gfm"

export type BlogFrontmatter = {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image: string
  readTime: string
}

export type BlogPost = {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
  html: string
}

const blogDirectory = path.join(process.cwd(), "content", "blog")

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return []
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
}

export function getAllPosts(): BlogPost[] {
  const slugs = getBlogSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => !!post)

  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const frontmatter = {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Nitin Plywood House Team",
    tags: data.tags || [],
    image: data.image || "/images/blog/default.jpg",
    readTime: data.readTime || "5 min read",
  } as BlogFrontmatter

  const processedContent = remark().use(gfm).use(html).processSync(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    frontmatter,
    content,
    html: contentHtml,
  }
}

