# MESTE Website Implementation Plan

**Status:** Phases 1–3 implementation complete; Phase 4 not started  
**Prepared:** 2026-08-09  
**Source of truth:** `MASTER_BRIEF.md`  
**Architecture:** one Next.js App Router application with Payload CMS, Neon PostgreSQL, Cloudflare R2, and Netlify

## 1. Purpose and phase gate

This document converts the master brief into an implementable, testable sequence. It is the required output of Phase 1 and the gate for Phase 2.

Phase 2 may begin only after this document exists and has been reviewed against the brief. Phase 1 does not authorize application scaffolding, package installation, database creation, deployment, or fabricated content/assets.

## 2. Discovery findings

### Repository audit

The repository path was inspected recursively, including hidden files and the requested brand locations.

| Area                      | Finding                                    | Consequence                                                                                                      |
| ------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Source files              | Only `MASTER_BRIEF.md` exists              | Treat the implementation as greenfield                                                                           |
| Git                       | No `.git` directory or Git history         | Initialize a user-owned repository in Phase 2 and connect GitHub only when the owner supplies/chooses the remote |
| Package manager           | No manifest or lockfile                    | Use `pnpm` and commit the generated lockfile in Phase 2                                                          |
| Next.js / Payload         | No application or configuration            | Scaffold the single-repository architecture described below                                                      |
| Environment               | No `.env`, `.env.local`, or `.env.example` | Create only `.env.example`; never commit real values                                                             |
| Deployment                | No `netlify.toml` or CI workflow           | Add these in the applicable later phases                                                                         |
| `/brand-assets`           | Missing                                    | No source logo is available                                                                                      |
| `/public/brand`           | Missing                                    | No public logo variant is available                                                                              |
| Photography               | No media or placeholders                   | Create clearly labelled local placeholders; never download arbitrary web images                                  |
| Existing business content | Only facts in the brief                    | Seed only those facts and mark every unknown explicitly                                                          |

### Official logo finding

No official Mama Emma logo file is present, so no logo variant can currently be validated. `LogoFull` and `LogoMark` must not redraw or approximate the portrait. Phase 2 can establish typed component interfaces and a clearly labelled non-logo text fallback, but production visual work cannot claim final logo compliance until official files are supplied and inspected.

When assets arrive, record for each file: filename, format, intrinsic dimensions/viewBox, color treatment, background suitability, and whether it is the full lockup or portrait mark. Only verified variants may be exposed by component props.

## 3. Fixed requirements

- One repository and one deployable Next.js application contains both the public site and Payload admin/API.
- English is the default content language; French is a first-class URL locale.
- Public content is CMS-managed, localized where required, and publishable through controlled blocks.
- Private operational data—users, leads, and experience interest—is never publicly readable.
- Neon is the PostgreSQL system of record, R2 is production media storage, and Netlify is the runtime/deployment target.
- The public site is server-rendered/server-component-first and mobile-first.
- No fake clients, testimonials, reviews, prices, events, addresses, awards, certifications, legal claims, or social accounts.
- The visual system is established on the homepage before it is propagated across core pages.
- Exact dependency versions are pinned with a lockfile; experimental/canary packages and experimental CMS features are excluded unless a later written decision accepts them.

## 4. Architecture decisions

These decisions are accepted for implementation unless a discovered platform limitation forces a documented amendment.

### AD-01 — Integrated Next.js and Payload application

**Decision:** Use Payload inside the same Next.js App Router repository and deployment.

**Why:** It meets the ownership and workflow requirement, lets server components use Payload's Local API without a public network round trip, shares generated types, and keeps preview/revalidation logic in one codebase.

**Trade-off:** Public rendering and CMS runtime share a deployment boundary, so access control, caching, build configuration, and platform limits must be tested together.

### AD-02 — Typed server-side content access layer

**Decision:** Page components do not call Payload arbitrarily. All reads go through locale-aware functions in `src/lib/payload/queries`, then through mappers that return presentation-safe domain models.

**Why:** This centralizes publication filters, permission checks, depth, locale behavior, caching tags, and error handling.

**Security consequence:** Anonymous Local API reads explicitly use public access semantics (`overrideAccess: false`) or an equally strict repository filter. Trusted writes may override access only inside validated server-only services.

### AD-03 — Stable bilingual publishing model

**Decision:** Use Payload localization for localizable fields, localized slugs, and an explicit per-locale translation-readiness control. Do not depend on Payload's currently beta localized draft-status feature.

**Why:** The brief disallows experimental dependencies. A document may be globally published but a locale route is emitted only when that locale is marked ready and required localized content exists. Public queries use no fallback locale.

**Consequence:** Editors can prepare French incrementally without exposing English fallback as a false French translation. Preview may show incomplete locales; production routes, sitemap, canonical, and hreflang may not.

### AD-04 — Controlled page composition

**Decision:** Use the brief's controlled Payload blocks, with constrained variants and validation. Do not expose a free-form visual builder.

**Why:** Editors gain flexibility while the brand system, accessibility, performance, and responsive behavior remain enforceable.

### AD-05 — PostgreSQL and migration ownership

**Decision:** Use `@payloadcms/db-postgres` with a Neon pooled `DATABASE_URL`. Development may use Payload/Drizzle push mode only against a disposable development database; preview and production use committed Payload migrations.

**Why:** Neon pooling suits the serverless runtime, while committed migrations prevent uncontrolled production schema changes.

**Consequence:** A schema-changing pull request is incomplete until its migration and rollback have been reviewed. Production never uses automatic schema push.

### AD-06 — R2 media with local development fallback

