import { ActionTextLink } from '@/components/ui/Action'
import { Frame } from '@/components/ui/Frame'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Lede, SubHeading } from '@/components/ui/Typography'
import type { DishesContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'

type DishesSectionProps = {
  content: DishesContent
  headingId: string
  locale: Locale
}

/**
 * The culinary identity always renders. The signature dish rail only appears
 * once dishes with approved photography exist, so the section is never a row
 * of empty frames.
 */
export function DishesSection({ content, headingId, locale }: DishesSectionProps) {
  return (
    <Section labelledBy={headingId} ruled>
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <div className="meste-split" style={{ marginTop: '2.25rem' }}>
        <Lede>{content.intro}</Lede>

        <div className="meste-identity">
          {content.pillars.map((pillar) => (
            <div className="meste-identity__item" key={pillar.title}>
              <SubHeading as="h3">{pillar.title}</SubHeading>
              <p>{pillar.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {content.items.length > 0 ? (
        <div
          aria-label={content.heading}
          className="meste-rail"
          role="group"
          style={{ marginTop: '2.5rem' }}
          tabIndex={0}
        >
          {content.items.map((dish) => (
            <article className="meste-dish" key={dish.name}>
              <Frame media={dish.media} ratio="square" sizes="(max-width: 44rem) 80vw, 22vw" />
              <h3 className="meste-dish__name">{dish.name}</h3>
              {dish.composition ? (
                <p className="meste-dish__composition">{dish.composition}</p>
              ) : null}
              <p className="meste-dish__level">{dish.level}</p>
            </article>
          ))}
        </div>
      ) : null}

      <div className="meste-actions" style={{ marginTop: '1.75rem' }}>
        <ActionTextLink action={content.action} locale={locale} />
      </div>
    </Section>
  )
}
