import Image from 'next/image'

import logo from '../../../public/brand/meste-logo-full.png'

type LogoFullProps = {
  className?: string
  priority?: boolean
  /** Accessible name. Pass an empty string when a visible wordmark sits beside it. */
  label?: string
  width?: number
}

/**
 * The complete official logo lockup (medallion plus wordmark) as supplied by
 * the client. Reserved for large brand moments; the header uses LogoMark with
 * live text so the wordmark stays selectable and scalable.
 */
export function LogoFull({
  className = '',
  label = 'Mama Emma Service Traiteur d’Excellence',
  priority = false,
  width = 240,
}: LogoFullProps) {
  return (
    <Image
      alt={label}
      className={className}
      height={width}
      priority={priority}
      src={logo}
      width={width}
    />
  )
}
