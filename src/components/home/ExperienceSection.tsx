import { ActionLink } from '@/components/ui/Action'
import { Frame } from '@/components/ui/Frame'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Lede } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { ExperienceContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'

type ExperienceSectionProps = {
  content: ExperienceContent
  headingId: string
  locale: Locale
}

/**
 * The concept is not launched. No dates, capacity, venue or price appear here —
 * only the approved positioning and an interest-list call to action.
 */
export function ExperienceSection({ content, headingId, locale }: ExperienceSectionProps) {
  return (
    <Section labelledBy={headingId} tone="forest">
      <SectionHead eyebrow={content.eyebrow} heading={content.heading} headingId={headingId} />

      <div className="meste-split" style={{ marginTop: '2.25rem' }}>
        <Frame media={content.media} ratio="landscape" sizes="(max-width: 68rem) 100vw, 45vw" />

        <div>
          <Lede>{content.intro}</Lede>

          <ul className="meste-index meste-index--stacked" style={{ marginTop: '1.75rem' }}>
            {content.pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <div className="meste-index__row">
                  <span aria-hidden="true" className="meste-numeral">
                    {editorialIndex(index)}
                  </span>
                  <div>
                    <h3 className="meste-index__title">{pillar.title}</h3>
                    <p className="meste-index__detail">{pillar.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="meste-note-row">
            <em className="meste-muted">{content.disclaimer}</em>
            <span aria-hidden="true" className="meste-note-row__line" />
            <ActionLink action={content.action} locale={locale} variant="compact" />
          </div>
        </div>
      </div>
    </Section>
  )
}
