import { expect, test } from '@playwright/test';

test.describe('Methods 10 - refresh() method', () => {
  test('adding new options with disabled or selected in select drop', async ({ page }) => {
    await page.goto('#/methods10');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li label input[type=checkbox]')).toHaveCount(3);
    await expect(page.locator('.ms-parent .ms-choice span')).toHaveText('');

    await page.getByPlaceholder('Enter text').click();
    await page.getByPlaceholder('Enter text').fill('new disabled option');
    await page.locator('#refreshDisabled').check();
    await page.locator('#refreshSelected').check();
    await page.getByRole('button', { name: 'Add + Refresh' }).click();

    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li label input[type=checkbox]')).toHaveCount(4);
    let selectedLoc = await page.locator('.ms-drop li.selected');
    await expect(selectedLoc).toHaveCount(1);
    await expect(selectedLoc.locator('label')).toHaveClass('disabled');
    await expect(page.locator('.ms-parent .ms-choice span')).toHaveText('new disabled option');

    await page.getByPlaceholder('Enter text').click();
    await page.getByPlaceholder('Enter text').fill('enabled & unselected option');
    await page.locator('#refreshDisabled').uncheck();
    await page.locator('#refreshSelected').uncheck();
    await page.getByRole('button', { name: 'Add + Refresh' }).click();
    await expect(page.locator('.ms-parent .ms-choice span')).toHaveText('new disabled option');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li label input[type=checkbox]')).toHaveCount(5);
    selectedLoc = await page.locator('.ms-drop li.selected');
    await expect(selectedLoc).toHaveCount(1);
  });
});
