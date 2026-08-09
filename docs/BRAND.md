# MESTE Brand Foundation

## Positioning

MESTE is a premium African catering and hospitality house—not a restaurant template. The visual territory combines African heritage, contemporary expression, warm hospitality, and quiet luxury.

The Phase 2 foundation addresses one concrete audience: a host, company, embassy, or institution deciding whether MESTE can create a memorable table. Its current job is to establish trust in the visual language before the full homepage is designed.

## Core palette

| Token | Value | Use |
| --- | --- | --- |
| Burgundy | `#5A0D18` | Primary brand voice and editorial headlines |
| Forest | `#173D27` | Deep hospitality surfaces and structural contrast |
| Gold | `#C99A3A` | Restrained accent and focus—not metallic effects |
| Ivory | `#F6F0E5` | Warm primary surface |
| Charcoal | `#252525` | Main reading text |
| Black | `#111111` | Maximum-contrast detail where necessary |

Semantic light/dark variants live beside the core variables in the frontend stylesheet. New colors require a brand reason; product accents must derive from verified beverage artwork.

## Typography

- Display: Cormorant Garamond, weights 400–600.
- Body/interface: Manrope variable.
- Delivery: `next/font` only, self-hosted by the Next.js build.

Headlines are large, tightly tracked, and deliberately narrow. Body copy keeps comfortable size and line height. Eyebrows are compact uppercase navigation signals, not decoration.

## Layout concept

The foundation uses an editorial table-plan grid: a narrow vertical brand index, a generous central story field, and a slim signature rail. It avoids cards and makes structure visible through rules and alignment.

```text
┌──────────────────────────────────────────────────────────┐
│ Wordmark                                      EN / FR    │
├───────┬──────────────────────────────────────┬───────────┤
│ MESTE │ Eyebrow                              │ weave     │
│       │ Large editorial statement            │ signature │
│       │ body + status                         │           │
├───────┴──────────────────────────────────────┴───────────┤
│ Short heritage statement                                │
└──────────────────────────────────────────────────────────┘
```

This is a foundation canvas, not the approved Phase 4 homepage composition.

## Signature: the quiet weave

A tiny linear band abstracts Kente rhythm through proportion and interruption. It is used as a divider/transition, not a full pattern. Background references remain around 4–8% opacity; narrow dividers may be slightly more visible while remaining secondary.

Do not add generic African motifs, saturated full-screen Kente, or repeated ornamental borders.

## Logo status and rules

No official logo asset is present in `/brand-assets` or `/public/brand`.

- `LogoFull` currently renders a clearly marked typographic fallback.
- `LogoMark` intentionally renders nothing.
- Do not draw a woman profile, monogram, emblem, or new lockup.
- When official assets arrive, record format, intrinsic size/viewBox, lockup type, color treatment, and valid backgrounds before wiring a component variant.
- The fallback must be replaced, not presented as an official logo.

## Photography

Future photography should be real, warm, tactile, generous, refined, and human. Prioritize food texture, fire/smoke, hands plating, service moments, tables, permitted guests, and atmosphere.

Do not silently download stock imagery. Development placeholders must be local and explicitly identified.

## Motion

Motion should be quiet and precise: opacity, small translation, masks, image scale, and header transitions. Respect `prefers-reduced-motion`. No scroll hijacking, bouncing, or animation on every element.

## Accessibility baseline

- Semantic headings and landmarks.
- Visible gold focus outline with sufficient contrast.
- Never rely on color alone.
- Body copy is not reduced to decorative sizes.
- Mobile retains asymmetry and hierarchy rather than centering everything.
