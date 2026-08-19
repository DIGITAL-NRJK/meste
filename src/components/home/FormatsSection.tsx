import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Frame } from '@/components/ui/Frame'
import { Eyebrow, SubHeading } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { FormatsContent } from '@/lib/home/types'

type FormatsSectionProps = {
  content: FormatsContent
  headingId: string
}

export function FormatsSection({ content, headingId }: FormatsSectionProps) {
  return (
    <Section labelledBy={headingId} tone="alt">
      <SectionHead
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
        trailing={<Eyebrow>{content.hint} &rarr;</Eyebrow>}
      />

      <div
        aria-label={content.heading}
        className="meste-rail"
        role="group"
        style={{ marginTop: '1.75rem' }}
        tabIndex={0}
      >
        {content.items.map((item, index) =>
          item.media ? (
            <article className="meste-rail-item" key={item.name}>
              <Frame media={item.media} ratio="landscape" sizes="(max-width: 44rem) 80vw, 22vw" />
              <div className="meste-rail-item__head">
                <span aria-hidden="true" className="meste-rail-item__index">
                  {editorialIndex(index)}
                </span>
                <SubHeading>{item.name}</SubHeading>
              </div>
              <p>{item.description}</p>
            </article>
          ) : (
            <article className="meste-rail-item meste-rail-item--outline" key={item.name}>
              <span aria-hidden="true" className="meste-rail-item__index">
                {editorialIndex(index)}
              </span>
              <SubHeading>{item.name}</SubHeading>
              <p>{item.description}</p>
            </article>
          ),
        )}
      </div>
    </Section>
  )
}
