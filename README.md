# Nirvidhi Marine

Company website for Nirvidhi Marine — built with React, Vite, TypeScript, and Tailwind CSS.

## Project structure

This is a pnpm workspace monorepo:

- `artifacts/nirvidhi-marine` — the website (frontend)
- `artifacts/api-server` — backend API (Express, currently minimal)
- `lib/` — shared packages (DB schema, API client, API spec)

## Getting started

```bash
pnpm install
pnpm --filter @workspace/nirvidhi-marine run dev
```

Visit `http://localhost:5173`.

## Build for production

```bash
pnpm --filter @workspace/nirvidhi-marine run build
```

Output is generated in `artifacts/nirvidhi-marine/dist/public`.

## Deployment

Deployed via Vercel. Build command and output directory are configured in the Vercel project settings.

## License

MIT