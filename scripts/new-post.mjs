#!/usr/bin/env node
/**
 * Scaffolds a new blog post with correct frontmatter.
 *
 *   pnpm new-post "The Base Rate Is the Story"
 *   pnpm new-post "Simpson's Paradox" --tags Statistics,Causal-inference
 *
 * Creates src/content/blog/<slug>.md and prints the path.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const title = args.find((arg) => !arg.startsWith('--'));

if (!title) {
  console.error('Usage: pnpm new-post "Post title" [--tags Statistics,Business]');
  process.exit(1);
}

const tagsArg = args.find((arg) => arg.startsWith('--tags=')) ?? '';
const tags = (tagsArg ? tagsArg.split('=')[1] : '')
  .split(',')
  .map((tag) => tag.trim())
  .filter(Boolean);

const slug = title
  .toLowerCase()
  .replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const today = new Date().toISOString().slice(0, 10);
const dir = path.join(process.cwd(), 'src', 'content', 'blog');
const file = path.join(dir, `${slug}.md`);

const tagLine = tags.length ? `[${tags.map((t) => `'${t}'`).join(', ')}]` : '[]';

const content = `---
title: '${title.replace(/'/g, "''")}'
description: 'One or two sentences that would make someone want to read this.'
pubDate: ${today}
tags: ${tagLine}
draft: true
---

Opening paragraph. Set the question the post answers, and why it is interesting.

## A first section

Write here. Markdown, code blocks, tables and LaTeX math all work:

$$
P(H \\mid E) = \\frac{P(E \\mid H)\\,P(H)}{P(E)}
$$

## A second section

More here.

## Takeaway

What should a reader do differently?
`;

if (existsSync(file)) {
  console.error(`Refusing to overwrite existing file: ${file}`);
  process.exit(1);
}

await mkdir(dir, { recursive: true });
await writeFile(file, content, 'utf8');
console.log(`Created ${path.relative(process.cwd(), file)}`);
console.log('Set draft: false (or delete the line) when you are ready to publish.');
