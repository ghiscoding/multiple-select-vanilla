import { test, expect } from '@playwright/test';

test.describe('Options 17 - Drop Container', () => {
  test('first select should not be visible without a container but all other selects should be visible', async ({ page }) => {
    await page.goto('#/options17');
    await page.locator('.select1.ms-parent').click();
    const drop1elm = await page.locator('.select1.ms-parent .ms-drop');
    expect(drop1elm).not.toBeVisible();

    await page.locator('.select2.ms-parent').click();
    await page.getByRole('listitem').filter({ hasText: 'February' }).locator('span').click();
    await page.getByRole('listitem').filter({ hasText: 'August' }).locator('span').click();
    const drop2elm = await page.locator('[data-test=select2].ms-drop');
    expect(drop2elm).toBeVisible();
    await page.getByRole('button', { name: 'February, August' }).click();

    await page.locator('.select3.ms-parent').click();
    await page.getByRole('listitem').filter({ hasText: 'January' }).locator('span').click();
    await page.getByRole('listitem').filter({ hasText: 'March' }).locator('span').click();
    await page.getByRole('listitem').filter({ hasText: 'April' }).locator('span').click();
    const drop3elm = await page.locator('[data-test=select3].ms-drop');
    expect(drop3elm).toBeVisible();
    await page.getByRole('button', { name: 'January, March, April' }).click();

    await page.locator('.select4.ms-parent').click();
    await page.getByRole('listitem').filter({ hasText: 'April' }).locator('span').click();
    await page.getByRole('listitem').filter({ hasText: 'May' }).locator('span').click();
    const drop4elm = await page.locator('[data-test=select4].ms-drop');
    expect(drop4elm).toBeVisible();
    await page.getByRole('button', { name: 'April, May' }).click();
  });
});
