# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Astro-based portfolio site using TypeScript and Tailwind CSS.

**Package Manager**: `pnpm` (not npm)

**Core Commands:**
- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview build locally
- `pnpm astro check` - TypeScript and Astro type checking
- `pnpm astro add` - Add Astro integrations

## Architecture Overview

**Framework**: Astro 5.x with TypeScript strict mode
**Styling**: Tailwind CSS v4 (configured via Vite plugin)
**Typography**: Space Grotesk (headings), Inter (body text)

**Project Structure:**
- `src/pages/` - File-based routing (index.astro is the homepage)
- `src/layouts/` - Shared layout components (HomeLayout.astro provides base HTML structure)
- `src/content/` - Content collections for skills and projects (type-safe with Zod schemas)
- `src/data/` - Static data files (projects.ts, socials.ts)
- `src/styles/` - Global styles with Tailwind CSS imports
- `src/images/` - Optimized image assets (imported via Astro's Image component)
- `public/` - Static assets

**Key Configuration:**
- Uses Astro's strict TypeScript configuration
- MDX integration enabled for content authoring
- Tailwind CSS configured through Vite plugin in astro.config.mjs
- Content collections defined in src/content.config.ts with Zod schemas for type safety

**Layout Pattern:**
The site uses a layout-based architecture where pages import and use layout components. The HomeLayout provides the base HTML structure with header, main content area, and meta tags for SEO.

## Design System

**Color Scheme**: Dark theme with custom CSS variables
- Surface colors: hsl(225 20% 9%) base, hsl(225 18% 13%) raised
- Text: hsl(220 15% 96%) primary, hsl(220 10% 68%) muted  
- Accent: hsl(16 100% 66%) orange with hover/active states
- Focus: hsl(225 100% 80%) blue for accessibility

**Component Patterns:**
- Images use Astro's optimized `<Image>` component from 'astro:assets'
- Navigation uses array-based data structure for maintainability
- Social links and skills use data arrays with mapping for consistency
- Content managed through Astro's content collections system for projects and skills

## Development Notes

- The project follows Astro's file-based routing system
- Global styles are imported in the layout components
- TypeScript is configured with Astro's strict preset
- Uses semantic HTML with ARIA-compliant navigation patterns
- Responsive design with mobile-first Tailwind CSS approach

## Content Management

**Content Collections:**
- Skills: Located in `src/content/skills/` with markdown files
- Projects: Located in `src/content/projects/` with markdown files and image assets
- Both collections use Zod schemas for type validation defined in `src/content.config.ts`

**Data Structure:**
- Skills have `text` and `order` properties
- Projects have `title`, `description`, `image`, and `buttons` array properties
- Static data for social links maintained in `src/data/socials.ts`