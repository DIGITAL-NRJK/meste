import type { ServicesContent } from '@/lib/pages/services/types'

/**
 * French baseline for the services index. Faithful translation of the approved
 * English inventories; the four category names stay in English, as they already
 * do in the approved homepage baseline.
 */
export const servicesCopyFR: ServicesContent = {
  meta: {
    title: 'Prestations',
    description:
      'Célébrations, événements d’entreprise, réceptions institutionnelles et diplomatiques, et expériences culinaires sur mesure à Accra.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'Recevoir',
    headingLead: 'Une seule maison,',
    headingAccent: 'plusieurs façons de recevoir.',
    lede: 'Quatre univers, cinq manières de les servir. Quelle que soit l’occasion, c’est la même maison qui prépare, et la même exigence qui porte.',
  },
  worlds: {
    eyebrow: 'Nos univers',
    heading: 'Ce pour quoi',
    headingAccent: 'on nous appelle.',
    items: [
      {
        title: 'Celebrations',
        items: ['Mariage', 'Anniversaire', 'Baptême', 'Réceptions privées'],
      },
      {
        title: 'Corporate',
        items: [
          'Lancements',
          'Déjeuners d’affaires',
          'Cocktails',
          'Conférences',
          'Dîners d’entreprise',
        ],
      },
      {
        title: 'Institutional & Diplomatic',
        items: ['Ambassades', 'Consulats', 'Institutions', 'Réceptions officielles'],
      },
      {
        title: 'Bespoke Experiences',
        items: ['Dîners privés', 'Événements VIP', 'Concepts culinaires sur mesure'],
      },
    ],
  },
  formats: {
    eyebrow: 'Formats de réception',
    heading: 'Choisissez votre façon',
    headingAccent: 'de célébrer.',
    note: 'Chaque format se construit autour de votre lieu, de votre rythme et de vos convives.',
    items: [
      {
        name: 'Cocktail',
        description: 'Élégant, dynamique et convivial.',
        media: {
          slot: 'Format — cocktail',
          caption: 'Réception cocktail, plateau en mouvement.',
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
        name: 'Service à table',
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
  references: {
    eyebrow: 'Références',
    heading: 'Références communiquées sur demande',
    body: 'Nous ne citons un client qu’une fois qu’il nous a dit que nous le pouvions. D’ici là, nous préférons ne rien dire plutôt que dire ce qu’on ne nous a pas accordé.',
  },
  closing: {
    heading: 'Dites-nous ce que vous organisez.',
    body: 'La date, le lieu, le nombre de convives. Nous prenons la suite.',
    action: { label: 'Demander un devis', route: 'quote' },
  },
}
