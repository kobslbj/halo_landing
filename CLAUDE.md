# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page for Halo, a coffee chat connection platform. The site is built with React 19, TypeScript, and Tailwind CSS 4, featuring Framer Motion animations. The content is primarily in Traditional Chinese (zh-TW).

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure

- Uses Next.js App Router (`app/` directory)
- [app/layout.tsx](app/layout.tsx) - Root layout with font configuration (Geist Sans/Mono, Noto Sans/Serif TC) and global Header
- [app/page.tsx](app/page.tsx) - Landing page composed of HeroSection component
- [app/globals.css](app/globals.css) - Global styles with Tailwind 4 theme customization

### Styling System

- **Tailwind CSS 4** with custom theme using CSS variables and OKLCH color space
- Custom color palette based on Stone (neutral) and Orange (primary/accent) colors
- Dark mode support via `.dark` class using custom variant
- Animation utilities defined in `globals.css` including:
  - `animate-fade-in-up` with delay variants (200ms, 400ms, 600ms, 800ms, 1000ms, 2000ms)
  - Custom shimmer animations for ShimmerButton component
- Imports `tw-animate-css` for additional animation utilities
- Path alias `@/*` maps to project root

### Component Architecture

**UI Components** ([components/ui/](components/ui/))

- [shimmer-button.tsx](components/ui/shimmer-button.tsx) - Animated button with shimmer effect using CSS custom properties (--shimmer-color, --speed, --bg, --radius, --cut). Supports active state transform.
- [light-rays.tsx](components/ui/light-rays.tsx) - Animated light ray background effect using Framer Motion. Creates randomized ray arrays with configurable count, color, blur, speed, and length. Each ray has randomized position, rotation, width, swing, delay, duration, and intensity.

**Page Components** ([components/](components/))

- [header.tsx](components/header.tsx) - Fixed floating header with logo and CTA buttons
- [hero-section.tsx](components/hero-section.tsx) - Full-screen hero with LightRays background, decorative gradients, badge, title, subtitle, and CTAs

### Font Configuration

Four Google Fonts are configured in [app/layout.tsx](app/layout.tsx) with CSS variable mapping:

- Geist Sans (`--font-geist-sans`)
- Geist Mono (`--font-geist-mono`)
- Noto Sans TC (`--font-noto-sans-tc`) - weights 400, 500, 700
- Noto Serif TC (`--font-noto-serif-tc`) - weights 400, 500, 700

All fonts use `display: "swap"` and latin subsets.

### Utilities

[lib/utils.ts](lib/utils.ts) exports `cn()` function combining `clsx` and `tailwind-merge` for conditional className composition.

## Git Commit Conventions

Follow Conventional Commits format per [.cursorrules](.cursorrules):

- Format: `<type>: <subject>` (50 chars max, imperative mood, no period)
- Types: feat, fix, docs, style, refactor, perf, test, chore
- Body: 72 char line wrap, explain what/why not how
- Example: `feat: Add unit tests for user authentication`

## Design Patterns

### Component Patterns

- All interactive components are marked `"use client"`
- UI components accept `className` prop merged via `cn()` utility
- CSS custom properties (`--var-name`) used for configurable component styling
- Framer Motion used for complex animations (LightRays)
- CSS animations used for simpler effects (fade-in-up)

### Animation Timing

Components in HeroSection use staggered animation delays (200ms increments) for sequential reveal effect.

## Site Configuration

Site metadata (name, description, keywords, OpenGraph, Twitter) is defined in `siteConfig` object in [app/layout.tsx](app/layout.tsx:35-40).
