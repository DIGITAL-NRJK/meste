import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { editorialIndex } from '@/lib/format'
import type { FreshContent } from '@/lib/pages/fresh/types'

type ProductRangeProps = {
  content: FreshContent['range']
  headingId: string
}

/**
 * Six names, a signature, and nothing else. Sizes, ingredients and availability
 * are absent because none of them is verified — the note says so rather than
 * leaving the reader to assume.
 */
export function ProductRange({ content, headingId }: ProductRangeProps) {
  return (
    <Section labelledBy={headingId} ruled tone="alt">
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <ol className="meste-products">
        {content.products.map((product, index) => (
          <li className="meste-product" key={product}>
            <span aria-hidden="true" className="meste-product__index">
              {editorialIndex(index)}
            </span>
            <span className="meste-product__name">{product}</span>
          </li>
        ))}
      </ol>

      <p className="meste-products__signature">{content.signature}</p>
      <p className="meste-products__note">{content.note}</p>
    </Section>
  )
}
