import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.union([z.date(), z.string()]).transform((val) => new Date(val)),
    category: z.string().optional().nullable(),
    categories: z.union([z.array(z.string()), z.string()]).optional().nullable(),
    tags: z.union([z.array(z.string()), z.string()]).optional().nullable().transform((val) => {
      if (!val) return [];
      if (typeof val === 'string') return [val];
      return val;
    }),
    layout: z.string().optional().nullable(),
  })
});

const coursesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.string().default('Course Platform'),
    platformUrl: z.string().optional(),
    platform_url: z.string().optional(),
    price: z.union([z.number(), z.string()]).optional(),
    currency: z.string().default('EUR'),
    status: z.string().default('active'),
    coverImage: z.string().optional(),
    cover_image: z.string().optional(),
    badge: z.string().optional(),
    duration: z.string().optional(),
  })
});

const softwareCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.string().default('beta'), // live | beta | coming-soon
    stack: z.string(),
    url: z.string().optional(),
    coverImage: z.string().optional(),
    cover_image: z.string().optional(),
    tagline: z.string().optional(),
  })
});

export const collections = {
  'posts': postsCollection,
  'courses': coursesCollection,
  'software': softwareCollection,
};
