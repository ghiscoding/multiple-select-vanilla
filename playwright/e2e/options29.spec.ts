import { test, expect } from '@playwright/test';

test.describe('Options 29 - Auto-Adjust Drop Position', () => {
  test('first select is showing dropdown & second select is showing dropup', async ({ page }) => {
    await page.goto('#/options29');
    await page.locator('[data-test=select1].ms-parent').click();
    const dropLoc1 = await page.locator('[data-test=select1].ms-drop');
    await expect(dropLoc1).toHaveClass('ms-drop bottom');

    await page.locator('[data-test=select2].ms-parent').click();
    const dropLoc2 = await page.locator('[data-test=select2].ms-drop');
    await expect(dropLoc2).toHaveClass('ms-drop top');
  });
});