**Decision:** Use `@payloadcms/storage-s3` for Cloudflare R2 in preview/production. Local development may store ignored files locally when R2 variables are absent. Production fails configuration validation when required R2 settings are missing.

**Why:** Netlify's filesystem is ephemeral and R2 is the owner-controlled media store required by the brief.

### AD-07 — Tag-based content caching and targeted invalidation

**Decision:** Cache published, anonymous content by locale and content identity. Payload publish/unpublish/delete hooks invalidate collection/document/global tags and affected route paths. Draft preview and all private/form operations bypass the public cache.

**Why:** It avoids a CMS query on every render and lets editors see published changes quickly without full-site rebuilds.

### AD-08 — Netlify continuous deployment with separated data contexts

**Decision:** Netlify serves the integrated app. Production, deploy-preview, branch-deploy, and local contexts receive distinct environment values. Production and preview must not share writable databases or media namespaces.

**Why:** A preview with schema or content changes must not mutate production.

**Initial preview strategy:** Prefer a Neon branch and R2 preview bucket/prefix dedicated to deploy previews. If automated per-PR Neon branching is not available at launch, use one explicit non-production branch and serialize schema-changing previews; never point a deploy preview at production.

### AD-09 — Server-owned form pipeline

**Decision:** Quote and interest forms post to same-origin server actions/route handlers. The server validates and sanitizes input, applies bot/rate controls, persists first, then queues/sends email.

**Why:** Browsers never receive database, Payload, R2, or Resend credentials, and an email outage cannot silently lose a valid lead.

## 5. Target repository structure

```text
src/
  app/
    (frontend)/
      [locale]/
        layout.tsx
        page.tsx
        ...localized routes
      layout.tsx
    (payload)/
      admin/[[...segments]]/page.tsx
      api/[...slug]/route.ts
      api/graphql/route.ts
      layout.tsx
    api/
      preview/route.ts
      preview/exit/route.ts
    robots.ts
    sitemap.ts
  blocks/
    definitions/
    renderers/
  collections/
    access/
    fields/
    hooks/
    *.ts
  components/
    editorial/
    forms/
    layout/
    ui/
  globals/
  hooks/
  lib/
    cache/
    email/
    env/
    forms/
    i18n/
    payload/
      queries/
      mappers/
    seo/
    security/
  migrations/
  styles/
  types/
  utilities/
  payload.config.ts
public/
  brand/
  placeholders/
docs/
tests/
  e2e/
  unit/
```

Generated Payload types live in a clearly named generated file and are not hand-edited. Presentation components receive mapped domain data rather than full CMS documents.

## 6. Route architecture

### Locale handling

- Valid locale segments are exactly `en` and `fr`.
- `/` redirects to `/en`; a saved explicit language preference may be honored later, but must not create nondeterministic canonical behavior.
- The root layout sets `<html lang>` from the validated route locale.
- A central route manifest maps semantic route keys to localized static segments. Components never concatenate translated paths ad hoc.
- Dynamic content slugs are localized in Payload and resolved with `fallbackLocale: false`.
- The language switcher finds the equivalent route key/document ID in the other locale. It is hidden or disabled when that translation is not production-ready.
- Unknown locale segments and unpublished/untranslated entries return the branded 404.

### Public route map

| Purpose             | English                        | French                         | Source                                                                 |
| ------------------- | ------------------------------ | ------------------------------ | ---------------------------------------------------------------------- |
| Home                | `/en`                          | `/fr`                          | `HomePage` global                                                      |
| Story               | `/en/about`                    | `/fr/a-propos`                 | controlled `Pages` entry                                               |
| Services index      | `/en/services`                 | `/fr/services`                 | `Services` collection                                                  |
| Service detail      | `/en/services/[slug]`          | `/fr/services/[slug]`          | localized service slug                                                 |
| Menus index         | `/en/menus`                    | `/fr/menus`                    | menu collections                                                       |
| Signature menu      | `/en/menus/[slug]`             | `/fr/menus/[slug]`             | localized signature-menu slug                                          |
| Mama Emma Fresh     | `/en/mama-emma-fresh`          | `/fr/mama-emma-fresh`          | `FreshProducts` plus controlled page content                           |
| Gallery             | `/en/gallery`                  | `/fr/galerie`                  | `Gallery` collection                                                   |
| Experience          | `/en/the-mama-emma-experience` | `/fr/the-mama-emma-experience` | controlled concept page plus `Events`                                  |
| Future event detail | `/en/events/[slug]`            | `/fr/evenements/[slug]`        | real eligible `Events` only                                            |
| Journal index       | `/en/journal`                  | `/fr/journal`                  | shown in navigation only with a real published post                    |
| Journal article     | `/en/journal/[slug]`           | `/fr/journal/[slug]`           | localized journal slug                                                 |
| Contact             | `/en/contact`                  | `/fr/contact`                  | `ContactSettings` plus page content                                    |
| Quote               | `/en/request-a-quote`          | `/fr/demande-de-devis`         | secure form workflow                                                   |
| Editorial/SEO page  | `/en/[slug]`                   | `/fr/[slug]`                   | approved `Pages` entries; reserved-slug validation prevents collisions |

`/en/events` and `/fr/evenements` may exist only when useful real event content exists. The current Experience page shows the concept and interest form, not invented event listings.

### Non-public/system routes

- `/admin` — Payload admin, authenticated.
- `/api/[...slug]` — Payload API; collection access controls remain authoritative.
- `/api/graphql` — include only if required by Payload/admin or an accepted use case; otherwise disable public GraphQL exposure.
- `/api/preview` and `/api/preview/exit` — validate an authenticated/signed preview request and toggle draft mode.
- `/sitemap.xml` and `/robots.txt` — generated from published/indexable localized content.

