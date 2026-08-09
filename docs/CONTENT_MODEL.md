# MESTE CMS content model

## Publishing contract

English (`en`) and French (`fr`) are Payload locales. Localized fields never fall back to another locale. An editorial document is public only when both conditions are true:

1. Payload status is `published`.
2. `localeReadiness.<locale>` is enabled for the requested locale.

This rule is enforced by collection/global access control and repeated in the typed public query layer. Preview is authenticated, bypasses public caching through Next.js Draft Mode, and emits `noindex` metadata.

## Roles

| Role          | Capability                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Administrator | Manages users, roles, content, settings, redirects, and private operational data                                                                  |
| Editor        | Creates, edits, publishes, and deletes editorial content and media; cannot manage users, roles, verification settings, leads, or interest records |

The first user may be created only when no account exists. Later account creation requires an administrator. There is no public registration.

## Collections

| Collection          | Purpose                                                                                      | Public read rule                                                      |
| ------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Users               | CMS authentication and roles                                                                 | Never                                                                 |
| Media               | Approved image files, alt text, captions, categories, credits, focal point, responsive sizes | Yes, for referenced media                                             |
| Pages               | About, Contact framing, Experience, indexes, and substantive editorial/SEO pages             | Published + locale ready                                              |
| Services            | Celebrations, Corporate, Institutional/Diplomatic, Bespoke                                   | Published + locale ready                                              |
| Reception Formats   | Cocktail, Buffet, Table Service, Brunch, Bespoke                                             | Published + locale ready                                              |
| Menu Categories     | Stable menu groupings and filters                                                            | Published + locale ready                                              |
| Menu Items          | Dishes, compositions, level, media, verified dietary metadata                                | Published + locale ready                                              |
| Signature Menus     | Curated menus and course relations                                                           | Published + locale ready                                              |
| Fresh Products      | Mama Emma Fresh product storytelling and approved product assets                             | Published + locale ready                                              |
| Events              | Future factual Experience editions                                                           | Published + locale ready; concept is not treated as a scheduled event |
| References          | Display-approved client work                                                                 | Published + locale ready + permission                                 |
| Testimonials        | Real approved quotations                                                                     | Published + locale ready + permission                                 |
| Gallery             | Curated media entries and accessible captions                                                | Published + locale ready                                              |
| Journal Posts       | Optional editorial journal                                                                   | Published + locale ready                                              |
| Redirects           | Previous localized slugs and their current destination                                       | Public path mapping only                                              |
| Leads               | Private quote enquiries                                                                      | Never                                                                 |
| Experience Interest | Private interest registrations                                                               | Never                                                                 |

Leads and Experience Interest have schemas now, but the public submission pipeline, validation, rate limiting, and email delivery belong to Phase 6.

## Globals

| Global           | Responsibility                                                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Site Settings    | Public brand identity, Accra/Ghana location, timezone, safe feature flags                      |
| Header           | Controlled localized navigation and primary action                                             |
| Footer           | Localized statement, navigation, and approved legal links                                      |
| Homepage         | Constrained blocks and featured relations; final rendering belongs to Phase 4                  |
| Contact Settings | Verified phone, optional WhatsApp/email/address/hours/social links                             |
| SEO Settings     | Search defaults and truthful organization metadata; verification values are administrator-only |

## Controlled blocks

The page and homepage layout fields support exactly these blocks:

- Hero
- Editorial Text & Image
- Full-Bleed Image
- Manifesto
- Quote
- Service Showcase
- Menu Showcase
- Signature Dishes
- Fresh Products
- Gallery Preview
- References
- Process
- Mama Emma Experience Teaser
- CTA
- Editorial Split
- Story Chapter

Blocks expose only bounded variants, controlled route keys, semantic heading levels, and approved brand tones. They do not allow raw HTML, arbitrary CSS classes, or arbitrary colors.

## Media

Accepted source formats are AVIF, JPEG, PNG, and WebP. Remote URL pasting is disabled. Payload creates thumbnail (400), card (720), tablet (1200), desktop (1600), hero (2400), and Open Graph (1200×630) derivatives without enlarging undersized sources. Production uses the R2 adapter; local development can use ignored filesystem storage.

## Seed policy

`pnpm seed` is idempotent and uses stable hidden seed keys. It creates only facts supplied in the master brief: service worlds, reception formats, menu categories/items, signature-menu names, Fresh product names, known story copy, manifesto/process excerpts, controlled settings, and the Experience concept disclaimer.

All seeded editorial records remain drafts and both locale-readiness flags remain false. The seed never creates clients, testimonials, prices, addresses, events, awards, certifications, social accounts, dietary claims, allergens, nutrition claims, or an “organic” claim.

## Data access and invalidation

Public server code uses `src/lib/payload/queries`, always requests an explicit locale, sets `fallbackLocale: false`, respects Payload access control, and maps CMS documents to presentation-safe types. Cache tags are collection/document/global scoped. Payload hooks invalidate affected tags and the sitemap tag after content changes; seed operations deliberately suppress per-record invalidation.

Published localized slug changes create or update a redirect record for Services, Signature Menus, Events, and Journal Posts.

## Migrations

The initial schema is in `src/migrations/20260809_172137_phase_3_cms.ts` with its generated snapshot. Generate subsequent changes with:

```bash
pnpm payload migrate:create descriptive_name
```

Apply committed migrations with:

```bash
pnpm payload migrate
```

Normal application traffic uses the pooled `DATABASE_URL`. Migration commands require the direct `DATABASE_URL_UNPOOLED` so they do not run through PgBouncer. Never use schema push in deploy preview or production.
