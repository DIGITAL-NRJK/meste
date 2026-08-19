import type { HTMLAttributes, PropsWithChildren } from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3'

export function Eyebrow({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`meste-eyebrow ${className}`.trim()} {...props} />
}

export function DisplayHeading({
  as: Tag = 'h1',
  className = '',
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement> & { as?: HeadingLevel }>) {
  return <Tag className={`meste-display-heading ${className}`.trim()} {...props} />
}

export function Heading({
  as: Tag = 'h2',
  className = '',
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement> & { as?: HeadingLevel }>) {
  return <Tag className={`meste-heading ${className}`.trim()} {...props} />
}

export function SubHeading({
  as: Tag = 'h3',
  className = '',
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement> & { as?: HeadingLevel }>) {
  return <Tag className={`meste-subheading ${className}`.trim()} {...props} />
}

export function BodyCopy({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`meste-body-copy ${className}`.trim()} {...props} />
}

export function Lede({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`meste-lede meste-muted ${className}`.trim()} {...props} />
}

/** Italic burgundy fragment used to close a two-part editorial headline. */
export function Accent({ children }: PropsWithChildren) {
  return <span className="meste-accent">{children}</span>
}
