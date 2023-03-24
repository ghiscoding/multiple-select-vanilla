import { test, expect } from '@playwright/test';

test.describe('Methods 08 - checkAll/uncheckAll', () => {
  test('calling checkAll/uncheckAll should be reflected in the select dropdown', async ({ page }) => {
    await page.goto('#/methods08');
    await expect(page.locator('[data-test=select1].ms-parent .ms-choice span')).toHaveText('');
    await expect(page.locator('[data-test=select2].ms-parent .ms-choice span')).toHaveText('');
    await expect(page.locator('[data-test=select1].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();
    await expect(page.locator('[data-test=select2].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();

    await page.getByRole('button', { name: 'Check Invert', exact: true }).click();
    await expect(page.locator('[data-test=select1].ms-drop .ms-select-all input[type=checkbox]')).toBeChecked();
    await expect(page.locator('[data-test=select2].ms-drop .ms-select-all input[type=checkbox]')).toBeChecked();

    await page.getByRole('button', { name: 'Check Invert' }).click();
    await expect(page.locator('[data-test=select1].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();
    await expect(page.locator('[data-test=select2].ms-drop .ms-select-all input[type=checkbox]')).not.toBeChecked();
  });
});
