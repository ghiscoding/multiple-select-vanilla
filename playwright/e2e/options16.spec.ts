import { test, expect } from '@playwright/test';

test.describe('Options 16 - Open on Hover', () => {
  test('drop shows only after hovering the select element', async ({ page }) => {
    await page.goto('#/options16');
    let drop1elm = await page.locator('div .ms-drop');
    expect(drop1elm).toBeHidden();

    await page.locator('div .ms-parent').hover();
    drop1elm = await page.locator('div .ms-drop');
    expect(drop1elm).toBeVisible();

    await page.locator('h2').hover();
    drop1elm = await page.locator('div .ms-drop');
    expect(drop1elm).toBeHidden();
  });
});
