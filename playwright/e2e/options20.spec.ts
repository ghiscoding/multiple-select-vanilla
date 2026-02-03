import { expect, test } from '@playwright/test';

test.describe('Options 20 - Filter Placeholder', () => {
  test('select drop filter has a placeholder text', async ({ page }) => {
    await page.goto('#/options20');
    await page.getByRole('button').click();
    const placeholderLocator = await page.getByPlaceholder('The filter placeholder');
    expect(placeholderLocator).toHaveCount(1);
    await placeholderLocator.focus();
    await placeholderLocator.pressSequentially('de');
    await page.getByRole('option', { name: 'def' }).click();
    await page.getByRole('option', { name: 'cde' }).click();
    const selectAllLoc = await page.locator('.ms-select-all .icon-checkbox-container div');
    await expect(selectAllLoc).toHaveClass('ms-icon ms-icon-check');
    await expect(page.locator('.ms-drop input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('ul li.selected input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('.ms-choice span')).toHaveText('cde, def');
    await expect(page.getByRole('button', { name: 'cde, def' })).toHaveCount(1);
  });
});
