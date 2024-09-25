import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['src/*.test.tsx', 'src/*.test.ts'],
    environment: "happy-dom",
  },
})
