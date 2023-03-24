import { test, expect } from '@playwright/test';

test.describe('Options 20 - Filter Placeholder', () => {
  test('select drop filter has a placeholder text', async ({ page }) => {
    await page.goto('#/options20');
    await page.getByRole('button').click();
    const placeholderLocator = await page.getByPlaceholder('The filter placeholder');
    expect(placeholderLocator).toHaveCount(1);
    placeholderLocator.focus();
    await page.keyboard.type('de');
    await page.getByLabel('def').check();
    await page.getByLabel('cde').check();
    const selectAllLoc = await page.locator('.ms-select-all input[type=checkbox]');
    expect(selectAllLoc).toBeChecked();
    await expect(page.locator('.ms-drop input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('ul li.selected input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('.ms-choice span')).toHaveText('cde, def');
    await expect(page.getByRole('button', { name: 'cde, def' })).toHaveCount(1);
  });
});
