import { GallerySection } from '@/components/gallery/GallerySection'
import { PageShell } from '@/components/layout/PageShell'
import { PageClosingSection } from '@/components/pages/PageClosingSection'
import { PageOpening } from '@/components/pages/PageOpening'
import type { Locale } from '@/lib/i18n/config'
import type { GalleryContent } from '@/lib/pages/gallery/types'
import type { SiteChrome } from '@/lib/site/types'

type GalleryCompositionProps = {
  chrome: SiteChrome
  content: GalleryContent
  locale: Locale
}

export function GalleryComposition({ chrome, content, locale }: GalleryCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="gallery" skipLabel={content.skipToContent}>
      <PageOpening content={content.intro} headingId="gallery-intro" />
      <GallerySection content={content} headingId="gallery-grid" />
      <PageClosingSection
        contact={chrome.contact}
        content={content.closing}
        headingId="gallery-closing"
        locale={locale}
      />
    </PageShell>
  )
}
