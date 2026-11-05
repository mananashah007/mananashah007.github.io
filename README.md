# mananshah.github.io

Personal site and writing — built with [Astro](https://astro.build), deployed to
GitHub Pages. Static HTML/CSS, no client framework, no tracking.

**Sections:** About · Experience · Skills · Projects · Education · Writing

---

## Editing the site

Almost all personal content lives in **one file**:

```
src/data/site.ts
```

There you will find:

| Export       | What it controls                                              |
| ------------ | ------------------------------------------------------------- |
| `site`       | Name, role, tagline, email, location, social links, résumé PDF |
| `experience` | Jobs — role, org, dates, bullets, tool tags                    |
| `education`  | Degrees, schools, years, coursework                            |
| `skills`     | Skill groups and the tags inside them                          |
| `projects`   | Project cards — title, blurb, tags, links                      |
| `nav`        | Reserved for nav ordering (the header uses a short list)       |

### Things to replace before applying

- [ ] `site.email` (used in the hero button and at the end of every post)
- [ ] LinkedIn / GitHub URLs and your résumé PDF: drop `resume.pdf` into `public/`
      (the link only appears if the file exists)
- [ ] Optional photo: save a square image as `public/photo.jpg` and add
      `photo: 'photo.jpg'` inside `site` in `src/data/site.ts`
- [ ] Replace the placeholder jobs, education, projects and skills
- [ ] Replace or delete the three example blog posts in `src/content/blog/`
- [ ] Set your real URL (`PUBLIC_SITE_URL` below) so canonical links and the
      sitemap are correct

## Writing a post

```bash
pnpm new-post "Your title here" --tags=Statistics,Economics
```

That creates `src/content/blog/your-title-here.md` with frontmatter and
`draft: true`. Write in Markdown; then:

- **Publish:** set `draft: false` (or delete the line).
- **Math:** works out of the box — inline `$P(A \mid B)$` and display
  `$$ ... $$` (KaTeX, styled to match the site).
- **Code:** fenced blocks are syntax-highlighted with a light/dark theme pair.
- **Draft preview:** `pnpm dev` shows drafts; production builds hide them.

Frontmatter fields: `title`, `description`, `pubDate`, `tags[]`, `draft`,
optional `updatedDate` and `image` (a path inside `public/`, e.g.
`images/chart.png`).

## Run locally

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
pnpm preview    # serve the built site
```

## Deploying to GitHub Pages

1. Create a repository.
   - For a **user site** at `https://<username>.github.io`, name it
     `<username>.github.io`. The site is served from the domain root.
   - For a **project site** at `https://<username>.github.io/<repo>`, any name
     works. The workflow detects the path automatically.
2. Push the code to the `main` branch.
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub
   Actions**.
4. That's it. Every push to `main` runs `.github/workflows/deploy.yml`, which
   works out the correct `base` path, builds, and deploys.

### Custom domain

Add your domain under **Settings → Pages → Custom domain**, then add a
repository variable `PUBLIC_SITE_URL` (**Settings → Secrets and variables →
Actions → Variables**) set to `https://yourdomain.com` and push again. The
workflow then builds for the domain root, and canonical URLs and the RSS feed
use it too.

To build manually for a specific location:

```bash
PUBLIC_SITE_URL=https://example.github.io BASE_PATH=/portfolio pnpm build
```

`BASE_PATH` defaults to `/` (domain root). Leave it empty for a user site.

## How it is put together

```
src/
  data/site.ts            ← edit this first
  content/blog/*.md       ← posts (Markdown)
  content.config.ts       ← frontmatter schema
  layouts/Base.astro      ← <head>, SEO/OpenGraph/JSON-LD, theme, nav, footer
  components/             ← Hero, Section, cards, lists, TOC…
  pages/
    index.astro           ← the one-page portfolio
    blog/index.astro      ← post index with topic filter
    blog/[slug].astro     ← post page (TOC, reading time, prev/next)
    rss.xml.ts
    404.astro
  lib/url.ts              ← base-aware link + date helpers
  styles/global.css       ← design tokens, prose styles, dark mode
public/
  fonts.css, fonts/       ← self-hosted Newsreader + Inter (no third-party requests)
  katex/                  ← self-hosted KaTeX CSS + fonts
  favicon.svg
```

- **Design:** warm paper background, serif display type, one teal accent. Light
  and dark themes; the toggle respects the OS preference until you choose.
- **Content model:** the writing section is a Markdown content collection, so
  posts are files, not HTML.
- **Links:** every internal URL goes through `url()` in `src/lib/url.ts` and is
  prefixed with Astro's `base`, so the same build works at a domain root or a
  project path.
- **Print:** the home page prints like a résumé (`⌘P`).

## Licence

The code is yours to use. The writing and personal content are © Manan Shah.
