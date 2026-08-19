# Homepage composition (Phase 4)

The homepage establishes the design system for every page that follows. Do not
invent a new visual language elsewhere — reuse these primitives.

## Visual direction

The approved direction is a hybrid: the editorial structure and rhythm of the
validated mockup, rendered in the master brief's palette and typography.

| Role                | Token                    | Value     | Notes                                          |
| ------------------- | ------------------------ | --------- | ---------------------------------------------- |
| Headings, primary   | `--meste-burgundy`       | `#5A0D18` | 12.3:1 on ivory                                |
| Immersive band      | `--meste-forest`         | `#173D27` | The Experience section, footer                 |
| Decorative gold     | `--meste-gold`           | `#C99A3A` | Rules, hairlines, ornaments — **never text**   |
| Display numerals    | `--meste-gold-numeral`   | `#A0741C` | 3.7:1 on ivory, valid for text ≥ 24px          |
| Small gold text     | `--meste-gold-ink`       | `#7E5410` | 5.85:1 on ivory, used for eyebrows and indices |
| Gold on dark        | `--meste-gold-light`     | `#DFBD70` | 6.72:1 on forest, 7.74:1 on burgundy           |
| Page ground         | `--meste-ivory`          | `#F6F0E5` |                                                |
| Alternate band      | `--meste-ivory-deep`     | `#EFE7D8` |                                                |
| Body text           | `--meste-charcoal`       | `#252525` |                                                |
| Secondary text      | `--meste-muted`          | `#57524A` | 6.83:1 on ivory                                |

Brand gold reaches only 2.27:1 on ivory, which is why it is split into three
roles. Never put small text in `--meste-gold`.

Display type is Cormorant Garamond, interface and body type is Manrope, both
loaded through `next/font`.

Colour alternates ivory → deep ivory → forest so the page reads as a sequence of
rooms rather than a stack of cards.

## Section order

1. Header — sticky, medallion plus live wordmark, EN/FR, primary CTA
2. Hero — asymmetric split, two-part headline, portrait frame, overlapping note
3. Signature band — Taste · Elegance · Hospitality
4. Promise — four numbered pillars in a hairline grid
5. Manifesto — two-column editorial text plus the six reasons index
6. Our worlds — full-width index rows linking to services
7. Reception formats — horizontal rail, keyboard focusable
8. Culinary identity — African Soul / Contemporary Expression, plus the dish rail
9. The Mama Emma Experience — forest band, Dine · Discover · Connect
10. Process — five steps
11. Mama Emma Fresh — product index and packshot frame
12. References — approved quotes, or an editorial empty state
13. Closing — outlined MESTE wordmark, primary CTA, phone or WhatsApp
14. Footer — forest, contact block hides every empty value

## Content contract

`src/lib/home/copy/{en,fr}.ts` holds the approved editorial baseline. Every line
comes from the MESTE 2026 presentation or the validated mockup.

`src/lib/payload/queries/home.ts` merges published CMS content over that
baseline. Published content always wins; anything the CMS cannot supply yet
keeps the baseline wording. If the database is unreachable the page still
renders from the baseline instead of failing.

The CMS currently drives:

- `worlds` ← Services
- `formats` ← ReceptionFormats
- `fresh.products` ← FreshProducts
- `dishes.items` ← HomePage → featuredDishes, only dishes with approved photography
- `references.quotes` ← Testimonials with `permissionToDisplay`
- `meta` ← HomePage SEO group

Content only appears once the document is published **and** its locale is marked
ready in `localeReadiness`.

`src/lib/payload/queries/chrome.ts` resolves Header, Footer, SiteSettings and
ContactSettings the same way.

## Rules the code enforces

- No price appears anywhere on the site; a unit test asserts this.
- A testimonial or reference is rendered only with recorded permission.
- An image frame with no approved photography renders a labelled placeholder
  naming the missing shoot, never a stock or generated image.
- An image without alt text is treated as missing and is not rendered.
- The WhatsApp link is built only from an explicit international number in
  ContactSettings. The known local number is never silently given a country
  prefix; it renders as a `tel:` link instead.
- Contact fields that are empty disappear rather than leaving labelled gaps.
- Structured data publishes only verified facts — no ratings, reviews, prices,
  opening hours or street address.

## Accessibility

axe-core reports zero WCAG 2.1 A/AA violations at 1440px and 390px in both
locales. Verified: single H1, logical heading outline, visible focus states,
skip link, keyboard-focusable scroll rails, 24px minimum interactive targets,
and reduced-motion support.

## Outstanding

- Photography for every frame listed in `docs/CONTENT_CHECKLIST.md`.
- Verified address, public email, opening hours, social handles and the
  international WhatsApp number.
- Signature dish photography before the dish rail can appear.
- Real testimonials with recorded permission.
