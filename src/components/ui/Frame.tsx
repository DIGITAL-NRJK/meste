import Image from 'next/image'

import type { MediaSlot } from '@/lib/home/types'

type Ratio = 'landscape' | 'portrait' | 'square' | 'tall'

type FrameProps = {
  className?: string
  media: MediaSlot | null
  priority?: boolean
  ratio?: Ratio
  sizes: string
}

/**
 * Renders approved photography when it exists, and an explicitly labelled
 * placeholder when it does not. The project never ships an invented image, and
 * the placeholder names the shoot that is still outstanding.
 */
export function Frame({
  className = '',
  media,
  priority = false,
  ratio = 'landscape',
  sizes,
}: FrameProps) {
  if (!media) {
    return null
  }

  const ratioClass = `meste-frame--${ratio}`

  if (!media.image) {
    return (
      <div className={`meste-frame ${ratioClass} meste-placeholder ${className}`.trim()}>
        <span className="meste-placeholder__label">{media.slot}</span>
        <p className="meste-placeholder__caption">{media.caption}</p>
      </div>
    )
  }

  return (
    <div className={`meste-frame ${ratioClass} ${className}`.trim()}>
      <Image alt={media.image.alt} fill priority={priority} sizes={sizes} src={media.image.url} />
    </div>
  )
}
