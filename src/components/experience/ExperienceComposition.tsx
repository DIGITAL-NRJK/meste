import { ExperiencePillars } from '@/components/experience/ExperiencePillars'
import { ExperienceUniverse } from '@/components/experience/ExperienceUniverse'
import { PageShell } from '@/components/layout/PageShell'
import { PageClosingSection } from '@/components/pages/PageClosingSection'
import { PageOpening } from '@/components/pages/PageOpening'
import type { Locale } from '@/lib/i18n/config'
import type { ExperienceContent } from '@/lib/pages/experience/types'
import type { SiteChrome } from '@/lib/site/types'

type ExperienceCompositionProps = {
  chrome: SiteChrome
  content: ExperienceContent
  locale: Locale
}

/**
 * Concept only. The brief is explicit: until dates, venues and a registration
 * mode are real and approved, this page is a concept plus an interest list —
 * and the interest list pipeline belongs to Phase 6.
 */
export function ExperienceComposition({ chrome, content, locale }: ExperienceCompositionProps) {
  return (
    <PageShell chrome={chrome} locale={locale} route="experience" skipLabel={content.skipToContent}>
      <PageOpening
        content={content.intro}
        headingId="experience-intro"
        media={content.intro.media}
      />
      <ExperiencePillars content={content.pillars} headingId="experience-pillars" />
      <ExperienceUniverse
        content={content.universe}
        disclaimer={content.disclaimer}
        headingId="experience-universe"
      />
      <PageClosingSection
        contact={chrome.contact}
        content={content.closing}
        headingId="experience-closing"
        locale={locale}
      />
    </PageShell>
  )
}