## 7. CMS content model

### Shared field conventions

- Localized: titles, slugs where appropriate, headings, descriptions, rich text, CTA labels, SEO title/description, editorial captions, menu/service/event copy.
- Not localized: IDs, relation IDs, phone numbers, dates/timestamps, numeric counts, availability flags, status keys, secrets, sort order, permission flags.
- Editorial collections use drafts/versions and preview URLs.
- Every public query requires published state, locale readiness, and any collection-specific visibility rule.
- Slugs are normalized and unique per locale; reserved top-level route segments are rejected.
- SEO fields support generated defaults and manual overrides: title, description, social image, canonical override, index toggle.
- Relationship depth is deliberately bounded; query mappers fetch only what a page needs.

### Collections

| Collection           | Key model and behavior                                                                                                                                                             | Access / publishing                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `Users`              | email/auth, name, role `admin` or `editor`                                                                                                                                         | Admin manages users/roles; editor cannot manage users, roles, secrets, or security settings; no public registration/read             |
| `Media`              | upload, alt, caption, category, credit, focal point; image sizes thumbnail/card/tablet/desktop/hero/og                                                                             | Authenticated upload; public delivery of referenced media; MIME/size/dimension validation                                            |
| `Pages`              | localized title/slug, page kind, locale readiness, controlled blocks, SEO                                                                                                          | Draft/publish; public reads only production-ready locale; used for Story, contact framing, and substantive editorial/local SEO pages |
| `Services`           | category, localized positioning/story, formats, menu relations, gallery/references, CTA, SEO, order                                                                                | Draft/publish                                                                                                                        |
| `ReceptionFormats`   | localized description, recommended event types, optional verified guest range, gallery, menus, CTA, order                                                                          | Draft/publish; no invented guest ranges                                                                                              |
| `MenuCategories`     | localized name/description, menu family/filter mapping, order                                                                                                                      | Draft/publish                                                                                                                        |
| `MenuItems`          | category, culinary level, localized name/composition/description, image/gallery, verified allergens/dietary labels, pork flag, vegetarian/vegan flags, spice level, featured/order | Draft/publish; never infer dietary/allergen claims                                                                                   |
| `SignatureMenus`     | all briefed courses/sections, localized editorial content, image/gallery, dietary notes, availability, order, SEO                                                                  | Draft/publish; no prices unless verified later                                                                                       |
| `FreshProducts`      | localized product content, ingredients, official can media, constrained accent token, sizes, availability, nutrition/legal placeholders, gallery, SEO                              | Draft/publish; no organic or unverified nutrition claims                                                                             |
| `Events`             | status, localized theme/story/content, optional factual date/venue/capacity/price/menu/entertainment/dress code, media, registration mode/link                                     | Draft/publish; concept items are not rendered as scheduled events; Event JSON-LD only when factual required fields exist             |
| `References`         | client/event facts, logo/photos, permission flag, featured/order                                                                                                                   | Draft/publish plus `permissionToDisplay === true`; no seed clients                                                                   |
| `Testimonials`       | localized role/company/quote, name/photo, permission flag, featured/order                                                                                                          | Draft/publish plus permission; no fake seed records                                                                                  |
| `Gallery`            | media relation, localized alt/caption, category, optional event/service relations, order/focal point                                                                               | Draft/publish; accessible empty state and lightbox metadata                                                                          |
| `JournalPosts`       | localized title/slug/excerpt/body, author display data, dates, image, categories, SEO                                                                                              | Draft/publish; navigation appears only when at least one real localized post is published                                            |
| `Leads`              | all briefed enquiry fields, status, locale/source, internal notes, delivery status/timestamps                                                                                      | No public read/update/delete; validated server-only create; admin/editor access narrowed by role policy                              |
| `ExperienceInterest` | name/email/optional phone, locale, consent and consent timestamp/version, email delivery state                                                                                     | No public read/update/delete; validated server-only create                                                                           |

If persistent form rate limiting is implemented with a custom Postgres table, it is infrastructure—not editorial content—and is managed by a migration, stores only a keyed hash rather than a raw IP, and has scheduled/transactional expiry cleanup.

### Globals

| Global            | Responsibility                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `SiteSettings`    | brand/site identity, default metadata references, public site URL, business locale/timezone, feature flags that are safe for editors |
| `Header`          | localized navigation labels/order, CTA, language UI; route destinations selected from controlled route keys                          |
| `Footer`          | localized navigation/lines/legal links; empty contact/social values hidden                                                           |
| `HomePage`        | constrained homepage sections and featured relations; editorial order allowed only within approved composition rules                 |
| `ContactSettings` | known phone, centrally configured WhatsApp destination/message, optional verified email/address/hours/social links                   |
| `SEOSettings`     | title templates, default description/social image, organization schema fields, robots defaults, verification codes if later supplied |

Security-critical settings and secrets do not belong in globals.

### Controlled blocks

Implement the specified blocks: `Hero`, `EditorialTextImage`, `FullBleedImage`, `Manifesto`, `Quote`, `ServiceShowcase`, `MenuShowcase`, `SignatureDishes`, `FreshProducts`, `GalleryPreview`, `References`, `Process`, `MamaEmmaExperienceTeaser`, `CTA`, `EditorialSplit`, and `StoryChapter`.

Each block has:

- a small, documented set of visual variants;
- localized editorial fields;
- semantic heading-level rules;
- required image alt/relationship behavior;
- bounded item counts where composition needs them;
- no arbitrary colors, CSS classes, raw HTML, or unrestricted layout controls.

