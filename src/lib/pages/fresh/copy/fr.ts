import type { FreshContent } from '@/lib/pages/fresh/types'

/**
 * French baseline for Mama Emma Fresh. Product names and the signature stay in
 * English, as they already do in the approved homepage baseline. Like the
 * English version, this text claims no ingredient, size, availability or
 * nutritional property, and never uses the word organic.
 */
export const freshCopyFR: FreshContent = {
  meta: {
    title: 'Mama Emma Fresh',
    description:
      'Une gamme de boissons conçue au Ghana : ananas, hibiscus, gingembre et leurs assemblages, pour prolonger l’expérience Mama Emma.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'Mama Emma Fresh',
    headingLead: 'Une expérience qui se prolonge',
    headingAccent: 'jusque dans le verre.',
    lede: 'Une gamme de six, faite pour s’asseoir à la même table que la cuisine. Crafted in Ghana.',
    media: {
      slot: 'Mama Emma Fresh — gamme complète',
      caption: 'Les photographies officielles des canettes restent à réaliser.',
      image: null,
    },
  },
  range: {
    eyebrow: 'La gamme',
    heading: 'Six saveurs,',
    headingAccent: 'une seule maison.',
    note: 'Les contenances et la disponibilité se confirment au moment de construire votre événement.',
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
    eyebrow: 'Fresh & cuisine',
    heading: 'La gamme inspire',
    headingAccent: 'aussi le menu.',
    intro: 'Les mêmes saveurs peuvent passer du verre à l’assiette.',
    caveat: 'Chaque accord se décide avec vous ; rien ici n’est une recette figée.',
    items: [
      { flavour: 'Bissap', uses: ['réduction', 'vinaigrette', 'gel', 'dessert'] },
      { flavour: 'Ginger', uses: ['marinade', 'laquage', 'caramel'] },
      { flavour: 'Pineapple', uses: ['chutney', 'marinade', 'dessert'] },
    ],
  },
  closing: {
    heading: 'Invitez la gamme à votre table.',
    body: 'Dites-nous l’occasion et nous construirons l’accord avec le menu.',
    action: { label: 'Demander un devis', route: 'quote' },
  },
}
