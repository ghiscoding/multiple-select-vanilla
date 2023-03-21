import { test, expect } from '@playwright/test';

test.describe('Options 01 - Placeholder', () => {
  test('first and second select have placeholder', async ({ page }) => {
    await page.goto('#/options01');
    const selectElm1 = await page.locator('[data-test="select1"]');
    const placeholderElm1 = await page.locator('[data-test="select1"] .ms-placeholder');
    expect(placeholderElm1).toHaveText('Here is the placeholder via attribute');
    placeholderElm1.click();
    await selectElm1.locator('span').filter({ hasText: 'February' }).click();
    await selectElm1.locator('span').filter({ hasText: 'June' }).click();
    await page.getByRole('button', { name: 'February, June' }).click();

    const selectElm2 = await page.locator('[data-test="select2"]');
    const placeholderElm2 = await page.locator('[data-test="select2"] .ms-placeholder');
    expect(placeholderElm2).toHaveText('Here is the placeholder via javascript');
    placeholderElm2.click();
    await page.getByText('Group 2').click();
    await page.getByRole('button', { name: '[Group 2: Option 4, Option 5, Option 6]' }).click();
  });
});
