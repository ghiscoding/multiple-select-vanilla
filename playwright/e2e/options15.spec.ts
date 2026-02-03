import { expect, test } from '@playwright/test';

test.describe('Options 15 - Select keep open', () => {
  test('select stays open even when clicking outside the drop but will close when clicking on drop', async ({ page }) => {
    await page.goto('#/options15');
    await page.locator('div .ms-parent').click();

    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('label').filter({ hasText: 'March' }).click();

    await page.locator('body').click();
    let drop1elm = await page.locator('div .ms-drop');
    expect(drop1elm).toBeVisible();

    await page.locator('div.ms-parent').click();
    drop1elm = await page.locator('div .ms-drop');
    expect(drop1elm).toBeHidden();
  });
});
