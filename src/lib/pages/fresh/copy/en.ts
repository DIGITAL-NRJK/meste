import type { FreshContent } from '@/lib/pages/fresh/types'

/**
 * English baseline for Mama Emma Fresh.
 *
 * The brand, the signature `Crafted in Ghana.` and the six products are the
 * approved material, verbatim. Deliberately absent, because none of it is
 * verified: ingredients, sizes, availability, nutrition claims, and any use of
 * the word organic — which the brief forbids outright.
 *
 * The culinary section is written as possibility, never as fact, for the same
 * reason.
 */
export const freshCopyEN: FreshContent = {
  meta: {
    title: 'Mama Emma Fresh',
    description:
      'A beverage range crafted in Ghana: pineapple, hibiscus, ginger and their blends, made to extend the Mama Emma experience.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'Mama Emma Fresh',
    headingLead: 'An experience that continues',
    headingAccent: 'into the glass.',
    lede: 'A range of six, made to sit at the same table as the food. Crafted in Ghana.',
    media: {
      slot: 'Mama Emma Fresh — full range',
      caption: 'Official can photography of the range is still to be shot.',
      image: null,
    },
  },
  range: {
    eyebrow: 'The range',
    heading: 'Six flavours,',
    headingAccent: 'one house.',
    note: 'Sizes and availability are confirmed when we build your event.',
    signature: 'Crafted in Ghana.',
    products: [
      'Pineapple',
      'Hibiscus / Bissap',
      'Ginger',
      'Pineapple & Beetroot',
      'Pineapple & Orange',
      'Pineapple & Watermelon',
    ],
  },
  culinary: {
    eyebrow: 'Fresh & kitchen',
    heading: 'The range also',
    headingAccent: 'inspires the menu.',
    intro: 'The same flavours can travel from the glass to the plate.',
    caveat: 'Every pairing is decided with you; nothing here is a fixed recipe.',
    items: [
      { flavour: 'Bissap', uses: ['reduction', 'vinaigrette', 'gel', 'dessert'] },
      { flavour: 'Ginger', uses: ['marinade', 'glaze', 'caramel'] },
      { flavour: 'Pineapple', uses: ['chutney', 'marinade', 'dessert'] },
    ],
  },
  closing: {
    heading: 'Bring the range to your table.',
    body: 'Tell us the occasion and we will build the pairing with the menu.',
    action: { label: 'Plan your event', route: 'quote' },
  },
}
