import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string(),
    readTime: z.string(),
    heroImage: z.string().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    keywords: z.string().optional(),
    keyTakeaways: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
