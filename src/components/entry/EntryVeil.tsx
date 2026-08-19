'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'

import { LogoMark } from '@/components/layout/LogoMark'
import { ENTRY_SESSION_KEY } from '@/lib/entry/content'
import type { EntryContent } from '@/lib/entry/types'

type EntryVeilProps = {
  content: EntryContent
}

type VeilPhase = 'open' | 'closing' | 'closed'

const FADE_MS = 520

/** Elements placed behind the veil, made inert so focus cannot reach them. */
function backdropElements(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>('[data-entry-backdrop]'))
}

/**
 * The "already entered" flag lives on the document element, written once by the
 * pre-paint script and never changed while the veil is on screen. Reading it
 * through `useSyncExternalStore` keeps the hydration render identical to the
 * server render, then re-renders with the browser's answer — without the
 * cascading render an effect-driven `setState` would cause.
 */
const subscribeToEnteredFlag = () => () => {}

function readEnteredFlag(): boolean {
  return document.documentElement.dataset.entered === 'true'
}

function readServerEnteredFlag(): boolean {
  return false
}

export function EntryVeil({ content }: EntryVeilProps) {
  const hasEntered = useSyncExternalStore(
    subscribeToEnteredFlag,
    readEnteredFlag,
    readServerEnteredFlag,
  )
  const [phase, setPhase] = useState<VeilPhase>('open')
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const timerRef = useRef<number | undefined>(undefined)

  const isVisible = !hasEntered && phase !== 'closed'

  const dismiss = useCallback(() => {
    try {
      window.sessionStorage.setItem(ENTRY_SESSION_KEY, '1')
    } catch {
      // Private browsing can refuse storage; the veil still opens.
    }

    const settle = () => {
      // Written only once the fade is over: the pre-paint rule hides the veil
      // outright, which would cut the animation short mid-flight. Setting it
      // here also keeps the veil down across client-side navigations.
      document.documentElement.dataset.entered = 'true'
      setPhase('closed')
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      settle()
      return
    }

    setPhase('closing')
    timerRef.current = window.setTimeout(settle, FADE_MS)
  }, [])

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  useEffect(() => {
    for (const element of backdropElements()) {
      element.inert = isVisible
    }

    document.body.style.overflow = isVisible ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible && phase === 'open') {
      closeButtonRef.current?.focus()
    }
  }, [isVisible, phase])

  useEffect(() => {
    // Only after a deliberate dismissal, so a returning visitor keeps the
    // browser's natural entry point instead of being thrown into the page.
    if (phase === 'closed') {
      document.getElementById('main')?.focus({ preventScroll: true })
    }
  }, [phase])

  useEffect(() => {
    if (!isVisible || phase !== 'open') {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dismiss()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [dismiss, isVisible, phase])

  if (!isVisible) {
    return null
  }

  return (
    <div
      aria-labelledby="entry-heading"
      aria-modal="true"
      className="meste-entry"
      data-state={phase}
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
