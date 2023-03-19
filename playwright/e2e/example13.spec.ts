import { test, expect } from '@playwright/test';

test.describe('Example 13 - Destroy Select', () => {
  test('creating & destroying select multiple times', async ({ page }) => {
    await page.goto('#/example13');
    await page.getByRole('button', { name: 'Dynamically Create' }).click();
    await page.getByRole('button', { name: '1, 3, 4' }).click();
    await page.getByRole('button', { name: 'Destroy' }).click();
    expect(page.locator['[data-test="select1"]']).toBeUndefined();

    await page.locator('div').filter({ hasText: 'Use Select Option Label & Render HTML' });
    await page.getByRole('button', { name: 'Dynamically Create' }).click();
    await page.getByRole('button', { name: '1, 3, 4' }).click();
    await page.locator('label').filter({ hasText: 'January' }).click();
    await page.getByRole('button', { name: '3, 4' }).click();
  });
});
