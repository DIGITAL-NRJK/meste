import type { ExperienceContent } from '@/lib/pages/experience/types'

/**
 * English baseline for The Mama Emma Experience.
 *
 * The concept copy, the triptych and the disclaimer are the approved material,
 * verbatim. The page deliberately shows the concept and nothing else: the brief
 * states the event concept is not officially launched and forbids inventing
 * dates, frequency, prices, capacity or venues. None appears here, and a unit
 * test keeps it that way.
 *
 * The interest list itself belongs to Phase 6, so the page closes by pointing
 * to a channel that actually works today rather than to a form that does not.
 */
export const experienceCopyEN: ExperienceContent = {
  meta: {
    title: 'The Mama Emma Experience',
    description:
      'Signature culinary gatherings where food, culture, hospitality and encounters meet around one table. A concept currently in development.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'Beyond catering',
    headingLead: 'The Mama Emma',
    headingAccent: 'Experience.',
    lede: 'Beyond catering, Mama Emma is imagining signature culinary gatherings where food, culture, hospitality, entertainment and meaningful encounters come together around one table.',
    media: {
      slot: 'The Experience — atmosphere',
      caption: 'Photography of the Experience will exist once the first edition does.',
      image: null,
    },
  },
  pillars: {
    heading: 'Dine · Discover · Connect',
    items: [
      { title: 'Dine', detail: 'A table set like a stage: cooking, texture and presentation.' },
      { title: 'Discover', detail: 'African culinary heritage, told dish after dish.' },
      { title: 'Connect', detail: 'Guests brought together by curiosity as much as by taste.' },
    ],
  },
  universe: {
    eyebrow: 'Each edition',
    heading: 'A different universe,',
    headingAccent: 'every time.',
    intro: 'Each experience will explore a different universe:',
    items: [
      'a story',
      'a curated menu',
      'an atmosphere',
      'entertainment',
      'moments designed to be shared',
    ],
  },
  disclaimer: 'A signature Mama Emma concept currently in development.',
  closing: {
    heading: 'Want to be at the first table?',
    body: 'The interest list is not open yet. Until it is, a call or a message reaches us just as well.',
    action: { label: 'Contact us', route: 'contact' },
  },
}
