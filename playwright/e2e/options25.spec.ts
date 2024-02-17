import { test } from '@playwright/test';

test.describe('Options 25 - Show OK Button', () => {
  test('show OK button on multiple select only', async ({ page }) => {
    await page.goto('#/options25');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.getByRole('checkbox', { name: 'April' }).check();
    await page.getByRole('option').filter({ hasText: 'March' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'February' }).locator('span').click();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByLabel('Group 1').check();
    await page.getByLabel('Group 2').check();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.locator('[data-test=select3].ms-parent').click();
    await page.locator('[data-test=select3] .ms-select-all input[data-name="selectAll"]').click();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.locator('[data-test=select4].ms-parent').click();
    await page.locator('[data-test=select4] ul > li').nth(2).click();
    await page.locator('span').filter({ hasText: 'Third' });
  });
});
