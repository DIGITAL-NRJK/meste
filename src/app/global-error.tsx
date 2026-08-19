'use client'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error: _error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            alignItems: 'center',
            background: '#173D27',
            color: '#F6F0E5',
            display: 'flex',
            fontFamily: 'serif',
            minHeight: '100vh',
            padding: '2rem',
          }}
        >
          <div>
            <h1>The table needs a moment.</h1>
            <button onClick={reset} type="button">
              Try again · Réessayer
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
