import { test, expect } from '@playwright/test';

test.describe('Methods 02 - refreshOtions()', () => {
  test('calling the method will remove the search filter', async ({ page }) => {
    await page.goto('#/methods02');
    await page.locator('.ms-parent').click();
    let searchLoc = await page.locator('.ms-drop .ms-search input');
    expect(searchLoc).toHaveCount(1);
    await searchLoc.focus();
    await searchLoc.fill('1');
    await page.locator('label').filter({ hasText: 'text1' }).click();

    await page.getByRole('button', { name: 'refreshOptions' }).click();
    searchLoc = await page.locator('.ms-drop .ms-search input');
    expect(searchLoc).toHaveCount(0);
  });
});
