# MESTE CMS guide

This guide is for MESTE administrators and editors. The CMS is private at `/admin`.

## Sign in and roles

Open the deployed site’s `/admin` URL and sign in with your assigned account. There is no public registration.

- Administrators manage accounts, roles, redirects, private enquiries, and all editorial content.
- Editors manage editorial content and media. They cannot see or manage users, roles, private leads, the Experience interest list, or administrator-only verification values.

Use a unique password and do not share accounts.

## The publication checklist

Saving a draft does not make it public. For each language you intend to publish:

1. Select English or French in the locale control.
2. Complete the localized title, slug, copy, alt text, and required media.
3. Check factual claims, permissions, allergens, dietary labels, product/legal copy, and links.
4. Enable the matching **Locale readiness** checkbox.
5. Use **Preview** and review the page.
6. Publish the document.

A page becomes public only when it is published and its current locale is marked ready. There is no automatic English-to-French fallback.

## Edit a page

1. Open **Content → Pages**.
2. Select a page or create one with the correct controlled page kind.
3. Edit the title and localized slug.
4. Add or reorder only the approved content blocks.
5. Save a draft frequently; autosave is also enabled.
6. Preview and follow the publication checklist.

Do not add empty blocks merely to create space. The final visual composition is controlled by the site design.

## Upload media

1. Open **Content → Media** or use an upload field from another document.
2. Upload AVIF, JPEG, PNG, or WebP only.
3. Write useful localized alt text describing the content and purpose.
4. Choose the correct category and add a caption/credit when needed.
5. Adjust crop and focal point while checking the generated sizes.

Use only media MESTE owns or has permission to publish. Never upload arbitrary images found online. Official logos and Mama Emma Fresh can artwork must use supplied approved assets.

## Create a menu item

1. Open **Content → Menu Items**.
2. Choose its category and culinary level: Classic, Signature, or Chef’s Creation.
3. Add the localized name, composition, and description.
4. Add approved photography when available.
5. Leave dietary labels and allergens empty unless the recipe and cross-contamination policy have been verified. Record the internal verification note.
6. Mark pork explicitly where applicable.
7. Preview and publish only ready locales.

## Create a signature menu

1. Open **Content → Signature Menus**.
2. Add the title, subtitle, introduction, and welcome text.
3. Build the course sequence from existing menu-item relations.
4. Add only verified dietary notes and availability.
5. Do not invent prices.
6. Preview, mark locale readiness, and publish.

## Update Mama Emma Fresh

1. Open **Content → Fresh Products**.
2. Edit approved descriptions and ingredients.
3. Use an official can image and the constrained product accent.
4. Add sizes only when confirmed.
5. Keep availability at **To confirm** until verified.
6. Do not claim “organic” or publish nutrition/legal wording without approval.

## Add a gallery image

Create the Media record first, then create a Gallery entry with localized alt/caption, category, optional Event/Service relation, and sort order. Publish only after the related media rights and locale copy are approved.

## References and testimonials

Create only real records. Publishing alone is not enough: **Permission to display** must also be enabled. Keep the record unpublished if permission evidence is missing or withdrawn.

## Events and The Mama Emma Experience

The current Experience is a concept in development. Do not create dates, venues, prices, capacities, menus, entertainment, or registration links unless confirmed. A concept record is not a scheduled public event.

## Review leads

Only administrators can access **Private operations → Leads** and **Experience Interest**. Phase 6 will add public submission, notifications, and delivery workflows. Do not copy personal data into public content, logs, or screenshots.

## Slug changes and redirects

Changing a published localized slug for Services, Signature Menus, Events, or Journal Posts creates a redirect from the old URL. Administrators can review these under **Redirects**. Avoid changing slugs casually.

## Structural seed

Developers may run `pnpm seed` after migrations. It is safe to rerun and updates known starter records rather than duplicating them. Seeded content is deliberately draft and locale-unready; an editor must review it before publication.
