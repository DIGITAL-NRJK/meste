'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { GalleryContent } from '@/lib/pages/gallery/types'

type GalleryBrowserProps = {
  content: GalleryContent
}

const ALL = 'all'

/**
 * The filtered grid and its lightbox.
 *
 * This is the only client component on the page, and it is not rendered at all
 * while the gallery is empty — which is its state today. Filters appear only
 * once more than one category has photography, so the page never shows a row of
 * buttons that all lead to the same images.
 *
 * The lightbox is a native `<dialog>` opened with `showModal()`. That is what
 * makes everything behind it inert and keeps Tab inside the dialog: a
 * hand-rolled overlay in the same DOM subtree cannot do either without
 * disabling itself along with the page.
 */
export function GalleryBrowser({ content }: GalleryBrowserProps) {
  const [category, setCategory] = useState<string>(ALL)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const categories = Array.from(new Set(content.items.map((item) => item.category)))
  const visible =
    category === ALL ? content.items : content.items.filter((item) => item.category === category)
  const active = openIndex === null ? null : (visible[openIndex] ?? null)

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null || visible.length === 0) {
          return current
        }

        return (current + delta + visible.length) % visible.length
      })
    },
    [visible.length],
  )

  // Drives the native dialog from React state. `showModal()` also restores
  // focus to the element that opened it when the dialog closes.
  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    if (active && !dialog.open) {
      dialog.showModal()
    }

    if (!active && dialog.open) {
      dialog.close()
    }
  }, [active])

  useEffect(() => {
    if (!active) {
      return
    }

    // A modal dialog makes the page inert, but it does not stop it scrolling
    // underneath the backdrop.
    document.body.style.overflow = 'hidden'

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') {
        step(1)
      }

      if (event.key === 'ArrowLeft') {
        step(-1)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [active, step])

  return (
    <>
      {categories.length > 1 ? (
        <div aria-label={content.filters.groupLabel} className="meste-gallery-filters" role="group">
          {[ALL, ...categories].map((key) => (
            <button
              aria-pressed={category === key}
              className="meste-gallery-filter"
              key={key}
              onClick={() => {
                setCategory(key)
                setOpenIndex(null)
              }}
              type="button"
            >
              {key === ALL ? content.filters.allLabel : (content.categoryLabels[key] ?? key)}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="meste-gallery-grid">
        {visible.map((item, index) => (
          <li key={item.id}>
            <button
              className="meste-gallery-tile"
              onClick={() => setOpenIndex(index)}
              type="button"
            >
              <Image
                alt={item.alt}
                className="meste-gallery-tile__image"
                height={item.image.height ?? 900}
                sizes="(max-width: 48rem) 50vw, (max-width: 72rem) 33vw, 25vw"
                src={item.image.url}
                width={item.image.width ?? 1200}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        aria-label={content.lightbox.dialogLabel}
        className="meste-lightbox"
        onClose={() => setOpenIndex(null)}
        ref={dialogRef}
      >
        {active ? (
          <>
            <div className="meste-lightbox__bar">
              <button
                className="meste-lightbox__button"
                disabled={visible.length < 2}
                onClick={() => step(-1)}
                type="button"
              >
                {content.lightbox.previousLabel}
              </button>
              <button
                className="meste-lightbox__button"
                disabled={visible.length < 2}
                onClick={() => step(1)}
                type="button"
              >
                {content.lightbox.nextLabel}
              </button>
              <button
                className="meste-lightbox__button"
                onClick={() => setOpenIndex(null)}
                type="button"
              >
                {content.lightbox.closeLabel}
              </button>
            </div>

            <figure className="meste-lightbox__figure">
              <Image
                alt={active.alt}
                height={active.image.height ?? 900}
                sizes="90vw"
                src={active.image.url}
                width={active.image.width ?? 1200}
              />
              {active.caption ? <figcaption>{active.caption}</figcaption> : null}
            </figure>
          </>
        ) : null}
      </dialog>
    </>
  )
}
