import type { Where } from 'payload'

import type { Locale } from '@/lib/i18n/config'

export function publishedLocaleWhere(locale: Locale, extra?: Where): Where {
  const publication: Where = {
    _status: { equals: 'published' },
    [`localeReadiness.${locale}`]: { equals: true },
  }

  if (!extra) {
    return publication
  }

  return {
    and: [publication, extra],
  }
}
