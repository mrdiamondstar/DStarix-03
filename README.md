# DStarix Techno — Enterprise AI Website

A premium, production-ready marketing website for an enterprise AI company. Built to feel like a
billion-dollar AI startup — minimal, elegant, fast and highly interactive.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design system, no UI kit)
- **Framer Motion** — reveals, transitions, micro-interactions
- **Lenis** — smooth scrolling
- **Canvas** particle network + animated SVG diagrams
- **Lucide** icons
- Fonts: **Inter** (body), **Space Grotesk** (display), **JetBrains Mono** (code).
  Swap in Satoshi / General Sans via self-hosted `@font-face` if licensed.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Design language

- **Palette:** pure white + dark graphite, electric-blue → violet → cyan accents (used sparingly).
- **Radii:** 20–32px. Large whitespace. Glassmorphism in selected surfaces only.
- **Texture:** subtle grid, drifting gradient blobs, film-grain noise overlay.
- Tokens live in `tailwind.config.ts` and `src/app/globals.css`.

## Structure

```
src/
  app/                 # 25 routes (App Router) + sitemap/robots/manifest/404/loading
  components/
    layout/            # Navbar (mega menu), Footer, Logo, PageTransition
    providers/         # SmoothScroll, Cursor, ScrollProgress, LoadingScreen, backgrounds
    ui/                # Button, TiltCard, Reveal, Counter, Marquee, Primitives
    shared/            # PageHero, CTASection, FeatureGrid, StatBand, FaqAccordion, ServicePageTemplate, Sections
    visuals/           # CodeWindow, DashboardMock, WorkflowDiagram
    home/              # Home page sections
  lib/                 # data.ts (content model), utils.ts
```

## Pages (25)

Home · Services · AI Solutions · Industries · Portfolio · Case Studies · About · Careers · Blog ·
Contact · Pricing · AI Consulting · AI Development · AI Automation · Enterprise AI · Generative AI ·
Agentic AI · RAG Solutions · AI Chatbots · Voice AI · Custom LLM Development · Workflow Automation ·
FAQ · Privacy · Terms

## Content

All listable/routable content is centralized in [`src/lib/data.ts`](src/lib/data.ts) — services,
industries, projects, case studies, testimonials, blog posts, jobs, pricing, FAQs, team, offices.
Client logos, avatars and architecture diagrams are SVG/placeholder and ready to swap for real assets.

## Accessibility & SEO

- Semantic landmarks, skip-to-content link, reduced-motion support, keyboard-navigable accordions.
- Per-page metadata, Open Graph, JSON-LD organization schema, sitemap, robots, web manifest.

## Notes

- The custom cursor and heavy particle effects are automatically disabled on touch devices and when
  `prefers-reduced-motion` is set.
- Replace `https://dstarix.tech` in `layout.tsx`, `sitemap.ts` and `robots.ts` with the real domain.
