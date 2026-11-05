/**
 * URL helpers.
 *
 * `import.meta.env.BASE_URL` is replaced at build time with the configured
 * `base` (e.g. '/' or '/my-repo/'). Every internal link and public asset goes
 * through `url()` so the site can be deployed at a domain root, at a project
 * path on GitHub Pages, or on a custom domain without code changes.
 */

const BASE = import.meta.env.BASE_URL;

/** Root-relative URL for a site path: url('blog/') -> '/blog/' or '/repo/blog/'. */
export function url(path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return BASE.endsWith('/') ? BASE + clean : `${BASE}/${clean}`;
}

/** Absolute URL (for canonical links, RSS and sitemaps). */
export function absolute(path = ''): string {
  const site = import.meta.env.SITE ?? 'https://example.github.io';
  return new URL(url(path), site).href;
}

/** Format a date consistently (UTC so builds are deterministic). */
export function formatDate(date: Date, style: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
