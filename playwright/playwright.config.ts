import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: process.env.CI ? 'dot' : 'list',
  testDir: 'e2e',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
});
