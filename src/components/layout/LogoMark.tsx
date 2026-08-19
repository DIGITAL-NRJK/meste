import Image from 'next/image'

import medallion from '../../../public/brand/mama-emma-medallion.png'

type LogoMarkProps = {
  className?: string
  priority?: boolean
  size?: number
}

/**
 * The official Mama Emma medallion, used exactly as supplied. It is never
 * redrawn, recoloured or approximated.
 */
export function LogoMark({ className = '', priority = false, size = 40 }: LogoMarkProps) {
  return (
    <Image
      alt=""
      className={className}
      height={size}
      priority={priority}
      src={medallion}
      width={size}
    />
  )
}
