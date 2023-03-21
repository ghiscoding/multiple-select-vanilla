import { test, expect } from '@playwright/test';

test.describe('Options 14 - Select is opened', () => {
  test('select is already opened when routing to the page', async ({ page }) => {
    await page.goto('#/options14');
    const drop1elm = await page.locator('div .ms-drop');
    expect(drop1elm).toBeVisible();

    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('label').filter({ hasText: 'March' }).click();
    await page.getByRole('button', { name: 'February, March' }).click();
  });
});
