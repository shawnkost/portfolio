# Personal Portfolio ⚡️

> My own personal website to showcase some projects and skills

> https://shawnkost.dev

[![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)](https://github.com/shawnkost/portfolio/commits/main)
[![Ask Me Anything !](https://img.shields.io/badge/ask%20me-linkedin-1abc9c.svg)](https://www.linkedin.com/in/shawnkost/)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Tools Used

![Astro](https://img.shields.io/badge/astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Static Astro 7 site with Tailwind v4. It ships no framework runtime — the only
JavaScript on the page is a small mobile-menu toggle and the Umami analytics
tag.

## Sections

✔️ About\
✔️ Work\
✔️ Projects\
✔️ Skills\
✔️ Contact

## Editing content

| What                         | Where                                      |
| ---------------------------- | ------------------------------------------ |
| Projects                     | `src/content/projects/*.md`                |
| Work history                 | `src/content/experience/*.md`              |
| Skills list                  | `src/data/skills.ts`                       |
| Name, email, résumé, socials | `src/data/site.ts`                         |
| Hero and About copy          | `src/components/Hero.astro`, `About.astro` |
| Design tokens                | `src/styles/global.css`                    |

Content shapes are validated by Zod at build time (`src/content.config.ts`), so
a typo in frontmatter fails the build rather than rendering a broken card.

### Work section

One `.md` file per role in `src/content/experience/`, ordered by `order`
descending (highest number renders first). Bodies are markdown bullet lists.

Entries with `draft: true` are excluded from the build, and the section plus
its nav link disappear entirely if every entry is a draft — so a
work-in-progress role never leaks to the live site. See
`src/content/experience/README.md.example` for the frontmatter shape.

### Images

Put images in `src/images/` (not `public/`) so `astro:assets` can resize and
convert them at build time. Source files should be capped at roughly 2× their
largest rendered size; project rows render at most 416px wide, so ~832px
sources are right.

## 🛠 Installation and Setup Instructions

This project uses [pnpm](https://pnpm.io). Install it with `brew install pnpm`
or `corepack enable` if you don't have it.

```
git clone git@github.com:shawnkost/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:4321/](http://localhost:4321/) to view it in the browser.
The page reloads as you edit.

## Scripts

| Command                  | Does                                     |
| ------------------------ | ---------------------------------------- |
| `pnpm dev`               | Dev server on port 4321                  |
| `pnpm build`             | Static build to `dist/`                  |
| `pnpm preview`           | Serve the built output locally           |
| `pnpm check`             | Typecheck + validate content collections |
| `pnpm prettier:format`   | Format                                   |
| `pnpm prettier:check:ci` | Verify formatting (runs in CI)           |

### A note on pnpm

Two things differ from a default pnpm setup, both deliberate:

- **`sharp` is a direct dependency.** It's already a transitive dep of Astro,
  but pnpm's strict linking means the build's prerender chunk can't resolve it
  there, and image optimization fails. Astro's own error message asks for this.
- **`pnpm-workspace.yaml` allows esbuild's install script.** pnpm blocks
  dependency build scripts by default; esbuild needs its postinstall to place
  the platform binary. Declaring it in the file keeps CI non-interactive.
