import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { AboutComposition } from '@/components/about/AboutComposition'
import { ContactComposition } from '@/components/contact/ContactComposition'
import { FreshComposition } from '@/components/fresh/FreshComposition'
import { MenusComposition } from '@/components/menus/MenusComposition'
import { ServicesComposition } from '@/components/services/ServicesComposition'
import { isLocale, locales, type Locale } from '@/lib/i18n/config'
import { formatPageTitle } from '@/lib/i18n/site'
import type { PageMeta } from '@/lib/pages/types'
import { getAboutContent } from '@/lib/payload/queries/about'
import { getSiteChrome } from '@/lib/payload/queries/chrome'
import { getContactContent } from '@/lib/payload/queries/contact'
import { getFreshContent } from '@/lib/payload/queries/freshPage'
import { getMenusContent } from '@/lib/payload/queries/menusPage'
import { getServicesContent } from '@/lib/payload/queries/servicesPage'
import { resolveRouteFromSegments, routePath, type RouteKey } from '@/lib/routes'

type InteriorPageProps = {
  params: Promise<{ locale: string; segments: string[] }>
}

/**
 * Route keys this segment can currently render. A key that exists in the route
 * manifest but is not listed here returns the branded 404 rather than an empty
 * shell — an unfinished page is never published as if it were finished.
 */
const buildableRoutes = ['about', 'services', 'menus', 'fresh', 'contact'] as const

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

const loaders: Record<BuildableRoute, (locale: Locale) => Promise<{ meta: PageMeta }>> = {
  about: getAboutContent,
  contact: getContactContent,
  fresh: getFreshContent,
  menus: getMenusContent,
  services: getServicesContent,
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

  const content = await loaders[route](locale)

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

  const chrome = await getSiteChrome(locale)

  switch (route) {
    case 'about':
      return (
        <AboutComposition chrome={chrome} content={await getAboutContent(locale)} locale={locale} />
      )
    case 'services':
      return (
        <ServicesComposition
          chrome={chrome}
          content={await getServicesContent(locale)}
          locale={locale}
        />
      )
    case 'menus':
      return (
        <MenusComposition chrome={chrome} content={await getMenusContent(locale)} locale={locale} />
      )
    case 'fresh':
      return (
        <FreshComposition chrome={chrome} content={await getFreshContent(locale)} locale={locale} />
      )
    case 'contact':
      return (
        <ContactComposition
          chrome={chrome}
          content={await getContactContent(locale)}
          locale={locale}
        />
      )
  }
}
