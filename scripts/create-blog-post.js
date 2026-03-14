#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

function toSlug(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

function getToday() {
  return new Date().toISOString().slice(0, 10)
}

function estimateReadTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(4, Math.ceil(words / 220))
  return `${minutes} min read`
}

const title = process.argv.slice(2).join(" ").trim()

if (!title) {
  console.error('Usage: npm run new:blog -- "Your Blog Title"')
  process.exit(1)
}

const slug = toSlug(title)
const date = getToday()
const filePath = path.join(BLOG_DIR, `${slug}.md`)

if (fs.existsSync(filePath)) {
  console.error(`Blog already exists: ${filePath}`)
  process.exit(1)
}

fs.mkdirSync(BLOG_DIR, { recursive: true })

const body = `## Introduction

Write a short introduction focused on one clear search intent.

## Main Points

- Add practical points with examples.
- Keep language simple and useful.
- Link related pages:
  - [Home](/)
  - [Renovation Guide](/renovation)
  - [Blog](/blog)

## FAQs

### Question 1

Answer in 2-4 short lines.

### Question 2

Answer in 2-4 short lines.

## Call to Action

Need plywood, MDF, HDMR, laminates, or hardware in Delhi? Call **+91-9212017608** or message us on WhatsApp.
`

const content = `---
title: "${title}"
description: "Write a compelling summary for search results in 140-160 characters."
date: "${date}"
author: "Delhi Plywood House Team"
tags:
  - plywood delhi
  - buying guide
image: "/images/blog/${slug}.jpg"
readTime: "${estimateReadTime(body)}"
---

${body}`

fs.writeFileSync(filePath, content, "utf8")

console.log(`Created: ${filePath}`)
