import type { ServicesContent } from '@/lib/pages/services/types'

/**
 * English baseline for the services index.
 *
 * The four service categories, their event lists and the five reception formats
 * are the brief's own inventories, verbatim. Format descriptions are the ones
 * already approved on the homepage. Framing copy is house writing.
 *
 * No guest range appears anywhere: the brief supplies none, and inventing one
 * would be a commercial claim.
 */
export const servicesCopyEN: ServicesContent = {
  meta: {
    title: 'Services',
    description:
      'Celebrations, corporate events, institutional and diplomatic receptions, and bespoke culinary experiences in Accra.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'Hosting',
    headingLead: 'One house,',
    headingAccent: 'many ways to host.',
    lede: 'Four worlds, five ways to serve them. Whatever the occasion, the same house prepares it, and the same standard carries it.',
  },
  worlds: {
    eyebrow: 'Our worlds',
    heading: 'What we',
    headingAccent: 'are called for.',
    items: [
      {
        title: 'Celebrations',
        items: ['Wedding', 'Birthday', 'Baptism', 'Private receptions'],
      },
      {
        title: 'Corporate',
        items: ['Launches', 'Business lunches', 'Cocktails', 'Conferences', 'Corporate dinners'],
      },
      {
        title: 'Institutional & Diplomatic',
        items: ['Embassies', 'Consulates', 'Institutions', 'Official receptions'],
      },
      {
        title: 'Bespoke Experiences',
        items: ['Private dining', 'VIP events', 'Custom culinary concepts'],
      },
    ],
  },
  formats: {
    eyebrow: 'Reception formats',
    heading: 'Choose your way',
    headingAccent: 'to celebrate.',
    note: 'Every format is shaped around your room, your timing and your guests.',
    items: [
      {
        name: 'Cocktail',
        description: 'Elegant, dynamic and convivial.',
        media: {
          slot: 'Format — cocktail',
          caption: 'Cocktail reception, tray in motion.',
          image: null,
        },
      },
      {
        name: 'Buffet',
        description: 'Generous, visual and adaptable.',
        media: {
          slot: 'Format — buffet',
          caption: 'Dressed buffet, wide view.',
          image: null,
        },
      },
      {
        name: 'Table service',
        description: 'Formal, paced and sophisticated.',
        media: {
          slot: 'Format — table service',
          caption: 'Plated service, dressed room.',
          image: null,
        },
      },
      {
        name: 'Brunch',
        description: 'Bright, generous and relaxed.',
        media: {
          slot: 'Format — brunch',
          caption: 'Brunch table in natural light.',
          image: null,
        },
      },
      {
        name: 'Bespoke',
        description: 'An experience designed entirely around you.',
        media: null,
      },
    ],
  },
  references: {
    eyebrow: 'References',
    heading: 'References available on request',
    body: 'We name a client only once they have told us we may. Until then, we would rather say nothing than say something we have not been given.',
  },
  closing: {
    heading: 'Tell us what you are hosting.',
    body: 'The date, the place, the number of guests. We take it from there.',
    action: { label: 'Plan your event', route: 'quote' },
  },
}
