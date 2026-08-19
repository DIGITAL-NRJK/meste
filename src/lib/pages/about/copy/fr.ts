import type { AboutContent } from '@/lib/pages/about/types'

/**
 * French baseline for the story page.
 *
 * The source material exists only in English. This is a faithful translation of
 * it, not a second draft: no fact, date, place or institution is added,
 * removed or softened. It stays a translation pending human review, which is
 * the condition the content checklist sets before a French locale is marked
 * ready in Payload.
 */
export const aboutCopyFR: AboutContent = {
  meta: {
    title: 'Notre histoire',
    description:
      'Du Congo à Accra : comment une cuisine apprise à la maison est devenue un métier, et comment est né Mama Emma Service Traiteur d’Excellence.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'La maison',
    headingLead: 'Une cuisine héritée de la famille,',
    headingAccent: 'un métier façonné par l’expérience.',
    lede: 'Six chapitres, un même fil — l’hospitalité d’abord apprise auprès d’une mère, puis exercée comme un métier, et aujourd’hui portée par une famille à Accra.',
    media: {
      slot: 'Mama Emma — portrait',
      caption: 'La photographie officielle d’Emma reste à réaliser.',
      image: null,
    },
  },
  chapters: {
    eyebrow: 'Chapitres',
    heading: 'Comment cette maison',
    headingAccent: 'est née.',
    items: [
      {
        label: 'Congo',
        title: 'Là où cuisiner dépassait le repas',
        body: [
          'Emma est née deuxième enfant d’une famille nombreuse, au Congo. Très tôt, sa mère l’associe à la conduite de la vie familiale, et tout particulièrement à la cuisine.',
          'Elle y apprend que cuisiner ne se résume pas à préparer un repas. C’est :',
        ],
        list: ['accueillir', 'organiser', 'partager', 'rassembler', 'prendre soin des autres'],
        media: null,
      },
      {
        label: 'Maya-Maya',
        title: 'Un premier métier dans l’accueil',
        body: [
          'Ses études terminées, Emma fait sa première expérience professionnelle comme hôtesse au service VIP de l’aéroport international de Maya-Maya.',
        ],
        list: [],
        media: {
          slot: 'Hospitalité — mains et détail',
          caption: 'Une image rapprochée du service en cours reste à réaliser.',
          image: null,
        },
      },
      {
        label: 'Sénégal',
        title: 'De la passion à l’expertise',
        body: [
          'Des années plus tard, installée au Sénégal, mariée et mère de trois enfants, elle décide de faire de sa passion une expertise professionnelle.',
          'Elle se forme officiellement en :',
        ],
        list: ['traiteur', 'cuisine', 'pâtisserie'],
        media: null,
      },
      {
        label: 'Hôtellerie',
        title: 'Deux maisons, une même discipline',
        body: [
          'Elle obtient son diplôme d’État de cheffe, puis travaille dans deux institutions hôtelières reconnues : Le Méridien Président et le Novotel.',
          'Cette expérience lui permet de développer :',
        ],
        list: [
          'des standards d’accueil',
          'le sens de l’organisation',
          'un service professionnel',
          'une discipline culinaire',
          'le souci du détail',
        ],
        media: null,
      },
      {
        label: 'Ghana',
        title: 'Une table, puis une ambition',
        body: [
          'Plus tard, après son installation au Ghana, elle commence à cuisiner pour les membres de la communauté congolaise. Le bouche-à-oreille fait le reste.',
          'Mais une ambition plus large se dessine : faire découvrir la richesse des traditions culinaires africaines, tout en restant ouverte aux saveurs, aux techniques et aux inspirations venues du monde entier.',
          'Cette ambition est devenue Mama Emma Service Traiteur d’Excellence — MESTE.',
        ],
        list: [],
        media: {
          slot: 'Accra — feu et fumée',
          caption: 'Les photographies de cuisine à Accra restent à réaliser.',
          image: null,
        },
      },
      {
        label: 'MESTE aujourd’hui',
        title: 'Une famille qui continue',
        body: ['Aujourd’hui, avec sa famille, Emma continue à :'],
        list: [
          'apprendre',
          'créer',
          'transmettre',
          'cuisiner',
          'accueillir',
          'concevoir des expériences culinaires',
        ],
        media: null,
      },
    ],
  },
  pullQuote: {
    text: 'Bien recevoir, c’est prendre soin.',
    attribution: 'Mama Emma Service Traiteur d’Excellence',
  },
  closing: {
    heading: 'La suite de l’histoire s’écrit autour d’une table.',
    body: 'Dites-nous la date, le lieu et le nombre de convives, et nous construirons le reste avec vous.',
    action: { label: 'Demander un devis', route: 'quote' },
  },
}
