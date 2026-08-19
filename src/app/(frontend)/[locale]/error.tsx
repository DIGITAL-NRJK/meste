'use client'

import { Container } from '@/components/ui/Container'

type ErrorPageProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error: _error, reset }: ErrorPageProps) {
  return (
    <main className="error-canvas">
      <Container>
        <span className="error-canvas__code">Service interrompu</span>
        <h1>The table needs a moment.</h1>
        <p>
          Please try again. Veuillez réessayer ; si le problème persiste, revenez dans quelques
          instants.
        </p>
        <button onClick={reset} type="button">
          Try again · Réessayer
        </button>
      </Container>
    </main>
  )
}
