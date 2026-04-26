# NOMANA-IT Documentation

Source for [docs.nomana-it.fr](https://docs.nomana-it.fr) — documentation, blog and resources for **Liberty Framework**, **NomaUBL**, and the **JD Edwards / BI Publisher** API recipes.

Built with [Docusaurus](https://docusaurus.io/) (TypeScript), deployed to GitHub Pages via GitHub Actions.

## Stack

- **Docusaurus 3** with the classic preset (TypeScript)
- **Local search** via `@easyops-cn/docusaurus-search-local` (will switch to Algolia DocSearch once approved)
- **Giscus** comments on blog posts (GitHub Discussions backend)
- **i18n** wired for `en` + `fr` (FR content falls back to EN until translated)
- **Custom theme**: dark-mode-first, deep navy background, blue/purple gradient accents
- **Custom domain** `docs.nomana-it.fr` shipped via `static/CNAME`

## Local development

Requires Node.js 20+.

```bash
npm install        # one-time
npm run start      # dev server with hot reload at http://localhost:3000
npm run build      # production build to ./build
npm run serve      # serve the production build locally
npm run typecheck  # tsc, no emit
```

To preview the French locale (dev mode is single-locale):

```bash
npm run start -- --locale fr
```

## Project layout

```
.
├── docs/                       # documentation pages (Liberty, NomaUBL, API)
├── blog/                       # blog posts (date-prefixed filenames)
├── src/
│   ├── pages/index.tsx         # custom React homepage
│   ├── theme/                  # swizzled components
│   │   ├── BlogPostItem/       # adds Giscus comments to blog posts
│   │   └── BackToTopButton/    # always-visible scroll-to-top
│   └── css/custom.css          # palette, navbar, sidebar, print styles
├── static/
│   ├── assets/                 # images, logos, PDFs
│   ├── CNAME                   # custom domain
│   └── robots.txt
├── docusaurus.config.ts        # site config, navbar, plugins, SEO meta + JSON-LD
├── sidebars.ts                 # explicit nav structure
└── .github/workflows/deploy.yml
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes via `actions/deploy-pages@v4`. The repo Pages source must be set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## Adding content

- **A doc page**: drop a `.md` (or `.mdx`) file under `docs/<section>/` and add it to the matching sidebar in [sidebars.ts](sidebars.ts).
- **A blog post**: create `blog/YYYY-MM-DD-slug.md` with frontmatter `authors:`, `tags:`. Reuse tags from [blog/tags.yml](blog/tags.yml) or add new ones there.
- **Authors**: defined in [blog/authors.yml](blog/authors.yml).
- **SEO**: every hub page should set `description:` in frontmatter; per-page `keywords:` is supported.

## Search

Local search runs in-browser. To migrate to Algolia DocSearch (free for OSS) once approved:

1. Apply at https://docsearch.algolia.com/apply/
2. Replace the local search plugin entry in [docusaurus.config.ts](docusaurus.config.ts) with `themeConfig.algolia: { appId, apiKey, indexName }`
3. `npm uninstall @easyops-cn/docusaurus-search-local`

## Comments

Giscus is configured in [src/theme/BlogPostItem/index.tsx](src/theme/BlogPostItem/index.tsx) and only renders on individual blog post pages (gated by `useBlogPost().isBlogPostPage`). Discussions are mapped by URL pathname so existing threads stay linked.

## License

Content © Nomana-IT. Code MIT-licensed.
