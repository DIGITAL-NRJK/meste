import type { HTMLAttributes } from 'react'

export function Container({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`meste-container ${className}`.trim()} {...props} />
}
