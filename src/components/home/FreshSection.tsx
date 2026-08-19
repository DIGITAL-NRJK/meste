import { ActionTextLink } from '@/components/ui/Action'
import { Frame } from '@/components/ui/Frame'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow, Lede } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { FreshContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'

type FreshSectionProps = {
  content: FreshContent
  headingId: string
  locale: Locale
}

export function FreshSection({ content, headingId, locale }: FreshSectionProps) {
  return (
    <Section labelledBy={headingId} ruled>
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <div className="meste-split meste-split--narrow-first" style={{ marginTop: '2.25rem' }}>
        <div>
          <Lede>{content.intro}</Lede>

          <ul className="meste-index" style={{ marginTop: '1.75rem' }}>
            {content.products.map((product, index) => (
              <li key={product}>
                <div className="meste-index__row" style={{ gridTemplateColumns: '3.25rem 1fr' }}>
                  <span aria-hidden="true" className="meste-numeral">
                    {editorialIndex(index)}
                  </span>
                  <span className="meste-index__title">{product}</span>
                </div>
              </li>
            ))}
          </ul>

          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginTop: '1.25rem',
            }}
          >
            <Eyebrow>{content.signature}</Eyebrow>
            <ActionTextLink action={content.action} locale={locale} />
          </div>
        </div>

        <Frame media={content.media} ratio="tall" sizes="(max-width: 68rem) 100vw, 48vw" />
      </div>
    </Section>
  )
}
