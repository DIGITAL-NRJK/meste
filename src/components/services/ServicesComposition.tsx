import { PageShell } from '@/components/layout/PageShell'
import { PageClosingSection } from '@/components/pages/PageClosingSection'
import { PageOpening } from '@/components/pages/PageOpening'
import { ReceptionFormats } from '@/components/services/ReceptionFormats'
import { ReferencesNote } from '@/components/services/ReferencesNote'
import { ServiceWorlds } from '@/components/services/ServiceWorlds'
import type { Locale } from '@/lib/i18n/config'
import type { ServicesContent } from '@/lib/pages/services/types'
import type { SiteChrome } from '@/lib/site/types'

type ServicesCompositionProps = {
  chrome: SiteChrome
  content: ServicesContent
  locale: Locale
}

export function ServicesComposition({ chrome, content, locale }: ServicesCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="services" skipLabel={content.skipToContent}>
      <PageOpening content={content.intro} headingId="services-intro" />
      <ServiceWorlds content={content.worlds} headingId="services-worlds" />
      <ReceptionFormats content={content.formats} headingId="services-formats" />
      <ReferencesNote content={content.references} headingId="services-references" />
      <PageClosingSection
        contact={chrome.contact}
        content={content.closing}
        headingId="services-closing"
        locale={locale}
      />
    </PageShell>
  )
}