## 8. Seed strategy

Seed scripts must be idempotent and separated into:

1. **Required structural seed:** roles, globals, menu categories, culinary levels, reception formats, and controlled known settings.
2. **Authentic brief content:** the supplied story, manifesto excerpts, named dishes/compositions, signature menus, Fresh product names, service categories, process, and Experience concept disclaimer.
3. **Never seeded as fact:** clients, testimonials, event dates, prices, guest counts, addresses, email/social accounts, awards, certifications, reviews, opening hours, nutrition claims, or allergens.

The supplied English/French dish names are source labels, not evidence that full professional translations exist. Translation readiness remains false until each public locale is reviewed.

Seeded records use stable keys so rerunning a seed updates known starter content without duplicating documents. Production seeding is a deliberate command, never an automatic request-time action.

## 9. Localization strategy

- Payload locales: `en`, `fr`; default `en`.
- UI dictionaries contain only interface copy such as validation messages, filter labels, and accessibility labels. Editorial copy lives in Payload.
- Public CMS reads request an explicit locale with fallback disabled.
- Locale readiness is checked at the document/global section level before rendering, sitemap inclusion, and hreflang output.
- Canonicals point to the current localized URL. Alternates include only real ready translations; `x-default` points to the English canonical where appropriate.
- Localized slugs are editor-controlled with validation and redirect planning when changed.
- Phase 3 adds a redirect registry or hook-backed redirect record before editors can change a published slug without preserving the prior URL.
- Dates use the business timezone `Africa/Accra` for display rules after that assumption is confirmed; stored timestamps remain timezone-safe/UTC.

## 10. Data access, caching, and revalidation

### Read path

```text
Localized route
  -> route manifest validates locale/static segment
  -> typed query requests only published and locale-ready CMS data
  -> mapper removes CMS-only/private fields
  -> server component renders domain model
```

- Use Payload Local API from server code; browser components receive serialized safe props only.
- Default relation depth is low. Avoid unbounded nested relationships and N+1 fetches.
- Request-level deduplication prevents duplicate reads during metadata and page rendering.
- Cross-request caching applies to public content only and uses tags such as `global:header`, `global:home:en`, `collection:menu-items:en`, and `doc:services:<id>:fr`.

### Invalidation

Collection/global hooks respond to publish, unpublish, update, slug change, and delete. They invalidate:

- the affected document and collection tags;
- all localized paths for that document;
- parent indexes/showcases that reference it;
- header/footer tags when navigation visibility changes;
- sitemap and relevant metadata caches.

Bulk import/seed operations may request a deliberate broader revalidation once, not once per item.

### Preview

- Payload preview links enter Next draft mode only after authentication or signed-token validation.
- Draft queries bypass the public cache and can use authenticated access.
- Preview responses are `noindex`, not included in sitemap, and never cached publicly.

### Revalidation implementation note

Use the stable tag/path revalidation API for the exact Next.js version selected in Phase 2. Keep the API behind `src/lib/cache` so framework signature changes do not leak into collection hooks.

## 11. Media and R2 strategy

### Environments

| Context               | Storage                                                                            |
| --------------------- | ---------------------------------------------------------------------------------- |
| Local development     | ignored local uploads by default; optional development R2 credentials              |
| Branch/deploy preview | non-production R2 bucket or isolated prefix with non-production credentials        |
| Production            | dedicated MESTE R2 bucket through `@payloadcms/storage-s3`; local storage disabled |

### Configuration

- Server-only: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`, `R2_ENDPOINT`.
- Public base URL: `R2_PUBLIC_URL`, normalized centrally and used to generate media URLs and `next/image` remote patterns.
- Never derive or hardcode account IDs/domains in components.
- Credentials are bucket-scoped and limited to required object operations.
- Authenticated Payload operations are the only upload path; no arbitrary browser-direct upload.

### Validation and transformations

- Allow an explicit image MIME/extension allowlist and reject executable or mismatched files.
- Use a documented configurable maximum upload size; the final threshold is an operational fact still to confirm.
- Generate approximately: 400px thumbnail, 720px card, 1200px tablet, 1600px desktop, 2400px hero, and 1200×630 OG.
- Never upscale. Preserve focal point and intrinsic dimensions.
- `next/image` receives accurate `sizes`, a stable aspect ratio, and `priority` only for the actual LCP image.
- Official static brand files remain under `public/brand` when supplied; CMS media does not replace the canonical logo source.

## 12. Form, email, and privacy flow

### Quote flow

```text
Accessible localized form
  -> same-origin server endpoint
  -> origin + content-type + length checks
  -> honeypot/time-trap + persistent rate limit
  -> Zod schema validation and normalization
  -> create private Lead
  -> send/queue admin and customer emails
  -> record delivery outcome without exposing internals
  -> branded success state
