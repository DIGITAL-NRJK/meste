import type { ReactNode } from 'react'

import { Accent, Eyebrow, Heading } from '@/components/ui/Typography'

type SectionHeadProps = {
  accent?: string
  eyebrow: string
  heading: string
  headingId?: string
  trailing?: ReactNode
}

/**
 * The recurring editorial header: title on the left, eyebrow on the right,
 * hairline underneath. Used by every homepage section so the rhythm holds.
 */
export function SectionHead({ accent, eyebrow, heading, headingId, trailing }: SectionHeadProps) {
  return (
    <div className="meste-section-head">
      <Heading className="meste-section-head__title" id={headingId}>
        {heading}
        {accent ? (
          <>
            {' '}
            <Accent>{accent}</Accent>
          </>
        ) : null}
      </Heading>
      {trailing ?? <Eyebrow>{eyebrow}</Eyebrow>}
    </div>
  )
}
