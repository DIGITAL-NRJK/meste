import Link from 'next/link'

import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <main className="error-canvas">
      <Container>
        <span className="error-canvas__code">404 · Table introuvable</span>
        <h1>This place is not set at our table.</h1>
        <p>
          The page may have moved or may not yet be ready. La page a peut-être changé d&apos;adresse
          ou n&apos;est pas encore prête.
        </p>
        <Link href="/en">Return to MESTE</Link>
      </Container>
    </main>
  )
}
