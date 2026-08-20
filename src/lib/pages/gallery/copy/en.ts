import type { GalleryContent } from '@/lib/pages/gallery/types'

/**
 * English baseline for the gallery.
 *
 * `items` is empty and stays empty until approved photography is uploaded — no
 * stock image, no generated image, no placeholder pretending to be a photo. The
 * branded empty state below is therefore the page's launch state, and it is the
 * part worth reading carefully.
 */
export const galleryCopyEN: GalleryContent = {
  meta: {
    title: 'Gallery',
    description:
      'Photography from the tables, buffets and receptions of Mama Emma Service Traiteur d’Excellence in Accra.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'Gallery',
    headingLead: 'What a table looks like',
    headingAccent: 'when we leave it.',
    lede: 'Buffets, plated service, cocktails and celebrations — photographed as they were served, not staged after the fact.',
  },
  filters: {
    allLabel: 'All',
    groupLabel: 'Filter by category',
  },
  categoryLabels: {
    food: 'Food',
    cocktail: 'Cocktails',
    buffet: 'Buffets',
    'table-service': 'Table service',
    'mama-emma-fresh': 'Mama Emma Fresh',
    events: 'Events',
    team: 'The team',
    brand: 'The house',
    experience: 'The Experience',
    'behind-the-scenes': 'Behind the scenes',
    corporate: 'Corporate',
    institutional: 'Institutional',
    celebrations: 'Celebrations',
  },
  items: [],
  empty: {
    heading: 'The photography is being shot.',
    body: 'We would rather show you nothing than show you someone else’s work. Every image here will be a MESTE table, photographed as it was served — and this page fills as soon as the first shoot is approved.',
  },
  lightbox: {
    dialogLabel: 'Gallery image',
    closeLabel: 'Close',
    nextLabel: 'Next image',
    previousLabel: 'Previous image',
  },
  closing: {
    heading: 'Your table could be the next one here.',
    body: 'Tell us the date, the place and the number of guests.',
    action: { label: 'Plan your event', route: 'quote' },
  },
}
