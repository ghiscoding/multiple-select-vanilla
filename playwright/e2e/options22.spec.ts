import { test, expect } from '@playwright/test';

test.describe('Options 22 - Filter By Data Length', () => {
  test('filter shows only when data collection has over 10 items', async ({ page }) => {
    await page.goto('#/options22');
    await page.locator('[data-test="select1"].ms-parent').click();
    await expect(page.getByRole('textbox', { name: '🔎︎' })).toHaveCount(0);
    await page.getByRole('option').filter({ hasText: 'abc' }).locator('label').click();

    await page.locator('[data-test="select2"].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('g');
    await page.getByText('[Select all]').first().click();
    await page.getByRole('button', { name: 'efg, fgh, ghi' }).click();

    await page.locator('[data-test="select3"].ms-parent').click();
    await page.getByRole('option', { name: 'Group 2' }).click();
    await page.getByRole('button', { name: '[Group 2: Option 4, Option 5, Option 6]' }).click();

    await page.locator('[data-test="select4"].ms-parent').click();
    await page.getByRole('option', { name: 'Group 3' }).click();
    await page.getByRole('button', { name: '5 of 11 selected' }).click();
    await page.getByRole('button', { name: '5 of 11 selected' }).click();
    await page.getByRole('option').filter({ hasText: 'Group 1' }).locator('label').click();
    await page.getByRole('button', { name: '8 of 11 selected' }).click();
  });
});
