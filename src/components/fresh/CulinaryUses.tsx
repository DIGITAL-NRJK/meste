import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { BodyCopy } from '@/components/ui/Typography'
import type { FreshContent } from '@/lib/pages/fresh/types'

type CulinaryUsesProps = {
  content: FreshContent['culinary']
  headingId: string
}

/**
 * Written as possibility throughout. The brief allows telling how these
 * flavours *may* inspire a culinary component, and forbids implying any of them
 * is used in a recipe unless that has been verified.
 */
export function CulinaryUses({ content, headingId }: CulinaryUsesProps) {
  return (
    <Section labelledBy={headingId} ruled>
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <BodyCopy className="meste-uses-intro">{content.intro}</BodyCopy>

      <dl className="meste-uses">
        {content.items.map((item) => (
          <div className="meste-use" key={item.flavour}>
            <dt>{item.flavour}</dt>
            <dd>
              <ul>
                {item.uses.map((use) => (
                  <li key={use}>{use}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <p className="meste-uses__caveat">{content.caveat}</p>
    </Section>
  )
}
