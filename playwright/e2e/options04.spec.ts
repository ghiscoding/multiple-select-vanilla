import { test, expect } from '@playwright/test';

test.describe('Options 04 - Hide OptGroup', () => {
  test('no optgroup input should be found', async ({ page }) => {
    await page.goto('#/options04');
    await page.getByRole('button').click();
    await page.getByRole('option', { name: '2', exact: true }).click();
    await page.getByRole('option', { name: '1', exact: true }).click();
    await page.getByRole('option', { name: '3', exact: true }).click();
    await page.getByRole('option', { name: '4', exact: true }).click();
    await page.getByRole('option', { name: '5', exact: true }).click();
    await page.getByRole('option', { name: '5', exact: true }).click();
    await page.getByRole('option', { name: '5', exact: true }).click();
    await page.getByRole('button', { name: '5 of 15 selected' }).click();
    const optGroupCheckboxes = await page.locator('.optgroup input[type="checkbox"]');
    expect(optGroupCheckboxes).toHaveCount(0);
  });
});
