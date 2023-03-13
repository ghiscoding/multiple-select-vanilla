import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  // reporter: process.env.CI ? 'dot' : 'list',
  reporter: process.env.CI ? 'dot' : 'html',
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  projects: process.env.CI
    ? [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
      ]
    : [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
      ],
  webServer: process.env.CI
    ? {
        command: 'pnpm server',
        port: 3000,
      }
    : undefined,
});
