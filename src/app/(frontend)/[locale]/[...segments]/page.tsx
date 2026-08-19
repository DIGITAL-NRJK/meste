import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { AboutComposition } from '@/components/about/AboutComposition'
import { ContactComposition } from '@/components/contact/ContactComposition'
import { isLocale, locales, type Locale } from '@/lib/i18n/config'
import { formatPageTitle } from '@/lib/i18n/site'
import { getAboutContent } from '@/lib/payload/queries/about'
import { getSiteChrome } from '@/lib/payload/queries/chrome'
import { getContactContent } from '@/lib/payload/queries/contact'
import { resolveRouteFromSegments, routePath, type RouteKey } from '@/lib/routes'

type InteriorPageProps = {
  params: Promise<{ locale: string; segments: string[] }>
}

/**
 * Route keys this segment can currently render. A key that exists in the route
 * manifest but is not listed here returns the branded 404 rather than an empty
 * shell — an unfinished page is never published as if it were finished.
 */
const buildableRoutes = ['about', 'contact'] as const

type BuildableRoute = (typeof buildableRoutes)[number]

function isBuildable(route: RouteKey): route is BuildableRoute {
  return buildableRoutes.some((key) => key === route)
}

function resolve(locale: string, segments: string[]): BuildableRoute | null {
  if (!isLocale(locale)) {
    return null
  }

  const route = resolveRouteFromSegments(segments, locale)
  return route && isBuildable(route) ? route : null
}

function getMeta(route: BuildableRoute, locale: Locale) {
  return route === 'about' ? getAboutContent(locale) : getContactContent(locale)
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    buildableRoutes.map((route) => ({
      locale,
      // routePath returns `/{locale}/{segment}`; the route only needs the tail.
      segments: [routePath(route, locale).split('/').slice(2).join('/')],
    })),
  )
}

export async function generateMetadata({ params }: InteriorPageProps): Promise<Metadata> {
  const { locale, segments } = await params
  const route = resolve(locale, segments)

  if (!route || !isLocale(locale)) {
    return {}
  }

  const content = await getMeta(route, locale)

  return {
    alternates: {
      canonical: routePath(route, locale),
      languages: {
        en: routePath(route, 'en'),
        fr: routePath(route, 'fr'),
        'x-default': routePath(route, 'en'),
      },
    },
    description: content.meta.description,
    title: { absolute: formatPageTitle(locale, content.meta.title) },
  }
}

export default async function InteriorPage({ params }: InteriorPageProps) {
  const { locale, segments } = await params
  const route = resolve(locale, segments)

  if (!route || !isLocale(locale)) {
    notFound()
  }

  if (route === 'about') {
    const [content, chrome] = await Promise.all([getAboutContent(locale), getSiteChrome(locale)])
    return <AboutComposition chrome={chrome} content={content} locale={locale} />
  }

  const [content, chrome] = await Promise.all([getContactContent(locale), getSiteChrome(locale)])
  return <ContactComposition chrome={chrome} content={content} locale={locale} />
}
