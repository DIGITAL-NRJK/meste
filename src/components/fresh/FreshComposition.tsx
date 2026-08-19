import { CulinaryUses } from '@/components/fresh/CulinaryUses'
import { ProductRange } from '@/components/fresh/ProductRange'
import { PageShell } from '@/components/layout/PageShell'
import { PageClosingSection } from '@/components/pages/PageClosingSection'
import { PageOpening } from '@/components/pages/PageOpening'
import type { Locale } from '@/lib/i18n/config'
import type { FreshContent } from '@/lib/pages/fresh/types'
import type { SiteChrome } from '@/lib/site/types'

type FreshCompositionProps = {
  chrome: SiteChrome
  content: FreshContent
  locale: Locale
}

export function FreshComposition({ chrome, content, locale }: FreshCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="fresh" skipLabel={content.skipToContent}>
      <PageOpening content={content.intro} headingId="fresh-intro" media={content.intro.media} />
      <ProductRange content={content.range} headingId="fresh-range" />
      <CulinaryUses content={content.culinary} headingId="fresh-culinary" />
      <PageClosingSection
        contact={chrome.contact}
        content={content.closing}
        headingId="fresh-closing"
        locale={locale}
      />
    </PageShell>
  )
}
