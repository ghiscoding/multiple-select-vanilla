import { test } from '@playwright/test';

test.describe('Example 09 - Locale', () => {
  test('changing locale should be reflected in dropdown & selected text', async ({ page }) => {
    await page.goto('#/example09');
    await page.getByRole('button').nth(1).click();
    await page.getByText('[Select all]').click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'All selected' }).click();
    await page.getByRole('button', { name: 'All selected' }).click();
    await page.getByRole('button', { name: 'English' }).click();
    await page.locator('label').filter({ hasText: 'French' }).click();
    await page.getByRole('button', { name: 'Tous sélectionnés' }).click();
    await page.getByText('[Tout sélectionner]').click();
    await page.getByRole('button', { name: 'Fermer' }).click();
    await page.getByRole('button', { name: 'French' }).click();
    await page.locator('span').filter({ hasText: '简体中文' }).click();
    await page.getByRole('button').nth(1).click();
    await page.getByText('[全选]').click();
    await page.getByRole('button', { name: '关闭' }).click();
    await page.getByRole('button', { name: '简体中文' }).click();
    await page.locator('label').filter({ hasText: 'Vietnamese' }).click();
    await page.getByRole('button', { name: 'Chọn tất cả' }).click();
    await page.getByText('[Tất cả]').click();
    await page.getByRole('button', { name: 'Đóng' }).click();
  });
});
