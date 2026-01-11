import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    summary: z.string(),
    tags: z.array(z.string()),
    canonicalUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    oneLiner: z.string(),
    tags: z.array(z.string()),
    industry: z.string(),
    stack: z.array(z.string()),
    problem: z.string(),
    constraints: z.string(),
    approach: z.string(),
    results: z.string(),
    outcomes: z.array(z.string()).default([]),
    ctas: z.array(z.object({
      label: z.string(),
      href: z.string(),
      variant: z.enum(['primary', 'secondary', 'ghost']).default('secondary'),
    })).default([]),
    artifacts: z.array(z.object({
      type: z.enum(['image', 'video', 'link', 'demo']),
      url: z.string(),
      label: z.string(),
      caption: z.string().optional(),
    })).default([]),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
