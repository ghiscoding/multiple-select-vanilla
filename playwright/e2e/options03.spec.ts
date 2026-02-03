import { expect, test } from '@playwright/test';

test.describe('Options 03 - Hide Select All', () => {
  test('multiple select does not show Select All', async ({ page }) => {
    await page.goto('#/options03');
    await page.getByRole('button').click();
    const selectAllElm = await page.locator('.ms-select-all');
    expect(selectAllElm).toHaveCount(0);

    await page.getByRole('option', { name: 'Third' }).click();
    await page.getByRole('option', { name: 'Second' }).click();
    await page.getByRole('button', { name: 'Second, Third' }).click();
  });
});
