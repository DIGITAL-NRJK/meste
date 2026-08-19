import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { BodyCopy } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { MenusContent } from '@/lib/pages/menus/types'

type SignatureDishListProps = {
  content: MenusContent['signatureDishes']
  headingId: string
}

/**
 * The signature dishes read as a menu page rather than a photographic rail: no
 * approved dish photography exists yet, and a rail of twelve placeholders would
 * say less than the compositions themselves.
 *
 * Composition is printed exactly as the approved material writes it. No
 * allergen or dietary label is derived from it.
 */
export function SignatureDishList({ content, headingId }: SignatureDishListProps) {
  return (
    <Section labelledBy={headingId} ruled>
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <BodyCopy className="meste-dishes-intro">{content.intro}</BodyCopy>

      <ol className="meste-dishes">
        {content.items.map((dish, index) => (
          <li className="meste-dish" key={dish.name}>
            <span aria-hidden="true" className="meste-dish__index">
              {editorialIndex(index)}
            </span>
            <div>
              <p className="meste-dish__name">{dish.name}</p>
              <p className="meste-dish__composition">{dish.composition}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
