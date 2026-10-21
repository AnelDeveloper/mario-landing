# Mandarić Method — landing page

Public marketing page for Mandarić Method, a culinary-education product for hospitality
professionals. All copy is Bosnian (`<html lang="bs">`). It is a separate Next.js app from
the product app: **Prijavi se**, **Započni** and **Pogledaj program** link into it.

Stack: Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, TypeScript. The page
is fully static (prerendered at build time).

## Structure

- `src/app/globals.css`: design tokens (`@theme`, shared with the product app) and base styles.
  `hover:` is a plain `:hover`, as in the prototype (not wrapped in `@media (hover: hover)`).
- `src/app/fonts.ts`: Barlow Condensed 600, IBM Plex Sans 400–700 (variable) and IBM Plex Mono 400 via
  `next/font/google` (self-hosted, `latin` + `latin-ext`). Only the faces the page renders, since each one is preloaded.
- `src/app/layout.tsx`: metadata, Open Graph, viewport and a preconnect to the app origin
- `src/app/icon.svg`, `apple-icon.png`, `opengraph-image.jpg` (+ `.alt.txt`): favicon, iOS home-screen
  icon and the 1200×630 share image (file conventions)
- `src/app/page.tsx` and `src/app/not-found.tsx` both render `Landing`. Like the prototype's router, an
  unknown URL shows the landing page, but with a 404 status (so it is `noindex`).
- `src/components/landing/`: page sections (Server Components) plus two small Client Components:
  - `AppLauncher` plays the splash on a plain click (or Space) on an `AppLink`, then navigates
    to the app after 1150 ms. Modified clicks (new tab or window) and clicks made before
    hydration follow the link normally.
  - `ExploreLink` ("Istraži programe") smooth-scrolls to the programs section, 24 px below the top,
    without changing the URL or history (instant with reduced motion). Without JS it is a `#programi` link.
- `src/content/bio.ts`: bio copy · `public/assets/`: images (served through `next/image`)

## Environment variables

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_*` values are inlined at **build time**.
Both must be absolute `http(s)` URLs, and the build fails with a clear message otherwise.

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | URL of the product app. Every app link points into it. | `http://localhost:3001` for local work. A Vercel production build fails without it, and any other production build warns. |
| `NEXT_PUBLIC_SITE_URL` | Public URL of this landing page. It is the base for absolute Open Graph URLs. | Vercel production domain, else `http://localhost:3002` (production builds warn). |

## Scripts

```bash
npm run dev     # dev server (http://localhost:3002; the product app runs on :3001)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
npx tsc --noEmit  # type-check
```

## Deploy

Set `NEXT_PUBLIC_APP_URL` to the production app URL, and `NEXT_PUBLIC_SITE_URL` to the
landing's public URL. Set both in the build environment, then build. Because the values
are inlined at build time, changing them requires a rebuild.

### Vercel

- Project `mario-landing` (team `aneldevelopers-projects`) → https://mario-landing.vercel.app. It is connected to
  `github.com/AnelDeveloper/mario-landing`: every push to `main` deploys to production, other branches get previews.
- `vercel.json` pins the framework to Next.js (a project created from the CLI starts as "Other" and serves 404s).
- Environment variables (Production and Preview): `NEXT_PUBLIC_APP_URL=https://mandaric-app.vercel.app`.
  `NEXT_PUBLIC_SITE_URL` is not set: it falls back to the production domain (`VERCEL_PROJECT_PRODUCTION_URL`).
  Set it when a custom domain is added, then redeploy.
