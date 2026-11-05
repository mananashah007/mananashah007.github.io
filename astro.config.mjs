// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// ---------------------------------------------------------------------------
// Deployment settings
//
// Two environment variables control the deployed URLs. The GitHub Actions
// workflow (.github/workflows/deploy.yml) sets both automatically; locally you
// can leave them unset.
//
//   PUBLIC_SITE_URL  e.g. https://mananshah.github.io
//   BASE_PATH        '' for a user site (username.github.io)
//                    '/portfolio' for a project site (username.github.io/portfolio)
// ---------------------------------------------------------------------------
const site = process.env.PUBLIC_SITE_URL || 'https://example.github.io';
const rawBase = process.env.BASE_PATH || '/';

const base = rawBase === '' ? '/' : rawBase.startsWith('/') ? rawBase : `/${rawBase}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: 'heading-anchor' } }],
      rehypeKatex,
    ],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },
  integrations: [sitemap()],
});
