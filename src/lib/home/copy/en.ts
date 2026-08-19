import type { HomeContent } from '@/lib/home/types'

/**
 * English homepage copy, taken from the approved MESTE 2026 presentation.
 * Nothing here is invented: no prices, no addresses, no client names, no counts.
 */
export const homeCopyEN: HomeContent = {
  skipToContent: 'Skip to main content',
  meta: {
    title: 'The art of hosting, reimagined',
    description:
      'Premium catering and hospitality in Accra: celebrations, corporate, institutional receptions and bespoke experiences. African roots, contemporary execution.',
  },
  hero: {
    metaLeft: 'Accra · Ghana',
    metaRight: 'Rooted in Congo',
    headingLead: 'The art of hosting,',
    headingAccent: 'reimagined.',
    body: 'For us, hosting is not simply about serving a meal. It is about creating a moment: one where flavours tell a story, where presentation captures the eye before the first bite, and where every detail makes guests feel truly expected.',
    action: { label: 'Plan your event', route: 'quote' },
    secondaryAction: { label: 'Discover our worlds', route: 'services' },
    note: {
      label: '01 — Taste',
      text: 'Generous, sincere and carefully crafted cuisine where flavour always comes first.',
    },
    media: {
      slot: 'Hero — signature plating',
      caption: 'Vertical photograph of a signature plating, 4:5.',
      image: null,
    },
  },
  signatureBand: ['Taste', 'Elegance', 'Hospitality'],
  promise: {
    eyebrow: 'Our promise',
    heading: 'Your event deserves more than a meal.',
    pillars: [
      {
        title: 'Taste',
        label: 'Flavour',
        body: 'Generous, sincere and carefully crafted cuisine where flavour always comes first.',
      },
      {
        title: 'Elegance',
        label: 'Presentation',
        body: 'From plated presentation to buffet scenography, aesthetics are part of the experience.',
      },
      {
        title: 'Hospitality',
        label: 'Care',
        body: 'Welcoming, serving and caring: the DNA of Mama Emma from day one.',
      },
      {
        title: 'Excellence',
        label: 'Details',
        body: 'From preparation to the last guest served, every detail matters.',
      },
    ],
  },
  manifesto: {
    eyebrow: 'Our manifesto',
    heading: 'There is no need to choose between authenticity and',
    headingAccent: 'sophistication.',
    paragraphs: [
      'Our work begins long before the first dish is served. We listen. We imagine. We prepare. We present. We serve.',
      'Our cuisine is rooted in Africa — from Congo to Ghana, drawing on culinary traditions from across the continent — yet it does not stop there. It converses with the cuisines of the world, with contemporary technique, and with inspiration gathered through travel, encounters and experience.',
      'African roots. A world-facing spirit. A constant demand for excellence. MESTE was born precisely of that meeting.',
    ],
    reasons: {
      eyebrow: 'Why MESTE',
      items: [
        'An assured African culinary identity',
        'Tailor-made experiences',
        'A single point of contact',
        'Professional execution',
        'A complete food and beverage ecosystem',
        'Locally rooted, world-facing',
      ],
    },
  },
  worlds: {
    eyebrow: 'Our worlds',
    heading: 'One house. Many ways to host.',
    items: [
      {
        title: 'Celebrations',
        detail: 'Weddings · Birthdays · Baptisms · Private receptions',
        route: 'services',
      },
      {
        title: 'Corporate',
        detail: 'Cocktails · Business lunches · Dinners · Launches · Seminars',
        route: 'services',
      },
      {
        title: 'Institutional & Diplomatic',
        detail: 'Embassies · Consulates · Institutions · Official receptions',
        route: 'services',
      },
      {
        title: 'Bespoke Experiences',
        detail: 'Private dinners · VIP events · Fully bespoke experiences',
        route: 'services',
      },
    ],
  },
  formats: {
    eyebrow: 'Reception formats',
    heading: 'Choose your way to celebrate.',
    hint: 'Scroll to browse',
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
  dishes: {
    eyebrow: 'Our culinary identity',
    heading: 'African soul.',
    headingAccent: 'Contemporary expression.',
    intro:
      'A cuisine that embraces its African roots while placing them in dialogue with today’s techniques, presentations and inspirations.',
    pillars: [
      {
        title: 'Heritage',
        detail:
          'Recipes, ingredients and gestures inspired by Congo, Ghana and culinary traditions from across the continent.',
      },
      {
        title: 'Contemporary',
        detail: 'Modern presentations and an approach designed for event hospitality.',
      },
      {
        title: 'Fusion',
        detail: 'A dialogue between African cuisines and international inspirations.',
      },
    ],
    items: [],
    action: { label: 'Explore the menu collection', route: 'menus' },
  },
  experience: {
    eyebrow: 'Beyond catering',
    heading: 'The Mama Emma Experience',
    intro:
      'Signature dining moments where gastronomy, culture, hospitality, entertainment and meaningful encounters come together around one table.',
    pillars: [
      {
        title: 'Dine',
        detail: 'A table set like a stage: cooking, texture and presentation.',
      },
      {
        title: 'Discover',
        detail: 'African culinary heritage, told dish after dish.',
      },
      {
        title: 'Connect',
        detail: 'Guests brought together by curiosity as much as by taste.',
      },
    ],
    disclaimer: 'A signature Mama Emma concept currently in development.',
    action: { label: 'Join the interest list', route: 'experience' },
    media: {
      slot: 'The Experience — atmosphere',
      caption: 'Experience table, evening atmosphere.',
      image: null,
    },
  },
  process: {
    eyebrow: 'Your event',
    heading: 'Simple for you.',
    headingAccent: 'Precise for us.',
    steps: [
      { title: 'Tell us', detail: 'Date · Occasion · Location · Number of guests' },
      { title: 'Receive', detail: 'Format · Menu · Beverages · Service · Equipment' },
      {
        title: 'Personalise',
        detail: 'We refine the proposal with you until the balance feels right.',
      },
      { title: 'Approve', detail: 'Approval, planning and preparation.' },
      { title: 'Enjoy', detail: 'MESTE handles the execution.' },
    ],
    closing: 'You enjoy the event. We take care of the rest.',
  },
  fresh: {
    eyebrow: 'Mama Emma Fresh',
    heading: 'An experience that continues',
    headingAccent: 'into the glass.',
    intro:
      'A beverage range designed to extend the Mama Emma experience. The range also finds its way into the kitchen: bissap as a vinaigrette or a reduction, ginger as a marinade or a caramel, pineapple as a chutney or a glaze.',
    products: [
      'Pineapple',
      'Hibiscus / Bissap',
      'Ginger',
      'Pineapple & Beetroot',
      'Pineapple & Orange',
      'Pineapple & Watermelon',
    ],
    signature: 'Crafted in Ghana',
    action: { label: 'Discover Mama Emma Fresh', route: 'fresh' },
    media: {
      slot: 'Mama Emma Fresh — range',
      caption: 'Full range, vertical packshot.',
      image: null,
    },
  },
  references: {
    eyebrow: 'References',
    heading: 'Trusted for moments that matter.',
    emptyTitle: 'References available on request',
    emptyBody:
      'We publish a client, a photograph or a testimonial only with their written permission. Our references and previous work are shared on request, together with the real constraints of each reception.',
    quotes: [],
  },
  closing: {
    rule: 'Service traiteur d’excellence · Accra · Ghana',
    wordmark: 'MESTE',
    line: 'The art of hosting, reimagined.',
    body: 'Tell us the date. Tell us the occasion. Tell us how many guests. We’ll take care of the rest.',
    action: { label: 'Plan your event', route: 'quote' },
    secondaryLabel: 'WhatsApp',
  },
}
