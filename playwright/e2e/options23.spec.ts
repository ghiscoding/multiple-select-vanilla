import { test, expect } from '@playwright/test';

test.describe('Options 23 - Custom Filter', () => {
  test('filter starts with text', async ({ page }) => {
    await page.goto('#/options23');
    await page.locator('.ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' });
    await page.keyboard.type('g');
    await page.getByLabel('ghi').check();
    await page.getByRole('button', { name: 'ghi' }).click();
    let selectAllLoc = await page.locator('.ms-select-all input[type=checkbox]');
    expect(selectAllLoc).toBeChecked();
    await expect(page.locator('.ms-choice span')).toHaveText('ghi');

    await page.getByLabel('Case Sensitive').check();
    await page.locator('.ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' });
    await page.keyboard.type('g');
    selectAllLoc = await page.locator('.ms-select-all input[type=checkbox]');
    expect(selectAllLoc).toBeChecked();
    await expect(page.locator('.ms-choice span')).toHaveText('ghi');
    await page.locator('.ms-parent').click();

    // typing "G" shouldn't return anything but "No matches..."
    await page.locator('.ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' });
    await page.keyboard.type('G');
    await page.getByText('No matches found').click();
  });
});
