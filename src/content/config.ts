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
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.string().default('Podia'),
    platformUrl: z.string(),
    price: z.number().optional(),
    currency: z.string().default('EUR'),
    status: z.string().default('active'),
  })
});

const softwareCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.string(), // live | beta | coming-soon
    stack: z.string(),
    url: z.string().optional(),
    github: z.string().optional(),
  })
});

export const collections = {
  'posts': postsCollection,
  'courses': coursesCollection,
  'software': softwareCollection,
};