```

### Interest flow

Use the same pipeline with the smaller `ExperienceInterest` schema. Marketing consent is explicit, versioned, and not pre-checked.

### Rules

- Persist a valid submission before attempting email.
- Email failures do not delete the lead; record a retryable delivery state and show a safe success/received message when persistence succeeded.
- Admin email escapes all user content and contains no executable markup.
- Input schemas set explicit per-field and request-body length limits.
- Normalize email and phone safely; do not alter free-text meaning.
- CSRF protection uses same-origin server architecture plus `Origin`/`Host` validation and secure SameSite cookies where cookies are involved.
- Rate limiting uses a durable server-side store, not function memory. Store a keyed hash of network identifiers, not raw IP, and expire records.
- Do not send lead bodies, email addresses, phone numbers, tokens, or notes to Sentry/logs.
- Public Payload APIs cannot list or create Leads/ExperienceInterest directly; the validated server service is the only public submission path.

## 13. Security architecture

- Validate environment variables at server startup/build with separate public and private schemas; production fails closed on required secrets.
- Admin auth uses Payload secure defaults, HTTPS secure cookies, lockout/rate controls, and no public registration.
- Access-control helpers are unit tested for anonymous, editor, and admin roles.
- Editors edit content but cannot manage roles, users, security configuration, or destructive admin operations.
- Leads and interest records are least-privilege; editor access to personal data must be explicitly approved before implementation.
- Set appropriate CSP, HSTS in production, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`. Public and `/admin` CSP needs may differ and must be browser-tested.
- Sanitize/validate rich text at schema boundaries and render with an allowlisted serializer; do not use arbitrary raw HTML.
- Cap Payload API depth and GraphQL complexity; disable unnecessary surfaces.
- R2 write credentials, database URL, Payload secret, Resend key, and Sentry auth material are never `NEXT_PUBLIC_*`.
- Sentry is optional and initializes only when configured, with default PII disabled and explicit event scrubbing.
- `robots.txt` discourages indexing of admin/private paths but is never treated as access control.
- Establish a lead/interest retention and deletion policy before production launch.

## 14. SEO architecture

- Next Metadata APIs source localized values from each document with defaults from `SEOSettings`.
- Metadata generation reuses the page query to avoid duplicate CMS work.
- Sitemap contains only published, indexable, locale-ready canonical pages.
- Hreflang includes only real translations.
- JSON-LD serializers are typed and render only known facts: `Organization`, appropriate catering `LocalBusiness`, `BreadcrumbList`, `Article`, and later factual `Event`.
- Never emit review/rating, price, address, hours, award, or certification fields without verified CMS values.
- Local SEO pages use controlled `Pages` content and must pass an editorial usefulness checklist; no thin doorway pages.
- Journal remains absent from primary navigation until at least one real localized post is published.
- Slug changes create redirects; canonical overrides are restricted and validated to prevent duplicate/invalid URLs.

## 15. Visual and frontend foundation

Phase 2 establishes tokens and primitives; Phase 4 proves the complete visual system on the homepage.

- CSS custom properties include the six supplied brand colors plus documented semantic light/dark variants only.
- `Cormorant Garamond` and `Manrope` load through `next/font`, not an external stylesheet.
- Components use semantic HTML, visible focus, reduced-motion handling, and WCAG-conscious contrast.
- Motion uses CSS for basic transitions/reveals; no large animation dependency for simple effects.
- Client components are limited to behavior that requires the browser: mobile navigation, filters, lightbox, focused form enhancements, and restrained interactive showcases.
- Kente is a subtle reusable texture/divider treatment at 4–8% background opacity, not a dominant background.
- Placeholder images are local, visibly documented as placeholders, and listed in `CONTENT_CHECKLIST.md`.
- Empty references, testimonials, gallery, and journal have intentional branded states and do not leave large unfinished areas.
- `LogoFull`/`LogoMark` expose only asset variants verified from supplied official files.

## 16. Dependency/version policy for Phase 2

- Use `pnpm` and commit `pnpm-lock.yaml`.
- Select the newest mutually compatible stable Payload and Next.js pair from Payload's published compatibility matrix at the time Phase 2 starts; pin exact versions.
- Current Payload installation guidance requires Node.js 20.9+ and lists supported stable Next.js ranges, including Next 16.2.6+. Select a Netlify-supported active LTS Node version that satisfies that matrix and pin it in the repository/runtime configuration.
- React versions follow the selected Next.js release.
- Add only required runtime dependencies. Zod is justified for environment/form validation; Vitest and Playwright are justified by the test plan.
- No canary, release candidate, or experimental package. Any exception requires a small ADR update in this document with rollback consequences.
- Run license and vulnerability review before accepting the initial lockfile.

## 17. Deployment and environment strategy

### Environments

| Environment    | Database                                  | Media                          | Email                                            | Monitoring                               |
| -------------- | ----------------------------------------- | ------------------------------ | ------------------------------------------------ | ---------------------------------------- |
| Local          | separate development Neon database/branch | local ignored files by default | safe development mode or approved test recipient | optional/off                             |
| Deploy preview | isolated non-production Neon branch       | preview bucket/prefix          | disabled or approved sandbox sender/recipient    | preview environment tag, scrubbed        |
| Production     | production Neon pooled URL                | production R2 bucket/domain    | verified Resend domain                           | production Sentry, optional and scrubbed |

### Netlify

- `netlify.toml` defines the stable build command, publish/runtime integration, Node/pnpm expectations, and non-secret security headers/redirects.
- Secrets are configured in Netlify UI/CLI/API with correct scopes and contextual values, not committed in `netlify.toml`.
- Continuous deployment: feature branch -> GitHub PR -> CI -> Netlify Deploy Preview -> review -> merge to `main` -> production migration/build/deploy.
- Untrusted pull requests do not receive production secrets.
- The project must build without Sentry variables. A production build must fail clearly if required database/Payload/R2 variables are missing.

### Migrations

- Local schema iteration may use development push mode only on a disposable dev database.
- Generate and commit `src/migrations` for every reviewed schema change.
- CI verifies migration status and tests migrations against an ephemeral/non-production database when available.
- Production migration runs once in a controlled pre-deploy/build step against production before new code serves traffic; it is never triggered by ordinary requests or every function cold start.
- Backward-incompatible changes use expand/migrate/contract across deployments.
- Backups/restore and rollback are documented and tested before launch.

