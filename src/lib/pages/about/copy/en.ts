import type { AboutContent } from '@/lib/pages/about/types'

/**
 * English baseline for the story page.
 *
 * Chapter titles are the six chapters named in the brief. Every biographical
 * sentence is the client's source narrative, re-punctuated only where a
 * vertical list becomes an inline clause. The pull quote and the editorial
 * statement are approved verbatim.
 *
 * Framing copy — eyebrow, page headline, lede, chapter intro and closing — is
 * house writing pending client sign-off. It states no fact that the source
 * material does not already state.
 */
export const aboutCopyEN: AboutContent = {
  meta: {
    title: 'Our story',
    description:
      'From Congo to Accra: how a cuisine learned at home became a profession, and how Mama Emma Service Traiteur d’Excellence came to be.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'The house',
    headingLead: 'A cuisine inherited from family,',
    headingAccent: 'a craft shaped by experience.',
    lede: 'Six chapters, one continuous thread — hospitality first learned at a mother’s side, then practised as a profession, and now carried by a family in Accra.',
    media: {
      slot: 'Mama Emma — portrait',
      caption: 'Approved portrait photography of Emma is still to be shot.',
      image: null,
    },
  },
  chapters: {
    eyebrow: 'Chapters',
    heading: 'How this house',
    headingAccent: 'came to be.',
    items: [
      {
        label: 'Congo',
        title: 'Where cooking meant more than food',
        body: [
          'Emma was born as the second child of a large family in Congo. From an early age, her mother involved her in the management of family life, especially in cooking.',
          'She learned that cooking was not only about preparing food. It was about:',
        ],
        list: ['welcoming', 'organising', 'sharing', 'gathering', 'taking care of others'],
        media: null,
      },
      {
        label: 'Maya-Maya',
        title: 'A first profession in hospitality',
        body: [
          'After completing her studies, Emma obtained her first professional experience as a hostess in the VIP service of Maya-Maya International Airport.',
        ],
        list: [],
        media: {
          slot: 'Hospitality — hands and detail',
          caption: 'A close, tactile image of service in progress is still to be shot.',
          image: null,
        },
      },
      {
        label: 'Senegal',
        title: 'From passion to expertise',
        body: [
          'Years later, living in Senegal, married and mother of three children, she decided to turn her passion into professional expertise.',
          'She formally trained in:',
        ],
        list: ['catering', 'cooking', 'pastry'],
        media: null,
      },
      {
        label: 'Professional hospitality',
        title: 'Two institutions, one discipline',
        body: [
          'She obtained her State diploma as a Chef, and later worked in two renowned hospitality institutions: Le Méridien Président and Novotel.',
          'Her experience helped her develop:',
        ],
        list: [
          'hospitality standards',
          'organisation',
          'professional service',
          'culinary discipline',
          'attention to detail',
        ],
        media: null,
      },
      {
        label: 'Ghana',
        title: 'A table, then an ambition',
        body: [
          'Later, after moving to Ghana, she began preparing food for members of the Congolese community. Word of mouth grew.',
          'But a larger ambition emerged: to introduce people to the richness of African culinary traditions while remaining open to flavours, techniques and inspirations from around the world.',
          'This ambition became Mama Emma Service Traiteur d’Excellence — MESTE.',
        ],
        list: [],
        media: {
          slot: 'Accra — fire and smoke',
          caption: 'Kitchen photography in Accra is still to be shot.',
          image: null,
        },
      },
      {
        label: 'MESTE today',
        title: 'A family that keeps going',
        body: ['Today, together with her family, Emma continues to:'],
        list: ['learn', 'create', 'transmit', 'cook', 'welcome', 'design culinary experiences'],
        media: null,
      },
    ],
  },
  pullQuote: {
    text: 'To receive well is to take care.',
    attribution: 'Mama Emma Service Traiteur d’Excellence',
  },
  closing: {
    heading: 'The rest of the story is written around a table.',
    body: 'Tell us the date, the place and the number of guests, and we will shape the rest with you.',
    action: { label: 'Plan your event', route: 'quote' },
  },
}
