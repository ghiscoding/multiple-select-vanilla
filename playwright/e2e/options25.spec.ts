import { expect, test } from '@playwright/test';

test.describe('Options 25 - Show OK Button', () => {
  test('show OK button on multiple select only', async ({ page }) => {
    await page.goto('#/options25');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.getByRole('option', { name: 'April' }).click();
    await page.getByRole('option').filter({ hasText: 'March' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'February' }).locator('span').click();
    await page.getByRole('button', { name: 'OK' }).click();
    await expect(page.locator('div[data-test=select1] .ms-drop')).toBeHidden();

    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByRole('option', { name: 'Group 1' }).click();
    await page.getByRole('option', { name: 'Group 2' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await expect(page.locator('div[data-test=select2] .ms-drop')).toBeHidden();

    await page.locator('[data-test=select3].ms-parent').click();
    await page.locator('div:nth-child(2) > label > .icon-checkbox-container').click();
    await page.getByRole('button', { name: 'OK' }).click();
    await expect(page.locator('div[data-test=select3] .ms-drop')).toBeHidden();

    await page.locator('[data-test=select4].ms-parent').click();
    await page.locator('[data-test=select4] ul > li').nth(2).click();
    await page.locator('span').filter({ hasText: 'Third' });
    await expect(page.locator('div[data-test=select4] .ms-drop')).toBeHidden();
  });

  test('Tab and Shift+Tab to switch from OK button to List', async ({ page }) => {
    // 1st select
    await page.goto('#/options25');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.getByRole('option', { name: 'April' }).click();
    await page.getByRole('option').filter({ hasText: 'March' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'February' }).locator('span').click();
    await expect(page.locator('div[data-test=select1] .ms-drop')).not.toBeHidden();
    await page.keyboard.press('Tab');
    await expect(page.locator('div[data-test=select1] .ms-ok-button')).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('div[data-test=select1] .ms-select-all input')).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('div[data-test=select1] .ms-drop')).toBeHidden();

    // last select Shift+Tab will close drop
    await page.locator('[data-test=select4].ms-parent').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Shift+Tab');
    await expect(page.locator('div[data-test=select4] .ms-drop')).toBeHidden();
  });
});
