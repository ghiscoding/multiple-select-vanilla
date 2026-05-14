import { expect, test } from '@playwright/test';

test.describe('Options 32 - Sanitizer', () => {
  test('select last 2 options should not trigger any alert(XSS)', async ({ page }) => {
    let alertTriggered = false;
    page.on('dialog', async alert => {
      alertTriggered = true;
      alert.message();
      await alert.dismiss();
    });

    await page.goto('#/options32');
    await page.locator('.ms-parent', { hasText: 'Placeholder with cross-site scripting code...' }).click();
    await page.locator('span').filter({ hasText: '1. Safe HTML example' }).click();
    await page.locator('span').filter({ hasText: '2. Payload blocked by stripScripts' }).click();
    await page.locator('span').filter({ hasText: '3. Payload that bypasses stripScripts and executes' }).click();
    await expect(alertTriggered).toBeFalsy();
  });
});
