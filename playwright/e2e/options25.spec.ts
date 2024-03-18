import { test } from '@playwright/test';

test.describe('Options 25 - Show OK Button', () => {
  test('show OK button on multiple select only', async ({ page }) => {
    await page.goto('#/options25');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.getByRole('option', { name: 'April' }).click();
    await page.getByRole('option').filter({ hasText: 'March' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'February' }).locator('span').click();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByRole('option', { name: 'Group 1' }).click();
    await page.getByRole('option', { name: 'Group 2' }).click();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.locator('[data-test=select3].ms-parent').click();
    await page.locator('div:nth-child(2) > label > .icon-checkbox-container').click();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.locator('[data-test=select4].ms-parent').click();
    await page.locator('[data-test=select4] ul > li').nth(2).click();
    await page.locator('span').filter({ hasText: 'Third' });
  });
});
