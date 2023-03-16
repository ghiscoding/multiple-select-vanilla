import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  // reporter: process.env.CI ? 'dot' : 'list',
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  retries: process.env.CI ? 1 : 0, // set to 1 when running on CI
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  use: {
    baseURL: 'http://localhost:3000/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry', // record traces on first retry of each test
    video: 'on-first-retry',
  },
  
  projects: process.env.CI
    ? [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
      ]
    : [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: process.env.CI
    ? {
        command: 'pnpm serve',
        port: 3000,
      }
    : undefined,
});
