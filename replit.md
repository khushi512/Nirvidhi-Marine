# Nirvidhi Marine

Public-facing marketing website for Nirvidhi Marine Pvt Ltd, an Indian marine & offshore skills-training company building its flagship training/technology campus at Vijaydurg (Konkan coast, Maharashtra). Speaks to investors and government/institutional partners today; will grow to also serve trainees/job-seekers.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/nirvidhi-marine/` — the one live artifact, a single-page react-vite marketing site (frontend-only, no backend/DB use).
- Sections live in `artifacts/nirvidhi-marine/src/components/sections/` (Hero, Opportunity, About, Location, Vision, CTA), laid out in `src/pages/home.tsx`.
- Logo: `artifacts/nirvidhi-marine/src/assets/nirvidhi-logo.png`. Generated hero/section imagery lives alongside it in the same `assets/` folder.

## Architecture decisions

- No backend/OpenAPI/DB for this site — it's presentation-only with generated imagery, no forms submit anywhere real yet.

## Product

Single scrolling page: hero mission statement, industry opportunity, what Nirvidhi Marine does today (commercial diving / offshore safety / NSQF-aligned training), the Vijaydurg natural-harbour location, a "what's next" glimpse of the larger vision (marine robotics, research, asset-inspection services), and an investor/government-facing call to action.

## User preferences

- Primary audience for the current build: investors and government/institutional partners. Trainees/job-seekers are a secondary audience for a later expansion.
- Visual direction is deliberately schmidtocean.org-inspired: deep navy/black, huge editorial serif display type, cinematic full-bleed generated imagery, restrained cyan accent from the logo + sparing high-vis safety-yellow, scroll-driven reveals — not a generic SaaS-landing-page look.
- No real photos/media available yet — using generated imagery as placeholders until real photos/video exist.
- Contact details in the footer are placeholders until the user provides real ones.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
