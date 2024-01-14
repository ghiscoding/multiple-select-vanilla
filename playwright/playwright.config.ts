import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  // reporter: process.env.CI ? 'dot' : 'list',
  reporter: [['junit', { outputFile: '../playwright-report/results.xml' }]],
  retries: process.env.CI ? 1 : 0,
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: Boolean(process.env.CI),
  use: {
    baseURL: 'http://localhost:3000/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on',
    video: 'on-first-retry',
  },
  projects: process.env.CI
    ? [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
      ]
    : [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
