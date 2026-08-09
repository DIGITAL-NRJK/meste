import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'
import type { ReactNode } from 'react'

import { PreviewBanner } from '@/components/editorial/PreviewBanner'
import { displayFont, interfaceFont } from '@/lib/fonts'
import { defaultLocale, isLocale } from '@/lib/i18n/config'
import { getFoundationDictionary } from '@/lib/i18n/dictionaries'
import { getPublicSiteURL } from '@/lib/env/public'

import '../styles.css'

type LocaleLayoutProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale
  const copy = getFoundationDictionary(locale)
  const { isEnabled: isPreview } = await draftMode()

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fr: '/fr',
        'x-default': '/en',
      },
    },
    description: copy.body,
    metadataBase: getPublicSiteURL(),
    robots: isPreview ? { follow: false, index: false } : undefined,
    title: {
      default: `MESTE — ${copy.headline}`,
      template: '%s — MESTE',
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F6F0E5',
  width: 'device-width',
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: requestedLocale } = await params
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale

  return (
    <html
      className={`${displayFont.variable} ${interfaceFont.variable}`}
      data-scroll-behavior="smooth"
      lang={locale}
    >
      <body>
        <PreviewBanner />
        {children}
      </body>
    </html>
  )
}
