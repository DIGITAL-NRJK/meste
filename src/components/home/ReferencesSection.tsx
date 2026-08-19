import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { SubHeading } from '@/components/ui/Typography'
import type { ReferencesContent } from '@/lib/home/types'

type ReferencesSectionProps = {
  content: ReferencesContent
  headingId: string
}

/**
 * No client, photograph or quote is shown without recorded permission. Until
 * approved testimonials exist, the section carries a deliberate editorial
 * statement instead of placeholder praise.
 */
export function ReferencesSection({ content, headingId }: ReferencesSectionProps) {
  return (
    <Section labelledBy={headingId} tone="alt">
      <SectionHead eyebrow={content.eyebrow} heading={content.heading} headingId={headingId} />

      {content.quotes.length > 0 ? (
        <div className="meste-quote-grid" style={{ marginTop: '2.25rem' }}>
          {content.quotes.map((quote) => (
            <figure className="meste-quote" key={quote.quote.slice(0, 40)}>
              <blockquote>{quote.quote}</blockquote>
              <figcaption>
                {quote.attribution}
                {quote.context ? (
                  <>
                    <br />
                    {quote.context}
                  </>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="meste-empty" style={{ marginTop: '2.25rem' }}>
          <SubHeading as="h3">{content.emptyTitle}</SubHeading>
          <p>{content.emptyBody}</p>
        </div>
      )}
    </Section>
  )
}
