import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { HomeComposition } from '@/components/home/HomeComposition'
import { isLocale, locales } from '@/lib/i18n/config'
import { getHomeContent } from '@/lib/payload/queries/home'
import { getSiteChrome } from '@/lib/payload/queries/chrome'

type LocalePageProps = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const content = await getHomeContent(locale)

  return {
    description: content.meta.description,
    title: content.meta.title,
  }
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const [content, chrome] = await Promise.all([getHomeContent(locale), getSiteChrome(locale)])

  return <HomeComposition chrome={chrome} content={content} locale={locale} />
}
