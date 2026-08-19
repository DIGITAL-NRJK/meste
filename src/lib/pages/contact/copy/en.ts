import type { ContactContent } from '@/lib/pages/contact/types'

/**
 * English baseline for the contact page. Framing copy is house writing pending
 * client sign-off; it promises no response time, no opening hours and no
 * service area, because none of those are verified.
 */
export const contactCopyEN: ContactContent = {
  meta: {
    title: 'Contact',
    description:
      'Reach Mama Emma Service Traiteur d’Excellence in Accra to discuss an event, a reception or a bespoke culinary experience.',
  },
  skipToContent: 'Skip to content',
  intro: {
    eyebrow: 'Contact',
    headingLead: 'Every event begins',
    headingAccent: 'with a conversation.',
    lede: 'Tell us the date, the place and the number of guests. We listen first, then we propose.',
  },
  channels: {
    eyebrow: 'How to reach us',
    heading: 'Direct lines',
    phoneLabel: 'Telephone',
    whatsAppLabel: 'WhatsApp',
    emailLabel: 'Email',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    serviceAreaLabel: 'Where we operate',
    socialLabel: 'Follow the house',
  },
  closing: {
    heading: 'Prefer to give us the details in writing?',
    body: 'Send us the outline of your event and we will come back to you with a proposal.',
    action: { label: 'Request a quote', route: 'quote' },
  },
}
