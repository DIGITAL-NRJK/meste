import { notFound } from 'next/navigation'

import { FoundationCanvas } from '@/components/editorial/FoundationCanvas'
import { isLocale, locales } from '@/lib/i18n/config'

type LocalePageProps = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return <FoundationCanvas locale={locale} />
}
