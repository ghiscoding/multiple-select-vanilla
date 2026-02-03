import { expect, test } from '@playwright/test';

test.describe('Methods 11 - Destroy() method', () => {
  test('destroy & recreating the ms-select could be called multiple times', async ({ page }) => {
    await page.goto('#/methods11');
    await page.locator('.ms-parent').click();
    await page.getByRole('button', { name: 'Destroy' }).click();
    await expect(page.locator('.ms-drop li input[type=checkbox]')).toHaveCount(0);

    await page.getByRole('button', { name: 'Build' }).click();
    await expect(page.locator('.ms-drop li input[type=checkbox]')).toHaveCount(12);
    await page.locator('.ms-parent').click();

    await page.getByRole('button', { name: 'Destroy' }).click();
    await expect(page.locator('.ms-drop li input[type=checkbox]')).toHaveCount(0);

    await page.getByRole('button', { name: 'Build' }).click();
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li input[type=checkbox]')).toHaveCount(12);
  });
});
