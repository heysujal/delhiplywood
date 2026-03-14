# Blog Publishing Workflow

## Create a new blog draft

Run:

```bash
npm run new:blog -- "Best Plywood for Kitchen Cabinets in Delhi"
```

This creates a ready-to-edit markdown file in `content/blog/` with frontmatter and a writing structure.

## Fill the draft

Update these fields first:

- `title`
- `description`
- `tags`
- `image`

Then write content in simple sections:

- Introduction
- Main points
- FAQs
- Call to action

## Publish

Save the file. The post automatically appears in:

- `/blog`
- `/blog/[slug]`
- sitemap (`/sitemap.xml`)

No CMS required.
