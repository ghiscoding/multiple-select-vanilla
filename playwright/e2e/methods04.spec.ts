import { expect, test } from '@playwright/test';

test.describe('Methods 04 - enable/disable', () => {
  test('disabling & enabling drop dynamically', async ({ page }) => {
    await page.goto('#/methods04');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop')).toBeVisible();

    await page.getByRole('button', { name: 'Disable' }).click();
    await expect(page.locator('.ms-choice')).toHaveClass('ms-choice disabled');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop')).not.toBeVisible();

    await page.getByRole('button', { name: 'Enable' }).click();
    await expect(page.locator('.ms-choice')).toHaveClass('ms-choice');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop')).toBeVisible();
  });
});
