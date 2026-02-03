import { expect, test } from '@playwright/test';

test.describe('Options 23 - Custom Filter', () => {
  test('filter starts with text', async ({ page }) => {
    await page.goto('#/options23');
    await page.locator('.ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('g');
    await page.getByRole('option', { name: 'ghi' }).click();
    await page.getByRole('button', { name: 'ghi' }).click();
    let selectAllLoc = await page.locator('.ms-select-all .icon-checkbox-container div');
    await expect(selectAllLoc).toHaveClass('ms-icon ms-icon-check');
    await expect(page.locator('.ms-choice span')).toHaveText('ghi');

    await page.getByLabel('Case Sensitive').check();
    await page.locator('.ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('g');
    selectAllLoc = await page.locator('.ms-select-all .icon-checkbox-container div');
    await expect(selectAllLoc).toHaveClass('ms-icon ms-icon-check');
    await expect(page.locator('.ms-choice span')).toHaveText('ghi');
    await page.locator('.ms-parent').click();

    // typing "G" shouldn't return anything but "No matches..."
    await page.locator('.ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('G');
    await page.getByText('No matches found').click();
  });
});
