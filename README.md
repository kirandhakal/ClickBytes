# Universal Next.js Starter

A frontend-first Next.js App Router starter with TypeScript, Tailwind CSS v4, editable shadcn-style primitives, dark mode, lightweight animation, and production-oriented SEO defaults.

## Start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`. Replace the values in `.env.local` and `lib/site-config.ts` before deployment.

## Structure

- `app/`: routes, layouts, metadata, sitemap, robots, and generated social images
- `features/`: page-level sections and domain UI
- `components/`: shared shell, motion helpers, and UI primitives
- `data/`: static content separated from React
- `types/`: domain models for content and API data
- `lib/`: configuration, metadata helpers, schemas, and utilities
- `context/`: app-wide providers such as theme

See `NEXT_FOLDER_STRUCTURE.md` for the full architecture guide.

## Add shadcn components

The included `components.json` is configured for the current aliases and CSS tokens:

```bash
npx shadcn@latest add dialog dropdown-menu form
```

Existing primitives are intentionally local and may be edited directly.

## Dynamic route examples

The starter includes complete list/detail flows backed by dummy JSON:

- `/blogs` and `/blogs/view-details/[slug]`
- `/case-studies` and `/case-studies/view-details/[slug]`

Each detail route demonstrates `generateStaticParams`, async params, dynamic metadata, `notFound()`, breadcrumbs, JSON-LD, and sitemap generation. Replace the JSON-backed helpers in `lib/fetchers` with a CMS or API without changing page composition.

## Motion primitives

Import animation wrappers from one entry point:

```tsx
import {
  BlurIn,
  FadeIn,
  HoverLift,
  ScaleIn,
  SlideIn,
  Stagger,
  StaggerItem,
} from "@/components/motion";

<SlideIn direction="up" delay={120}>
  <YourSection />
</SlideIn>
```

Animations are CSS-first and respect `prefers-reduced-motion`. Available directional values are `up`, `down`, `left`, and `right`.

## Feedback primitives

`components/ui` includes alerts for info, success, warning, and failure states, plus `Spinner`, `Progress`, `Skeleton`, and `EmptyState` components.

## Project checklist

1. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_SITE_NAME`.
2. Update description, links, locale, and keywords in `lib/site-config.ts`.
3. Replace the generated icon and Open Graph design as needed.
4. Add public routes to `app/sitemap.ts`.
5. Add per-route metadata with `createMetadata()` and structured data with `SchemaOrg`.
6. Replace the showcase feature with project features while keeping primitives reusable.
