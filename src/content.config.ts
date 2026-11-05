import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().max(300),
    // Use a real past date — future dates are hidden until they arrive.
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // draft: true keeps the post out of the production build.
    draft: z.boolean().default(false),
    // Optional: a wide image at public/authors/your-post.jpg
    image: z.string().optional(),
  }),
});

export const collections = { blog };
