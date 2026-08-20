import type { ExperienceContent } from '@/lib/pages/experience/types'

/**
 * French baseline for The Mama Emma Experience. The concept name, the triptych
 * and `Beyond catering` stay in English, as they already do in the approved
 * homepage baseline. Like the English version, this page states no date, no
 * frequency, no price, no capacity and no venue.
 */
export const experienceCopyFR: ExperienceContent = {
  meta: {
    title: 'The Mama Emma Experience',
    description:
      'Des rendez-vous culinaires signature où gastronomie, culture, hospitalité et rencontres se retrouvent autour d’une même table. Un concept en développement.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'Beyond catering',
    headingLead: 'The Mama Emma',
    headingAccent: 'Experience.',
    lede: 'Au-delà du service traiteur, Mama Emma imagine des rendez-vous culinaires signature où gastronomie, culture, hospitalité, divertissement et rencontres se réunissent autour d’une même table.',
    media: {
      slot: 'The Experience — ambiance',
      caption: 'Les photographies de l’Experience existeront quand la première édition existera.',
      image: null,
    },
  },
  pillars: {
    heading: 'Dine · Discover · Connect',
    items: [
      {
        title: 'Dine',
        detail: 'Une table dressée comme une scène : cuissons, textures, dressage.',
      },
      { title: 'Discover', detail: 'Un héritage culinaire africain raconté plat après plat.' },
      { title: 'Connect', detail: 'Des convives réunis par la curiosité autant que par le goût.' },
    ],
  },
  universe: {
    eyebrow: 'Chaque édition',
    heading: 'Un univers différent,',
    headingAccent: 'à chaque fois.',
    intro: 'Chaque expérience explorera un univers différent :',
    items: [
      'une histoire',
      'un menu composé',
      'une atmosphère',
      'un divertissement',
      'des moments faits pour être partagés',
    ],
  },
  disclaimer: 'Un concept signature Mama Emma actuellement en développement.',
  closing: {
    heading: 'Envie d’être à la première table ?',
    body: 'La liste d’intérêt n’est pas encore ouverte. En attendant, un appel ou un message nous parvient tout aussi bien.',
    action: { label: 'Nous contacter', route: 'contact' },
  },
}
