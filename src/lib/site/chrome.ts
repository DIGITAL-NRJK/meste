import type { Locale } from '@/lib/i18n/config'
import type { SiteChrome } from '@/lib/site/types'

/**
 * Chrome baseline used until Header, Footer and ContactSettings are marked
 * ready in Payload. The phone number is the one published in the approved 2026
 * presentation. Every other contact value stays empty until MESTE confirms it:
 * no address, no email, no opening hours, no social handles are invented.
 */
const chrome: Record<Locale, SiteChrome> = {
  en: {
    brand: {
      name: 'Mama Emma',
      descriptor: 'Service traiteur d’excellence',
      signature: 'Taste · Elegance · Hospitality',
    },
    localeLabel: 'Language',
    nav: [
      { label: 'Our story', route: 'about' },
      { label: 'Services', route: 'services' },
      { label: 'Menus', route: 'menus' },
      { label: 'Mama Emma Fresh', route: 'fresh' },
      { label: 'Gallery', route: 'gallery' },
      { label: 'The Experience', route: 'experience' },
      { label: 'Contact', route: 'contact' },
    ],
    primaryAction: { label: 'Plan your event', route: 'quote' },
    footer: {
      statement: 'A cuisine inherited from family. Hospitality turned into a profession.',
      columns: [
        {
          title: 'The house',
          items: [
            { label: 'Our story', route: 'about' },
            { label: 'The Mama Emma Experience', route: 'experience' },
            { label: 'Mama Emma Fresh', route: 'fresh' },
            { label: 'Gallery', route: 'gallery' },
          ],
        },
        {
          title: 'Hosting',
          items: [
            { label: 'Services', route: 'services' },
            { label: 'Menu collection', route: 'menus' },
            { label: 'Request a quote', route: 'quote' },
            { label: 'Contact', route: 'contact' },
          ],
        },
      ],
      contactTitle: 'Contact',
      legalLinks: [],
      copyright: 'Mama Emma Service Traiteur d’Excellence — Accra · Ghana',
    },
    contact: {
      addressLines: [],
      email: null,
      hours: [],
      phone: '0537464516',
      serviceArea: null,
      social: [],
      whatsAppHref: null,
    },
  },
  fr: {
    brand: {
      name: 'Mama Emma',
      descriptor: 'Service traiteur d’excellence',
      signature: 'Taste · Elegance · Hospitality',
    },
    localeLabel: 'Langue',
    nav: [
      { label: 'Notre histoire', route: 'about' },
      { label: 'Prestations', route: 'services' },
      { label: 'Menus', route: 'menus' },
      { label: 'Mama Emma Fresh', route: 'fresh' },
      { label: 'Galerie', route: 'gallery' },
      { label: 'The Experience', route: 'experience' },
      { label: 'Contact', route: 'contact' },
    ],
    primaryAction: { label: 'Demander un devis', route: 'quote' },
    footer: {
      statement: 'Une cuisine héritée de la famille. L’hospitalité devenue un métier.',
      columns: [
        {
          title: 'La maison',
          items: [
            { label: 'Notre histoire', route: 'about' },
            { label: 'The Mama Emma Experience', route: 'experience' },
            { label: 'Mama Emma Fresh', route: 'fresh' },
            { label: 'Galerie', route: 'gallery' },
          ],
        },
        {
          title: 'Recevoir',
          items: [
            { label: 'Prestations', route: 'services' },
            { label: 'Collection de menus', route: 'menus' },
            { label: 'Demander un devis', route: 'quote' },
            { label: 'Contact', route: 'contact' },
          ],
        },
      ],
      contactTitle: 'Contact',
      legalLinks: [],
      copyright: 'Mama Emma Service Traiteur d’Excellence — Accra · Ghana',
    },
    contact: {
      addressLines: [],
      email: null,
      hours: [],
      phone: '0537464516',
      serviceArea: null,
      social: [],
      whatsAppHref: null,
    },
  },
}

export function getChromeBaseline(locale: Locale): SiteChrome {
  return chrome[locale]
}

/**
 * WhatsApp links are only produced from an explicitly configured international
 * number. The known local number is never silently converted, because guessing
 * a country prefix would publish an unverified contact route.
 */
export function buildWhatsAppHref(rawNumber: unknown, message?: unknown): string | null {
  if (typeof rawNumber !== 'string') {
    return null
  }

  const digits = rawNumber.replace(/[^\d]/g, '')

  if (!rawNumber.trim().startsWith('+') || digits.length < 8) {
    return null
  }

  const url = new URL(`https://wa.me/${digits}`)

  if (typeof message === 'string' && message.trim()) {
    url.searchParams.set('text', message.trim())
  }

  return url.toString()
}
