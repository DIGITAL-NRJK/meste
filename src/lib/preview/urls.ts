import type { GeneratePreviewURL } from 'payload'

import { isLocale } from '@/lib/i18n/config'

type PathBuilder = (args: { doc: Record<string, unknown>; locale: 'en' | 'fr' }) => string

export function createPreviewURL(pathBuilder: PathBuilder): GeneratePreviewURL {
  return (doc, { locale }) => {
    const safeLocale = isLocale(locale) ? locale : 'en'
    const path = pathBuilder({ doc, locale: safeLocale })
    const params = new URLSearchParams({ path })

    return `/api/preview?${params.toString()}`
  }
}

export function localizedSlugPath(prefix: string): PathBuilder {
  return ({ doc, locale }) => {
    const slug = typeof doc.slug === 'string' ? doc.slug : ''
    return `/${locale}${prefix}/${slug}`
  }
}
