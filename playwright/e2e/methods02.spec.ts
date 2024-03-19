import { test, expect } from '@playwright/test';

test.describe('Methods 02 - refreshOtions()', () => {
  test('clicking on the 1st button "refreshOptions" will remove the search filter', async ({ page }) => {
    await page.goto('#/methods02');
    await page.locator('.ms-parent[data-test=select1]').click();

    let searchLoc = await page.locator('.ms-drop[data-test=select1] .ms-search input');
    await expect(searchLoc).toHaveCount(1);
    await searchLoc.focus();
    await searchLoc.fill('1');
    await page.locator('label').filter({ hasText: 'text1' }).click();

    await page.getByRole('button', { name: 'refreshOptions' }).click();
    searchLoc = await page.locator('.ms-drop .ms-search input');
    await expect(searchLoc).toHaveCount(0);
  });

  test('clicking on the 2nd button "toggleDarkMode" will toggle dark mode on 2nd select', async ({ page }) => {
    await page.goto('#/methods02');
    await page.locator('.ms-parent[data-test=select2]').click();

    await expect(await page.locator('.ms-parent[data-test=select2]')).not.toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=select2]')).not.toHaveClass(/ms-dark-mode/);

    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
    await expect(await page.locator('.ms-parent[data-test=select2]')).toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=select2]')).toHaveClass(/ms-dark-mode/);

    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
    await expect(await page.locator('.ms-parent[data-test=select2]')).not.toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=select2]')).not.toHaveClass(/ms-dark-mode/);
  });
});
