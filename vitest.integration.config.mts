import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    // Neon met en veille un compute inactif ; le réveil peut prendre plus de
    // dix secondes. Sans cette marge, la connexion et le hook expirent
    // ensemble et CI échoue sur une base parfaitement saine.
    hookTimeout: 60_000,
    include: ['tests/int/**/*.int.spec.ts'],
    name: 'integration',
    setupFiles: ['./vitest.setup.ts'],
    testTimeout: 30_000,
  },
})
