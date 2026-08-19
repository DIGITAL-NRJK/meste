'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { LogoMark } from '@/components/layout/LogoMark'
import { ENTRY_SESSION_KEY } from '@/lib/entry/content'
import type { EntryContent } from '@/lib/entry/types'

type EntryVeilProps = {
  content: EntryContent
}

type VeilState = 'open' | 'closing' | 'closed'

const FADE_MS = 520

/** Elements placed behind the veil, made inert so focus cannot reach them. */
function backdropElements(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>('[data-entry-backdrop]'))
}

export function EntryVeil({ content }: EntryVeilProps) {
  // The server always renders the veil open; the pre-paint script has already
  // hidden it visually for a returning visitor, so this only re-syncs state.
  const [state, setState] = useState<VeilState>('open')
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const timerRef = useRef<number | undefined>(undefined)

  const dismiss = useCallback(() => {
    try {
      window.sessionStorage.setItem(ENTRY_SESSION_KEY, '1')
    } catch {
      // Private browsing can refuse storage; the veil still opens.
    }

    document.documentElement.dataset.entered = 'true'

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setState('closed')
      return
    }

    setState('closing')
    timerRef.current = window.setTimeout(() => setState('closed'), FADE_MS)
  }, [])

  useEffect(() => {
    if (document.documentElement.dataset.entered === 'true') {
      setState('closed')
    }

    return () => window.clearTimeout(timerRef.current)
  }, [])

  useEffect(() => {
    const isBlocking = state === 'open' || state === 'closing'

    for (const element of backdropElements()) {
      element.inert = isBlocking
    }

    document.body.style.overflow = isBlocking ? 'hidden' : ''

    if (state === 'open') {
      closeButtonRef.current?.focus()
    }

    if (state === 'closed') {
      document.getElementById('main')?.focus({ preventScroll: true })
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [state])

  useEffect(() => {
    if (state !== 'open') {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dismiss()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [dismiss, state])

  if (state === 'closed') {
    return null
  }

  return (
    <div
      aria-labelledby="entry-heading"
      aria-modal="true"
      className="meste-entry"
      data-state={state}
      role="dialog"
    >
      <div className="meste-entry__inner">
        <LogoMark className="meste-entry__mark" priority size={64} />

        <p className="meste-eyebrow">{content.eyebrow}</p>

        <h1 className="meste-entry__heading" id="entry-heading">
          {content.heading}
        </h1>

        <p className="meste-entry__body">{content.body}</p>

        <button className="meste-button" onClick={dismiss} ref={closeButtonRef} type="button">
          {content.ctaLabel}
        </button>

        <p className="meste-entry__meta">
          <span>{content.location}</span>
          <span aria-hidden="true" className="meste-diamond" />
          <span>{content.signature}</span>
        </p>
      </div>
    </div>
  )
}