## 18. Environment variable contract

Phase 2 creates `.env.example` with at least:

```dotenv
DATABASE_URL=
DATABASE_URL_UNPOOLED=
PAYLOAD_SECRET=
NEXT_PUBLIC_SERVER_URL=
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_ENDPOINT=
R2_PUBLIC_URL=
RESEND_API_KEY=
FROM_EMAIL=
ADMIN_NOTIFICATION_EMAIL=
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
```

If implementation needs operational values such as a media byte limit or rate-limit key, add them only with documented defaults and server-only classification. `NEXT_PUBLIC_SERVER_URL` and any public Sentry DSN contain no secret but are still validated.

## 19. Testing and quality gates

### Unit/integration

- Locale route mapping, localized slug resolution, canonical/hreflang generation.
- Access controls for anonymous/editor/admin and private collections.
- CMS mappers exclude private fields and reject untranslated/unpublished content.
- Menu filter behavior and verified dietary labels.
- Form schemas, honeypot, rate-limit behavior, origin checking, persistence-before-email, and delivery failure handling.
- Cache tag selection and hook invalidation.
- Seed idempotency and no forbidden fabricated records.

### Playwright smoke coverage

- EN and FR homepage and language switch.
- Desktop and mobile navigation, keyboard use, focus trap, and escape/close.
- Menus and filters.
- Gallery/lightbox keyboard behavior.
- Quote validation plus a controlled successful persisted submission.
- Experience interest form.
- Mama Emma Fresh and Experience concept pages.
- Branded 404.

### Continuous checks

`format/check`, lint, strict typecheck, unit tests, production build, Playwright smoke, accessibility smoke, and migration status. CI errors must name the failed stage clearly.

### Visual review

Before Phase 5, capture and review homepage screenshots at representative mobile, tablet, desktop, and large-desktop widths. Check crop, overflow, contrast, focus, typography, empty space, editorial rhythm, and reduced motion. A technically passing but visibly unfinished homepage does not pass Phase 4.

### Performance budgets

- Target LCP <= 2.5s, INP <= 200ms, CLS <= 0.1.
- Track route JavaScript and image weight; reject unnecessary client hydration/third-party scripts.
- The homepage LCP uses a responsive optimized still image, never autoplay video.

## 20. Documentation deliverables by phase

| Document                 | Planned phase         | Purpose                                                          |
| ------------------------ | --------------------- | ---------------------------------------------------------------- |
| `IMPLEMENTATION_PLAN.md` | 1                     | Architecture, routes, content model, assumptions, risks, gates   |
| `BRAND.md`               | 2–4                   | Tokens, verified logos, typography, Kente, photography, motion   |
| `CONTENT_MODEL.md`       | 3                     | Collections, globals, blocks, localization and publication rules |
| `CMS.md`                 | 3–6                   | Non-developer editing, preview, publishing, media, leads         |
| `CONTENT_CHECKLIST.md`   | 2–5                   | Missing photography, copy, translations, factual approvals       |
| `CLOUDFLARE_R2.md`       | 2/10                  | Bucket, credentials, domain, adapter, troubleshooting            |
| `NETLIFY.md`             | 2/10                  | contexts, variables, builds, previews, production/domain         |
| `SEO.md`                 | 7                     | metadata, hreflang, sitemap, schema, local SEO, alt text         |
| `SECURITY.md`            | 6/8                   | roles, private data, forms, secrets, headers, R2, checklist      |
| `DEPLOYMENT.md`          | 10                    | end-to-end release, migrations, rollback, ownership              |
| `README.md`              | maintained throughout | setup, architecture, workflows, tests, troubleshooting           |

## 21. Phase execution plan and exit criteria

### Phase 1 — Discovery (complete with this document)

- Read the entire master brief.
- Inspect every current repository file/configuration and requested asset directory.
- Record missing official logo/assets and environment/repository state.
- Define routes, CMS, architecture, assumptions, missing facts, and later-phase gates.

**Exit:** this plan passes the brief checklist; no Phase 2 application code exists.

### Phase 2 — Foundation (implementation complete)

- Initialize Git and the integrated stable Next.js/Payload TypeScript project with pnpm.
- Add Tailwind, CSS tokens, `next/font`, route locale skeleton, layouts, brand primitives, env validation, Neon adapter, R2 adapter/local fallback, Netlify configuration, and base error pages.
- Add `.env.example`, CI skeleton, and foundational docs.

**Exit:** local app, Payload admin, typecheck, lint, tests, and production build work with documented development services; no fabricated brand asset.

**Completion record (2026-08-09):** the repository now pins Node.js 24.14.0, pnpm 11.16.0, Next.js 16.3.0, React 19.2.6, and Payload 3.87.1. Git, the integrated app, bilingual route skeleton, design tokens/primitives, environment validation, PostgreSQL and conditional R2 adapters, Netlify configuration, CI, documentation, and foundation tests are present. Format, lint, strict typecheck, eight unit tests, three public-browser smoke tests, the production build, frozen-lockfile installation, and the production dependency audit pass locally. The Payload integration and authenticated-admin browser tests remain wired to CI's PostgreSQL service; they were not executed on this workstation because no local PostgreSQL service or development Neon credentials were available.

### Phase 3 — CMS (implementation complete)

- Implement collections/globals/blocks, roles/access, localization readiness, drafts/preview, media validation/sizes, migrations, idempotent seed, and typed queries.

**Exit:** editor workflows and access tests pass; public reads expose only published/ready content.

