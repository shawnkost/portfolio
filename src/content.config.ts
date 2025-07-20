import { defineCollection, z } from 'astro:content';

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    text: z.string(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      buttons: z.array(z.object({ text: z.string(), link: z.string() })),
    }),
});

export const collections = { skills, projects };
