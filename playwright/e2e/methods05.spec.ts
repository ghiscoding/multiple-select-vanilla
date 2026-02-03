import { expect, test } from '@playwright/test';

test.describe('Methods 05 - open/close', () => {
  test('open & close drop dynamically', async ({ page }) => {
    await page.goto('#/methods05');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop')).toBeVisible();

    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.locator('.ms-drop')).not.toBeVisible();

    // clicking on Close multiple times should keep the drop closed regardless
    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.locator('.ms-drop')).not.toBeVisible();

    await page.getByRole('button', { name: 'Open' }).click();
    await expect(page.locator('.ms-drop')).toBeVisible();

    // clicking on Open multiple times should keep the drop open regardless
    await page.getByRole('button', { name: 'Open' }).click();
    await expect(page.locator('.ms-drop')).toBeVisible();
  });
});
