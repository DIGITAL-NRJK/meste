import { PullQuoteSection } from '@/components/about/PullQuoteSection'
import { StoryChapters } from '@/components/about/StoryChapters'
import { PageShell } from '@/components/layout/PageShell'
import { PageClosingSection } from '@/components/pages/PageClosingSection'
import { PageOpening } from '@/components/pages/PageOpening'
import type { Locale } from '@/lib/i18n/config'
import type { AboutContent } from '@/lib/pages/about/types'
import type { SiteChrome } from '@/lib/site/types'

type AboutCompositionProps = {
  chrome: SiteChrome
  content: AboutContent
  locale: Locale
}

/**
 * Ivory opening, deep-ivory chapters, a burgundy held statement, then the
 * forest close — the same room-to-room progression the homepage established.
 */
export function AboutComposition({ chrome, content, locale }: AboutCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="about" skipLabel={content.skipToContent}>
      <PageOpening content={content.intro} headingId="about-intro" media={content.intro.media} />
      <StoryChapters content={content.chapters} headingId="about-chapters" />
      <PullQuoteSection content={content.pullQuote} />
      <PageClosingSection
        contact={chrome.contact}
        content={content.closing}
        headingId="about-closing"
        locale={locale}
      />
    </PageShell>
  )
}
