import { test } from '@playwright/test';

test.describe('Methods 09 - focus/blur methods', () => {
  test('calling focus or blur method should apply it to the input', async ({ page }) => {
    await page.goto('#/methods09');
    await page.getByRole('button', { name: 'Focus' }).click();
    await page.locator('.ms-parent').press('Enter');
    await page.getByRole('button', { name: 'Blur' }).click();
    await page.getByRole('button', { name: 'Blur' }).press('Enter');
    await page.getByRole('button', { name: 'Focus' }).click();
    await page.locator('.ms-parent').press('Enter');
    await page.getByRole('button', { name: 'Blur' }).click();
  });
});