**Completion record (2026-08-09):** the Payload configuration now contains the full editorial/private collection model, six globals, administrator/editor roles, EN/FR localization without fallback, draft/version workflows, authenticated Next.js Draft Mode preview, locale-readiness access control, controlled blocks, responsive Media sizes, slug redirect tracking, scoped cache invalidation, typed public queries/mappers, an idempotent factual seed, CMS/content-model documentation, and the generated initial PostgreSQL migration with `up`/`down` statements. Migration commands select `DATABASE_URL_UNPOOLED`; normal application traffic retains the pooled `DATABASE_URL`. Format, lint, strict typecheck, sixteen unit tests, three public Playwright tests, schema-drift generation, production build, and dependency audit pass locally. Applying the migration, running the seed, Payload integration tests, and authenticated-admin Playwright tests remain CI/development-database checks because this workstation has no PostgreSQL service or Neon credentials.

### Phase 4 — Homepage

- Build the complete visual journey and validate desktop/mobile, accessibility, images, performance, and screenshot rhythm.

**Exit:** homepage establishes the approved reusable design system; do not propagate an unresolved direction.

### Phase 5 — Core pages

- Build Story, Services, Menus, Fresh, Gallery, Experience, Contact, Journal capability, and intentional empty states.

**Exit:** localized route, CMS, responsive, and accessibility checks pass for every core page.

### Phase 6 — Conversion

- Build quote and interest pipelines, private persistence, rate limiting, consent, emails, status tracking, and tests.

**Exit:** persistence survives email failure; private data cannot be publicly read; successful workflows are browser-tested.

### Phase 7 — SEO and performance

- Complete metadata, canonical/hreflang, sitemap, robots, truthful JSON-LD, caching/revalidation, and performance audit.

**Exit:** no untranslated/hidden content leaks into search outputs and budgets are met or deviations documented.

### Phase 8 — Security

- Audit auth/access, forms, headers/CSP, Payload endpoints, secrets, R2 scope, PII logging/Sentry, dependencies, and retention.

**Exit:** critical/high findings resolved; accepted residual risks documented.

### Phase 9 — Testing

- Run the complete quality suite and cross-device/browser screenshot checks.

**Exit:** required CI suite passes from a clean checkout with documented services.

### Phase 10 — Deployment

- Connect owner-controlled GitHub, Netlify, Neon, R2, Resend, Sentry, domains, preview contexts, backups, migration release flow, and production smoke checks.

**Exit:** production is owner-controlled, observable, documented, recoverable, and verified without placeholder business claims.

## 22. Assumptions

Assumptions are implementation defaults, not new business facts.

1. `pnpm` is the package manager, consistent with Payload's preferred setup.
2. The public default locale and `x-default` destination are English.
3. The business display timezone is `Africa/Accra`; confirm before event date workflows launch.
4. The supplied phone `0537464516` is stored as given until the business confirms its international/WhatsApp form and whether it is the WhatsApp number.
5. No analytics or advertising tracker is installed by default; this avoids an unrequested cookie/consent dependency.
6. Editors need preview and publish capability, but access to lead PII is not assumed and requires an explicit policy decision.
7. R2/Neon/Netlify preview resources are separate from production even if initial preview resources are shared among trusted feature branches.
8. Missing photographs use labelled local placeholders only during development.
9. Official French translations require human/business approval before locale readiness is enabled.
10. The Experience remains interest-only until real event facts and an approved registration mode exist.

## 23. Missing factual and operational information

These gaps should remain configurable and do not block safe scaffolding unless marked as a launch gate.

### Brand/content launch gates

- Official full logo and portrait-mark files, including valid color/background variants and usage guidance.
- Approved homepage hero, Mama Emma portrait/archive, food, service, events, Fresh product, and behind-the-scenes photography with rights/credits.
- Approved English and French copy/translations.
- Final menu accuracy, dish descriptions, availability, dietary labels, allergens, pork flags, and recipe-related Fresh claims.
- Mama Emma Fresh official can images, sizes, availability, verified ingredients, nutrition/legal copy, and approved product accent colors.
- Display-approved clients, reference facts/photos/logos, guest counts, and permission evidence.
- Display-approved testimonials and permission evidence.

### Business/contact/legal launch gates

- Primary domain and desired `media.` custom domain.
- Verified international phone format and whether the known number supports WhatsApp.
- Public email, sender email/domain, and admin notification recipients.
- Street/postal address, service-area wording, and opening/contact hours, if the business wants them public.
- Verified social URLs.
- Legal business/controller identity, privacy contact, privacy notice, cookie policy if later needed, consent wording/version, and lead/interest retention periods.
- Budget ranges, if the quote form should show them.
- Approved event terms, cancellation/registration/privacy terms before Experience registration/ticketing launches.

### Platform/ownership setup

- Owner-controlled GitHub organization/repository and branch-protection policy.
- Netlify account/site/team and production branch.
- Neon projects/branches, region, backup/restore policy, and pooled connection URLs.
- Cloudflare account, R2 production/preview buckets, API credentials, CORS/custom domain configuration.
- Resend account, verified sending domain, from address, and recipients.
- Sentry organization/project/DSNs and data-retention policy, if monitoring is enabled.
- DNS ownership and cutover window.

### Experience facts intentionally unknown

- Dates, frequency, prices, capacity, venues, menus, entertainment, dress code, and registration URLs/modes.

These remain absent. The CMS supports them for future use without rendering fake events.

## 24. Principal risks and mitigations

