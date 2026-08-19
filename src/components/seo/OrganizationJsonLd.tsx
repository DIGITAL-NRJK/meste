import { getPublicSiteURL } from '@/lib/env/public'
import type { Locale } from '@/lib/i18n/config'
import { routePath } from '@/lib/routes'
import type { ContactDetails } from '@/lib/site/types'

type OrganizationJsonLdProps = {
  contact: ContactDetails
  description: string
  locale: Locale
}

/**
 * Only verified facts are published as structured data. No ratings, reviews,
 * prices, opening hours, awards or street address are emitted unless MESTE has
 * supplied them through the CMS.
 */
export function OrganizationJsonLd({ contact, description, locale }: OrganizationJsonLdProps) {
  const siteURL = getPublicSiteURL()
  const homeURL = new URL(routePath('home', locale), siteURL).toString()

  const address: Record<string, string> = { addressCountry: 'GH', addressLocality: 'Accra' }

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    additionalType: 'https://schema.org/CateringService',
    address: { '@type': 'PostalAddress', ...address },
    alternateName: 'MESTE',
    areaServed: { '@type': 'City', name: 'Accra' },
    description,
    logo: new URL('/brand/meste-logo-full.png', siteURL).toString(),
    name: 'Mama Emma Service Traiteur d’Excellence',
    slogan: 'Taste · Elegance · Hospitality',
    url: homeURL,
  }

  if (contact.phone) {
    data.telephone = contact.phone
  }

  if (contact.email) {
    data.email = contact.email
  }

  if (contact.social.length > 0) {
    data.sameAs = contact.social.map((entry) => entry.url)
  }

  return (
    <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />
  )
}
