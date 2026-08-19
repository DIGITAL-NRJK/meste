import type { HTMLAttributes } from 'react'

type LogoFullProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'burgundy' | 'forest' | 'ivory'
}

/**
 * Text-only fallback. Replace the inner treatment only after official logo files are supplied.
 * This deliberately does not reproduce or approximate the Mama Emma portrait.
 */
export function LogoFull({ className = '', tone = 'burgundy', ...props }: LogoFullProps) {
  return (
    <span
      className={`brand-wordmark brand-wordmark--${tone} ${className}`.trim()}
      data-logo-status="official-asset-pending"
      {...props}
    >
      <span className="brand-wordmark__name">Mama Emma</span>
      <span className="brand-wordmark__descriptor">Service Traiteur d&apos;Excellence</span>
    </span>
  )
}
