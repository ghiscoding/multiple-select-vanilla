import { expect, test } from '@playwright/test';

test.describe('Methods 13 - setData()', () => {
  test('should update options and data length after setData (basic array)', async ({ page }) => {
    await page.goto('#/methods13');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li:visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'text1' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text2' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text3' })).toBeVisible();
    await page.getByRole('button', { name: /setData \(basic array\)/ }).click();
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li:visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'Basic One' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Basic Two' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Basic Three' })).toBeVisible();
  });

  test('should update options and data length after setData (object)', async ({ page }) => {
    await page.goto('#/methods13');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li:visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'text1' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text2' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text3' })).toBeVisible();
    await page.getByRole('button', { name: /setData \(object\)/ }).click();
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li:visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'Object One' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Object Two' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Object Three' })).toBeVisible();
  });

  test('should update options and data length after setData (string array)', async ({ page }) => {
    await page.goto('#/methods13');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li:visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'text1' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text2' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text3' })).toBeVisible();
    await page.getByRole('button', { name: /setData \(string array\)/ }).click();
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li:visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'String One' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'String Two' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'String Three' })).toBeVisible();
  });

  test('should update options and data length after setData (group array)', async ({ page }) => {
    await page.goto('#/methods13');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li:visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'text1' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text2' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'text3' })).toBeVisible();

    await page.getByRole('button', { name: /setData \(group array\)/ }).click();
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop li.group:visible')).toHaveCount(2);
    await expect(page.locator('.ms-drop li:not(.group):visible')).toHaveCount(3);
    await expect(page.locator('span').filter({ hasText: 'Group One' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Group Two' })).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Group Three' })).toBeVisible();
  });
});
