import type { HomeContent } from '@/lib/home/types'

/**
 * French homepage copy. Every line is taken from the approved MESTE 2026
 * presentation or the validated homepage mockup. Nothing here is invented:
 * no prices, no addresses, no client names, no counts.
 */
export const homeCopyFR: HomeContent = {
  skipToContent: 'Aller au contenu principal',
  meta: {
    title: "L'art de recevoir, autrement",
    description:
      "Service traiteur d'excellence à Accra : célébrations, corporate, réceptions institutionnelles et expériences sur mesure. Racines africaines, exécution contemporaine.",
  },
  hero: {
    metaLeft: 'Accra · Ghana',
    metaRight: 'Depuis le Congo',
    headingLead: "L'art de recevoir,",
    headingAccent: 'autrement.',
    body: "Recevoir ne consiste pas simplement à servir un repas. C'est créer un moment : un moment où les saveurs racontent une histoire, où la présentation attire le regard avant même la première bouchée, et où chaque détail fait sentir aux invités qu'ils sont attendus.",
    action: { label: 'Demander un devis', route: 'quote' },
    secondaryAction: { label: 'Découvrir nos univers', route: 'services' },
    note: {
      label: '01 — Taste',
      text: 'Une cuisine généreuse, sincère et travaillée, où la saveur reste toujours la priorité.',
    },
    media: {
      slot: 'Hero — dressage signature',
      caption: "Photographie verticale d'un dressage signature, 4:5.",
      image: null,
    },
  },
  signatureBand: ['Taste', 'Elegance', 'Hospitality'],
  promise: {
    eyebrow: 'Notre promesse',
    heading: 'Votre événement mérite plus qu’un repas.',
    pillars: [
      {
        title: 'Le goût',
        label: 'Taste',
        body: 'Une cuisine généreuse, sincère et travaillée, où la saveur reste toujours la priorité.',
      },
      {
        title: 'L’élégance',
        label: 'Elegance',
        body: "Du dressage d'une assiette à la scénographie d'un buffet, l'esthétique fait partie de l'expérience.",
      },
      {
        title: 'L’hospitalité',
        label: 'Hospitality',
        body: "Accueillir, servir et prendre soin : l'ADN de Mama Emma depuis le premier jour.",
      },
      {
        title: 'L’exigence',
        label: 'Excellence',
        body: 'De la préparation au dernier invité servi, chaque détail compte.',
      },
    ],
  },
  manifesto: {
    eyebrow: 'Notre manifeste',
    heading: 'Il n’est pas nécessaire de choisir entre authenticité et',
    headingAccent: 'sophistication.',
    paragraphs: [
      'Notre métier commence bien avant que le premier plat ne soit servi. Nous écoutons. Nous imaginons. Nous préparons. Nous dressons. Nous servons.',
      "Notre cuisine trouve ses racines en Afrique — du Congo au Ghana, en passant par différentes traditions culinaires du continent — mais elle ne s'y limite pas. Elle dialogue avec les cuisines du monde, les techniques contemporaines et les inspirations accumulées au fil des voyages, des rencontres et des expériences.",
      'Des racines africaines. Une ouverture sur le monde. Une exigence de chaque instant. MESTE est précisément né de cette rencontre.',
    ],
    reasons: {
      eyebrow: 'Pourquoi MESTE',
      items: [
        'Une identité culinaire africaine assumée',
        'Des expériences sur mesure',
        'Un interlocuteur unique',
        'Une exécution professionnelle',
        'Un écosystème food & beverage',
        'Un ancrage local, ouvert sur le monde',
      ],
    },
  },
  worlds: {
    eyebrow: 'Nos univers',
    heading: 'Une maison. Plusieurs façons de recevoir.',
    items: [
      {
        title: 'Celebrations',
        detail: 'Mariages · Anniversaires · Baptêmes · Réceptions privées',
        route: 'services',
      },
      {
        title: 'Corporate',
        detail: 'Cocktails · Déjeuners · Dîners · Lancements · Séminaires',
        route: 'services',
      },
      {
        title: 'Institutional & Diplomatic',
        detail: 'Ambassades · Consulats · Institutions · Réceptions officielles',
        route: 'services',
      },
      {
        title: 'Bespoke Experiences',
        detail: 'Dîners privés · VIP · Expériences conçues entièrement sur mesure',
        route: 'services',
      },
    ],
  },
  formats: {
    eyebrow: 'Formats de réception',
    heading: 'Choisissez votre manière de célébrer.',
    hint: 'Faites défiler pour parcourir',
    items: [
      {
        name: 'Cocktail',
        description: 'Élégant, dynamique et convivial.',
        media: {
          slot: 'Format — cocktail',
          caption: 'Cocktail dînatoire, plateau en mouvement.',
          image: null,
        },
      },
      {
        name: 'Buffet',
        description: 'Généreux, visuel et adaptable.',
        media: {
          slot: 'Format — buffet',
          caption: 'Buffet dressé, vue large.',
          image: null,
        },
      },
      {
        name: 'Table service',
        description: 'Formel, rythmé et sophistiqué.',
        media: {
          slot: 'Format — service à table',
          caption: 'Service à l’assiette, salle dressée.',
          image: null,
        },
      },
      {
        name: 'Brunch',
        description: 'Lumineux, généreux et décontracté.',
        media: {
          slot: 'Format — brunch',
          caption: 'Table de brunch en lumière naturelle.',
          image: null,
        },
      },
      {
        name: 'Bespoke',
        description: 'Une expérience entièrement conçue autour de vous.',
        media: null,
      },
    ],
  },
  dishes: {
    eyebrow: 'Notre identité culinaire',
    heading: 'African soul.',
    headingAccent: 'Contemporary expression.',
    intro:
      "Une cuisine qui assume ses racines africaines et les fait dialoguer avec les techniques, les présentations et les inspirations d'aujourd'hui.",
    pillars: [
      {
        title: 'Heritage',
        detail:
          'Recettes, produits et gestes inspirés du Congo, du Ghana et de différentes traditions du continent.',
      },
      {
        title: 'Contemporary',
        detail: "Des présentations modernes et une approche pensée pour l'événementiel.",
      },
      {
        title: 'Fusion',
        detail: 'Un dialogue entre cuisines africaines et inspirations internationales.',
      },
    ],
    items: [],
    action: { label: 'Explorer la collection de menus', route: 'menus' },
  },
  experience: {
    eyebrow: 'Beyond catering',
    heading: 'The Mama Emma Experience',
    intro:
      "Des rendez-vous culinaires signature où gastronomie, culture, hospitalité, divertissement et rencontres se réunissent autour d'une même table.",
    pillars: [
      {
        title: 'Dine',
        detail: 'Une table dressée comme une scène : cuissons, textures, dressage.',
      },
      {
        title: 'Discover',
        detail: 'Un héritage culinaire africain raconté plat après plat.',
      },
      {
        title: 'Connect',
        detail: 'Des convives réunis par la curiosité autant que par le goût.',
      },
    ],
    disclaimer: 'Un concept signature Mama Emma actuellement en développement.',
    action: { label: 'Être informé', route: 'experience' },
    media: {
      slot: 'The Experience — ambiance',
      caption: "Table d'expérience, atmosphère de soirée.",
      image: null,
    },
  },
  process: {
    eyebrow: 'Votre événement',
    heading: 'Simple pour vous.',
    headingAccent: 'Précis pour nous.',
    steps: [
      { title: 'Tell us', detail: "Date · Occasion · Lieu · Nombre d'invités" },
      { title: 'Receive', detail: 'Format · Menu · Boissons · Service · Matériel' },
      {
        title: 'Personalise',
        detail: "Nous affinons la proposition avec vous jusqu'à l'équilibre juste.",
      },
      { title: 'Approve', detail: 'Validation, planification et préparation.' },
      { title: 'Enjoy', detail: "MESTE prend en charge l'exécution." },
    ],
    closing: "Vous profitez de l'événement. Nous prenons soin du reste.",
  },
  fresh: {
    eyebrow: 'Mama Emma Fresh',
    heading: 'Une expérience qui se prolonge',
    headingAccent: 'jusque dans le verre.',
    intro:
      'Une gamme de boissons conçue pour prolonger l’expérience Mama Emma. La gamme entre aussi en cuisine : bissap en vinaigrette ou en réduction, ginger en marinade et caramel, pineapple en chutney ou en laquage.',
    products: [
      'Pineapple',
      'Hibiscus / Bissap',
      'Ginger',
      'Pineapple & Beetroot',
      'Pineapple & Orange',
      'Pineapple & Watermelon',
    ],
    signature: 'Crafted in Ghana',
    action: { label: 'Découvrir Mama Emma Fresh', route: 'fresh' },
    media: {
      slot: 'Mama Emma Fresh — gamme',
      caption: 'Gamme complète, packshot vertical.',
      image: null,
    },
  },
  references: {
    eyebrow: 'Références',
    heading: 'Ils nous ont confié leur table.',
    emptyTitle: 'Références disponibles sur demande',
    emptyBody:
      "Nous ne publions un client, une photographie ou un témoignage qu'avec son accord écrit. Nos références et réalisations vous sont communiquées sur demande, avec le détail des contraintes réelles de chaque réception.",
    quotes: [],
  },
  closing: {
    rule: "Service traiteur d'excellence · Accra · Ghana",
    wordmark: 'MESTE',
    line: "L'art de recevoir, autrement.",
    body: "Parlez-nous de la date. Parlez-nous de l'occasion. Dites-nous combien vous serez. Nous nous occupons du reste.",
    action: { label: 'Demander un devis', route: 'quote' },
    secondaryLabel: 'WhatsApp',
  },
}
