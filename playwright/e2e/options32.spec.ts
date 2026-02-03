import { expect, test } from '@playwright/test';

test.describe('Options 32 - Sanitizer', () => {
  test('select shows image not found and JS alert should be sanitized and not trigger', async ({ page }) => {
    let alertTriggered = false;
    page.on('dialog', async alert => {
      alertTriggered = true;
      alert.message();
      await alert.dismiss();
    });

    await page.goto('#/options32');
    await page.locator('.ms-parent', { hasText: 'Placeholder with cross-site scripting code...' }).click();
    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('span').filter({ hasText: 'March' }).click();
    await expect(alertTriggered).toBeFalsy();
  });
});
