import { test, expect } from '@playwright/test';

test.describe('Options 04 - Hide OptGroup', () => {
  test('no optgroup input should be found', async ({ page }) => {
    await page.goto('#/options04');
    await page.getByRole('button').click();
    await page.getByLabel('2', { exact: true }).check();
    await page.getByLabel('1', { exact: true }).check();
    await page.getByLabel('3', { exact: true }).check();
    await page.getByLabel('4', { exact: true }).check();
    await page.getByLabel('5', { exact: true }).check();
    await page.getByLabel('5', { exact: true }).uncheck();
    await page.getByLabel('5', { exact: true }).check();
    await page.getByRole('button', { name: '5 of 15 selected' }).click();
    const optGroupCheckboxes = await page.locator('.optgroup input[type="checkbox"]');
    expect(optGroupCheckboxes).toHaveCount(0);
  });
});
