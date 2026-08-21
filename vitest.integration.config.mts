import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    include: ['tests/int/**/*.int.spec.ts'],
    name: 'integration',
    setupFiles: ['./vitest.setup.ts'],
    testTimeout: 30_000,
  },
})
