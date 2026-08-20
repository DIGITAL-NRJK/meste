import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { BodyCopy } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { ExperienceContent } from '@/lib/pages/experience/types'

type ExperienceUniverseProps = {
  content: ExperienceContent['universe']
  disclaimer: string
  headingId: string
}

/**
 * What each edition will explore, and the disclaimer the brief requires
 * wherever the concept is presented. No date, frequency, capacity or venue
 * appears — none of them exists yet.
 */
export function ExperienceUniverse({ content, disclaimer, headingId }: ExperienceUniverseProps) {
  return (
    <Section labelledBy={headingId} ruled tone="alt">
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <BodyCopy className="meste-universe-intro">{content.intro}</BodyCopy>

      <ol className="meste-universe">
        {content.items.map((item, index) => (
          <li key={item}>
            <span aria-hidden="true">{editorialIndex(index)}</span>
            {item}
          </li>
        ))}
      </ol>

      <p className="meste-disclaimer">{disclaimer}</p>
    </Section>
  )
}
