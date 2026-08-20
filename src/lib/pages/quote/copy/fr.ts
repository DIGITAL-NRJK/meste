import type { QuoteContent } from '@/lib/pages/quote/types'

/**
 * French copy for the quote request. Like the English version, it commits to no
 * delay, no price and no availability, and says plainly that no confirmation
 * email leaves yet.
 */
export const quoteCopyFR: QuoteContent = {
  meta: {
    title: 'Demander un devis',
    description:
      'Parlez-nous de votre événement et nous reviendrons vers vous avec une proposition — célébrations, réceptions d’entreprise, événements institutionnels et expériences sur mesure à Accra.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'Demander un devis',
    headingLead: 'Dites-nous ce que',
    headingAccent: 'vous organisez.',
    lede: 'L’essentiel prend une minute. Tout ce qui suit est facultatif — plus vous nous en direz, plus la première proposition sera juste.',
  },
  aside: {
    heading: 'Vous préférez en parler ?',
    body: 'Appelez-nous et nous prendrons les détails ensemble.',
  },
  form: {
    essentialsHeading: 'L’essentiel',
    detailsHeading: 'Ce que vous voulez ajouter',
    detailsHint:
      'Tout est facultatif. Ouvrez cette partie si vous avez déjà des préférences en tête.',
    requiredHint: 'Obligatoire',
    optionalSuffix: 'facultatif',
    submitLabel: 'Concevoir mon expérience',
    submittingLabel: 'Envoi…',
    labels: {
      allergens: 'Allergies',
      budget: 'Budget envisagé',
      company: 'Société ou organisation',
      consent: 'J’accepte',
      dietaryRequirements: 'Régimes particuliers',
      email: 'Courriel',
      eventDate: 'Date de l’événement',
      eventType: 'Type d’événement',
      guestCount: 'Nombre de convives',
      location: 'Lieu',
      menuPreferences: 'Préférences de menu',
      name: 'Nom complet',
      notes: 'Précisions',
      phone: 'Téléphone ou WhatsApp',
      receptionFormat: 'Format de réception',
      services: 'Vous nous sollicitez pour',
    },
    hints: {
      allergens: 'Chaque allergie sera confirmée avec vous avant que le menu soit arrêté.',
      budget: 'Une fourchette suffit, et elle reste entre nous.',
      eventDate: 'Une date approximative convient.',
      guestCount: 'Une estimation convient.',
      phone: 'Le moyen le plus rapide de vous joindre.',
    },
  },
  errors: {
    summaryHeading: 'Votre demande n’a pas pu être envoyée',
    codes: {
      consent: 'Merci d’accepter avant d’envoyer votre demande.',
      date: 'Merci d’indiquer une date valide.',
      email: 'Merci de vérifier cette adresse.',
      max: 'Ce nombre semble trop élevé — dites-le-nous plutôt dans les précisions.',
      min: 'Merci d’indiquer au moins un convive.',
      number: 'Merci d’indiquer un nombre.',
      required: 'Ce champ est obligatoire.',
      stale:
        'Cette page est restée ouverte un long moment. Rechargez-la et renvoyez votre demande.',
      throttled:
        'Plusieurs demandes viennent d’arriver depuis cette connexion. Merci de réessayer dans une minute.',
      tooLong: 'C’est plus long que ce que nous pouvons enregistrer — merci de raccourcir.',
      unavailable: 'Un problème est survenu de notre côté. Réessayez, ou appelez-nous.',
      unknown: 'Un problème est survenu. Réessayez, ou appelez-nous.',
    },
  },
  success: {
    heading: 'Votre demande nous est bien parvenue.',
    body: 'Nous avons de quoi commencer. Nous reviendrons vers vous avec une proposition construite autour de votre date, de votre lieu et de vos convives.',
    note: 'Aucun courriel de confirmation n’est envoyé pour l’instant — nous vous joindrons avec les coordonnées que vous avez laissées.',
  },
}
