import { test, expect } from '@playwright/test';

test.describe('Methods 07 - checkAll/uncheckAll', () => {
  test('calling checkAll/uncheckAll should be reflected in the select dropdown', async ({ page }) => {
    await page.goto('#/methods07');
    await expect(await page.locator('[data-test=select1].ms-parent .ms-choice span')).toHaveText('');
    await expect(await page.locator('[data-test=select2].ms-parent .ms-choice span')).toHaveText('');
    await expect(await page.locator('[data-test=select1].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();
    await expect(await page.locator('[data-test=select2].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();

    await page.getByRole('button', { name: 'Check All', exact: true }).click();
    await expect(await page.locator('[data-test=select1].ms-drop .ms-select-all input[type=checkbox]')).toBeChecked();
    await expect(await page.locator('[data-test=select2].ms-drop .ms-select-all input[type=checkbox]')).toBeChecked();

    await page.getByRole('button', { name: 'Uncheck All' }).click();
    await expect(await page.locator('[data-test=select1].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();
    await expect(await page.locator('[data-test=select2].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();
  });
});
