import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /* Controls display order and the row number (01, 02, …). */
      order: z.number(),
      image: image(),
      imageAlt: z.string(),
      /* Every link must have a real destination. The old site rendered a
         dead `<a href="">` for the Discord Bot's missing demo — omit the
         link instead of emitting an empty one. */
      links: z
        .array(
          z.object({
            text: z.string(),
            href: z.url(),
          }),
        )
        .min(1),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    /* e.g. "Remote", "Irvine, CA". Omit to render nothing. */
    location: z.string().optional(),
    start: z.string(),
    /* null renders as "Present". */
    end: z.string().nullable(),
    order: z.number(),
    /* Flip to false once the entry holds real details — see the README in
       src/content/experience. Draft entries are skipped at build time. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience };
