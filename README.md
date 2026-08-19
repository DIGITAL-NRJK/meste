# MESTE

Production website and Payload CMS for **MAMA EMMA Service Traiteur d'Excellence** in Accra, Ghana.

The repository is intentionally integrated: the bilingual Next.js public site, Payload admin/API, database adapter, and media adapter deploy as one application.

## Phase status

- Phase 1 — discovery and implementation plan: complete
- Phase 2 — technical and visual foundation: complete
- Phase 3 — full CMS content model: implementation complete
- Phase 4 — complete homepage: implementation complete, pending local verification

`/en` and `/fr` now render the full homepage journey. The official logo and
medallion supplied by the client live in `public/brand`. Photography has not
been supplied, so every image frame renders a clearly labelled placeholder
naming the shoot it is waiting for — nothing is fabricated.

See [Homepage composition](docs/HOMEPAGE.md).

## Stack

- Node.js 24.14.0 LTS
- pnpm 11.16.0
- Next.js 16.3.0 App Router
- React 19.2.6
- Payload 3.87.1
- Neon-compatible PostgreSQL adapter
- Cloudflare R2 through `@payloadcms/storage-s3`
- Tailwind CSS 4 plus MESTE CSS custom properties
- Vitest and Playwright
- Netlify deployment configuration

## Local setup

1. Use the pinned Node version from `.nvmrc` or `.node-version`.
2. Enable pnpm 11.16.0.
3. Install dependencies:

   ```bash
   pnpm install --frozen-lockfile
   ```

4. Copy `.env.example` to `.env.local` and replace the placeholders.
5. Point `DATABASE_URL` at a disposable local PostgreSQL database or a pooled Neon development-branch URL. Set `DATABASE_URL_UNPOOLED` to that branch’s direct URL for migration commands.
6. Start the integrated application:

   ```bash
   pnpm dev
   ```

Public foundation: `http://localhost:3000/en`  
Payload admin: `http://localhost:3000/admin`

On first admin access, Payload prompts for the initial user. Do not create public accounts.

## Media modes

When every `R2_*` value is empty, Payload stores local development uploads in ignored `/media` storage. When every value is present, the R2 adapter is enabled and local storage is disabled for Media.

Partial R2 configuration fails validation. Netlify's `production` context also fails without a complete R2 configuration.

See [Cloudflare R2 setup](docs/CLOUDFLARE_R2.md).

## Commands

| Command                              | Purpose                                                   |
| ------------------------------------ | --------------------------------------------------------- |
| `pnpm dev`                           | Start Next.js and Payload                                 |
| `pnpm build`                         | Create a production build                                 |
| `pnpm start`                         | Serve the production build                                |
| `pnpm format:check`                  | Check source and configuration formatting                 |
| `pnpm lint`                          | Run ESLint                                                |
| `pnpm typecheck`                     | Run strict TypeScript checks                              |
| `pnpm test:unit`                     | Run fast foundation tests                                 |
| `pnpm test:int`                      | Run Payload integration tests; requires PostgreSQL        |
| `pnpm test:e2e`                      | Run Playwright; requires PostgreSQL for admin tests       |
| `pnpm generate:types`                | Regenerate Payload types                                  |
| `pnpm generate:importmap`            | Regenerate Payload's admin import map                     |
| `pnpm payload migrate:create <name>` | Create a reviewed Payload migration                       |
| `pnpm payload migrate`               | Apply pending migrations                                  |
| `pnpm seed`                          | Idempotently seed known Phase 3 content as unready drafts |

## Environment contract

All supported keys are documented in `.env.example`. Secrets must remain server-only and must be configured in Netlify rather than committed.

Required for Payload:

- `DATABASE_URL` — pooled Neon URL for normal application traffic
- `DATABASE_URL_UNPOOLED` — direct Neon URL used by migration commands
- `PAYLOAD_SECRET` with at least 32 characters
- `NEXT_PUBLIC_SERVER_URL`

R2 is optional locally and mandatory in the Netlify production context. Resend and Sentry are intentionally not initialized until their implementation phases.

## Repository map

```text
src/app/(frontend)/[locale]  localized public root
src/app/(payload)            Payload admin and APIs
src/components/home          homepage sections (pure, content-driven)
src/components/layout        header, footer, official brand marks
src/components/ui            design-system primitives
src/lib/home                 homepage content contract and approved EN/FR copy
src/lib/site                 header/footer/contact contract
src/lib/routes.ts            localized route map for every planned page
src/collections              full editorial, redirect, user, and private-operation schemas
src/globals                  controlled site-wide CMS documents
src/blocks                   constrained editorial block definitions
src/lib/payload              typed public query and mapping layer
src/seed                     idempotent factual starter content
src/lib/env                  runtime environment validation
src/lib/i18n                 locale and dictionary contracts
src/lib/storage              conditional R2 adapter
tests                        unit, integration, and browser tests
docs                         implementation and operational guidance
```

## Development workflow

Use a feature branch and pull request. CI runs lint, typecheck, unit/integration tests, build, and browser smoke tests. Netlify Deploy Previews must use non-production database and media resources.

Do not use Payload development schema push against preview or production. Starting in Phase 3, every schema change must include a committed migration.

## Documentation

- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
- [CMS editor guide](docs/CMS.md)
- [Content model](docs/CONTENT_MODEL.md)
- [Brand foundation](docs/BRAND.md)
- [Content and asset checklist](docs/CONTENT_CHECKLIST.md)
- [Cloudflare R2](docs/CLOUDFLARE_R2.md)
- [Netlify](docs/NETLIFY.md)

## Known foundation limits

- Real photography is missing; image frames render labelled placeholders.
- Only the phone number published in the 2026 presentation is public. Address,
  email, opening hours, social handles and the international WhatsApp number are
  empty CMS fields and stay hidden until MESTE supplies them.
- No testimonial, client reference or price appears anywhere on the site.
- PostgreSQL-backed integration and authenticated-admin browser tests are configured in CI but require a local development database to run on a workstation.
- The complete Payload collections/globals/roles/localization model belongs to Phase 3.
- Core pages beyond the homepage belong to Phase 5.
- Forms, email, Sentry, complete SEO, and production hardening belong to later phases.
