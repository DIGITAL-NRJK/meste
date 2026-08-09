import type { HTMLAttributes, PropsWithChildren } from 'react'

export function Eyebrow({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`meste-eyebrow ${className}`.trim()} {...props} />
}

export function DisplayHeading({
  children,
  className = '',
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h1 className={`meste-display-heading ${className}`.trim()} {...props}>
      {children}
    </h1>
  )
}

export function BodyCopy({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`meste-body-copy ${className}`.trim()} {...props} />
}