| Risk                                            | Impact                               | Mitigation / gate                                                                       |
| ----------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------- |
| Official brand assets missing                   | Cannot claim final brand accuracy    | No portrait redraw; track as visual launch gate                                         |
| Photography missing                             | Premium design may look unfinished   | Labelled local placeholders plus detailed content checklist and later screenshot review |
| Integrated CMS on serverless runtime            | Connection/filesystem/runtime issues | Neon pooled URL, R2, current Netlify runtime validation, load/smoke tests               |
| Preview mutates production                      | Content/schema corruption            | Separate DB branch and R2 namespace; never expose prod secrets to previews              |
| Migrations race or break old code               | Outage                               | Controlled one-time pre-deploy migration and expand/migrate/contract changes            |
| Bilingual document published before translation | Duplicate/misleading pages           | No fallback public reads plus explicit locale readiness                                 |
| Private lead data leaks through Payload API     | Privacy/security incident            | Deny public access, server-only create service, access tests, API depth controls        |
| Serverless in-memory rate limit is ineffective  | Spam/abuse                           | Durable Postgres-backed limiter with hashed identifiers and expiry                      |
| R2 remote URL/config drift                      | Broken media                         | Central URL builder/env validation; no hardcoded domains                                |
| Email outage loses enquiries                    | Revenue loss                         | Persist first; record delivery status and retry path                                    |
| Over-flexible blocks erode design               | Generic/inconsistent site            | Controlled variants, validation, bounded counts, no arbitrary CSS/HTML                  |
| Current package compatibility shifts            | Build/runtime breakage               | Pin newest supported stable pair from official matrix and lockfile; no blind upgrades   |
| Unverified legal/dietary/product claims         | Business/legal harm                  | Required editorial verification and empty-safe rendering                                |

## 25. Phase 1 review checklist

- [x] Entire `MASTER_BRIEF.md` read.
- [x] Entire existing repository inspected.
- [x] `/brand-assets` inspected and found missing.
- [x] `/public/brand` inspected and found missing.
- [x] Existing configuration/environment inspected and found absent.
- [x] Official logos identified as unavailable; no logo fabricated.
- [x] Route architecture defined.
- [x] CMS collections, globals, blocks, and permissions defined.
- [x] Storage, caching, localization, migration, and deployment strategies defined.
- [x] Assumptions separated from facts.
- [x] Missing business/platform information listed.
- [x] Phase gates and quality checks defined.
- [x] At Phase 1 sign-off, Phase 2 remained unimplemented.

## 26. First-party references checked during Phase 1

- [Payload production deployment](https://payloadcms.com/docs/production/deployment)
- [Payload installation and current compatibility matrix](https://payloadcms.com/docs/getting-started/installation)
- [Payload Postgres adapter](https://payloadcms.com/docs/database/postgres)
- [Payload migrations](https://payloadcms.com/docs/database/migrations)
- [Payload localization](https://payloadcms.com/docs/configuration/localization)
- [Payload drafts](https://payloadcms.com/docs/versions/drafts)
- [Payload storage adapters and Cloudflare R2](https://payloadcms.com/docs/upload/storage-adapters)
- [Neon connection pooling](https://neon.com/docs/connect/connection-pooling)
- [Netlify deploy contexts](https://docs.netlify.com/deploy/deploy-overview/)
- [Netlify environment variables](https://docs.netlify.com/build/environment-variables/overview/)

These references confirm the feasibility of the chosen integrated deployment, Postgres migration model, localized/draft content, S3-compatible R2 adapter, Neon pooling, and context-specific Netlify configuration. Exact package versions and generated configuration are deliberately deferred to Phase 2 so they can be pinned together from the then-current stable compatibility matrix.

## 27. Phase 2 review checklist

- [x] Git repository initialized on `main` without creating an external remote.
- [x] Stable compatible Next.js/Payload versions and the Node/pnpm toolchain pinned exactly.
- [x] Integrated Payload admin/API and bilingual `/en` and `/fr` route foundation created.
- [x] GraphQL and its playground disabled because Phase 2 has no accepted use case for them.
- [x] Brand tokens, typography, responsive primitives, and a clearly labelled non-logo fallback created without fabricating official assets.
- [x] Server environment, Neon PostgreSQL, local/R2 media switching, Netlify contexts, and CI documented and configured.
- [x] Frozen install, format, lint, typecheck, unit tests, public Playwright smoke tests, build, and dependency audit pass locally.
- [x] PostgreSQL-backed integration/admin tests included in CI; local execution awaits an actual development database.
- [x] At Phase 2 sign-off, Phase 3 CMS modeling, roles, migrations, seed content, preview, and public query layer remained unimplemented.

## 28. Phase 3 review checklist

- [x] Sixteen briefed collections plus the localized redirect registry implemented.
- [x] Six globals and sixteen controlled blocks implemented without arbitrary HTML/CSS controls.
- [x] Administrator/editor separation and private Users/Leads/Experience Interest access enforced.
- [x] EN/FR localization uses no fallback and requires both publication and per-locale readiness.
- [x] Drafts, versions, scheduled publishing, authenticated preview, and preview `noindex` behavior configured.
- [x] Media categories, focal point, crops, MIME allowlist, and six responsive derivatives configured.
- [x] Typed public queries use explicit locale, public access semantics, low relation depth, mappers, and cache tags.
- [x] Published slug changes create redirect records for localized dynamic content.
- [x] Idempotent seed contains supplied facts only and leaves editorial content as locale-unready drafts.
- [x] Initial generated PostgreSQL migration and no-drift check completed.
- [x] Pooled application and direct migration Neon URLs separated.
- [x] CMS and content-model guides written.
- [x] Phase 4 homepage rendering and final visual journey remain unimplemented.
