import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { isRecord, readArray, readPath, readString } from '@/lib/payload/records'
import { type RouteKey, resolveRoute } from '@/lib/routes'
import { buildWhatsAppHref, getChromeBaseline } from '@/lib/site/chrome'
import type { ContactLine, FooterColumn, NavItem, SiteChrome } from '@/lib/site/types'

function readNavItems(value: unknown, fallbackRoute: RouteKey): NavItem[] {
  return readArray(value).flatMap((entry) => {
    if (!isRecord(entry)) {
      return []
    }

    const label = readString(entry.label)
    return label ? [{ label, route: resolveRoute(entry.route, fallbackRoute) }] : []
  })
}

function readContactLines(value: unknown): ContactLine[] {
  return readArray(value).flatMap((entry) => {
    if (!isRecord(entry)) {
      return []
    }

    const label = readString(entry.label)
    const lineValue = readString(entry.value)
    return label && lineValue ? [{ label, value: lineValue }] : []
  })
}

async function queryChrome(locale: Locale): Promise<SiteChrome> {
  const baseline = getChromeBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const globalOptions = {
      depth: 1,
      draft: false,
      fallbackLocale: false as const,
      locale,
      overrideAccess: false,
    }

    const [header, footer, site, contact] = await Promise.all([
      payload.findGlobal({ ...globalOptions, slug: 'header' }),
      payload.findGlobal({ ...globalOptions, slug: 'footer' }),
      payload.findGlobal({ ...globalOptions, slug: 'site-settings' }),
      payload.findGlobal({ ...globalOptions, slug: 'contact-settings' }),
    ])

    const nav = readNavItems(header.navigation, 'about')
    const primaryLabel = readString(readPath(header, 'primaryAction', 'label'))

    const columns: FooterColumn[] = (() => {
      const links = readNavItems(footer.links, 'about')
      if (links.length === 0) {
        return baseline.footer.columns
      }

      return [{ items: links, title: baseline.footer.columns[0]?.title ?? '' }]
    })()

    const address = [
      readString(readPath(contact, 'address', 'street')),
      readString(readPath(contact, 'address', 'locality')),
      readString(readPath(contact, 'address', 'region')),
      readString(readPath(contact, 'address', 'postalCode')),
      readString(readPath(contact, 'address', 'country')),
    ].filter((line): line is string => Boolean(line))

    const social = readArray(contact.socialLinks).flatMap((entry) => {
      if (!isRecord(entry)) {
        return []
      }

      const platform = readString(entry.platform)
      const url = readString(entry.url)
      return platform && url ? [{ platform, url }] : []
    })

    return {
      brand: {
        descriptor: baseline.brand.descriptor,
        name: baseline.brand.name,
        signature: readString(site.institutionalSignature) ?? baseline.brand.signature,
      },
      contact: {
        addressLines: address,
        email: readString(contact.publicEmail),
        hours: readContactLines(contact.hours),
        phone: readString(contact.phone) ?? baseline.contact.phone,
        serviceArea: readString(contact.serviceArea),
        social,
        whatsAppHref: buildWhatsAppHref(contact.whatsAppNumber, contact.whatsAppMessage),
      },
      footer: {
        columns,
        contactTitle: baseline.footer.contactTitle,
        copyright: readString(footer.copyrightLine) ?? baseline.footer.copyright,
        legalLinks: readArray(footer.legalLinks).flatMap((entry) => {
          if (!isRecord(entry)) {
            return []
          }

          const label = readString(entry.label)
          const path = readString(entry.path)
          return label && path ? [{ label, path }] : []
        }),
        statement: readString(footer.statement) ?? baseline.footer.statement,
      },
      localeLabel: readString(header.languageLabel) ?? baseline.localeLabel,
      nav: nav.length > 0 ? nav : baseline.nav,
      primaryAction: primaryLabel
        ? { label: primaryLabel, route: resolveRoute(readPath(header, 'primaryAction', 'route')) }
        : baseline.primaryAction,
    }
  } catch (error) {
    console.error('[chrome] falling back to the baseline navigation', error)
    return baseline
  }
}

export function getSiteChrome(locale: Locale): Promise<SiteChrome> {
  return unstable_cache(() => queryChrome(locale), ['site-chrome', locale], {
    tags: ['global:header', 'global:footer', 'global:site-settings', 'global:contact-settings'],
  })()
}
