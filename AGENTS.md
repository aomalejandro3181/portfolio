<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — single-page app

## Stack
- **Next.js 16.2.4** (App Router), **React 19**, **TypeScript** (strict, `@/*` → root)
- **Tailwind CSS v4** — `@import "tailwindcss"` in `globals.css`, `@theme` for custom tokens
- **pnpm@10.23.0** is the canonical package manager (ignore stale `package-lock.json`)

## Commands
| Action | Command |
|---|---|
| dev server | `pnpm dev` |
| production build | `pnpm build` |
| start prod | `pnpm start` |
| lint | `pnpm lint` (runs `eslint`) |

No test, typecheck, or format scripts exist. No CI/CD.

## Architecture
- **Not a monorepo** — `pnpm-workspace.yaml` only blocks native build warnings for `sharp`/`unrs-resolver`
- **Entrypoints**: `app/layout.tsx` (root layout, Space Grotesk font) → `app/page.tsx` (composes Header, Hero, Skills, Projects, Contact)
- **Dynamic route**: `app/projects/[slug]/page.tsx` — project detail from `app/data/projects.ts`
- **API route**: `app/api/send-email/route.ts` — POST via Resend + botid bot protection
- **Icons**: individual SVG components in `app/components/icons/`
- **Design**: neo-brutalism (custom colors `bone`, `accent-blue`, `accent-pink`; shadows `shadow-neo`, `shadow-neo-xl`, `shadow-neo-hover`)

## Environment
Contact form requires `.env`:
```
RESEND_API_KEY=...
EMAIL_FROM=...
```
Both `botid` (client + server) and `resend` are production dependencies — form won't work without these vars.
