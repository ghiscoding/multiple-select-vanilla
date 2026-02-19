import { expect, test } from '@playwright/test';

test.describe('Options 44 - tabIndex', () => {
  test('adding a tabindex to the select button', async ({ page }) => {
    await page.goto('#/options44');

    const msChoice = await page.locator('.ms-choice');
    await expect(msChoice).toHaveAttribute('tabindex', '0');
  });
});
