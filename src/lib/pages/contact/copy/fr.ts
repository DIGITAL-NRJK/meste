import type { ContactContent } from '@/lib/pages/contact/types'

/**
 * French baseline for the contact page. Faithful translation of the English
 * framing copy; like it, it commits to no delay, no schedule and no coverage
 * area, since none of those are verified.
 */
export const contactCopyFR: ContactContent = {
  meta: {
    title: 'Contact',
    description:
      'Contactez Mama Emma Service Traiteur d’Excellence à Accra pour un événement, une réception ou une expérience culinaire sur mesure.',
  },
  skipToContent: 'Aller au contenu',
  intro: {
    eyebrow: 'Contact',
    headingLead: 'Chaque événement commence',
    headingAccent: 'par une conversation.',
    lede: 'Dites-nous la date, le lieu et le nombre de convives. Nous écoutons d’abord, nous proposons ensuite.',
  },
  channels: {
    eyebrow: 'Nous joindre',
    heading: 'En direct',
    phoneLabel: 'Téléphone',
    whatsAppLabel: 'WhatsApp',
    emailLabel: 'Courriel',
    addressLabel: 'Adresse',
    hoursLabel: 'Horaires',
    serviceAreaLabel: 'Où nous intervenons',
    socialLabel: 'Suivre la maison',
  },
  closing: {
    heading: 'Vous préférez nous écrire les détails ?',
    body: 'Envoyez-nous les grandes lignes de votre événement et nous revenons vers vous avec une proposition.',
    action: { label: 'Demander un devis', route: 'quote' },
  },
}
