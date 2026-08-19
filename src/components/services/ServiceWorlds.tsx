import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { SubHeading } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { ServicesContent } from '@/lib/pages/services/types'

type ServiceWorldsProps = {
  content: ServicesContent['worlds']
  headingId: string
}

/**
 * Four worlds as editorial rows separated by hairlines, not as four cards. The
 * brief rules out the card grid explicitly.
 */
export function ServiceWorlds({ content, headingId }: ServiceWorldsProps) {
  return (
    <Section labelledBy={headingId} ruled tone="alt">
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <ol className="meste-worlds-rows">
        {content.items.map((world, index) => (
          <li className="meste-world-row" key={world.title}>
            <p className="meste-world-row__index" aria-hidden="true">
              {editorialIndex(index)}
            </p>

            <SubHeading className="meste-world-row__title">{world.title}</SubHeading>

            <ul className="meste-world-row__items">
              {world.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
