import { test, expect } from '@playwright/test';

test.describe('Options 39 - Label ID', () => {
  test('adding a Label id to the select button', async ({ page }) => {
    await page.goto('#/options39');

    const msChoice = await page.locator('.ms-choice');
    await expect(msChoice).toHaveAttribute('id', 'custom-label');
    await expect(msChoice).toHaveAttribute('aria-labelledby', 'custom-label');
  });
});
