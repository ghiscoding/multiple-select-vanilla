import { test, expect } from '@playwright/test';

test.describe('Example 12 - Checkbox/Radio icons', () => {
  test('1st select show radio icons & 2nd select shows checkbox icons', async ({ page }) => {
    await page.goto('#/example12');
    await page.locator('.ms-parent').nth(0).click();
    // await expect( page.screenshot()).toMatchSnapshot();
    await page.getByRole('button', { name: 'January' }).click();
    await expect(page.locator('.ms-drop').nth(0)).not.toBeVisible();

    await page.locator('.ms-parent').nth(1).click();
    await page.getByRole('option').filter({ hasText: 'March' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'April' }).locator('span').click();
    // await expect( page.screenshot()).toMatchSnapshot();
    await page.getByRole('button', { name: 'OK' }).click();
  });
});
