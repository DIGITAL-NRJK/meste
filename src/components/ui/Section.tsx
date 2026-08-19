import type { PropsWithChildren } from 'react'

import { Container } from '@/components/ui/Container'

type SectionProps = PropsWithChildren<{
  className?: string
  id?: string
  labelledBy?: string
  ruled?: boolean
  tight?: boolean
  tone?: 'alt' | 'burgundy' | 'forest' | 'ivory'
}>

const toneClass: Record<NonNullable<SectionProps['tone']>, string> = {
  alt: 'meste-section--alt',
  burgundy: 'meste-section--burgundy',
  forest: 'meste-section--forest',
  ivory: '',
}

export function Section({
  children,
  className = '',
  id,
  labelledBy,
  ruled = false,
  tight = false,
  tone = 'ivory',
}: SectionProps) {
  const classes = [
    'meste-section',
    toneClass[tone],
    ruled ? 'meste-section--ruled' : '',
    tight ? 'meste-section--tight' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section aria-labelledby={labelledBy} className={classes} id={id}>
      <Container>{children}</Container>
    </section>
  )
}
