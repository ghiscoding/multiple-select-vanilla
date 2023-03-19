import { test, expect } from '@playwright/test';

test.describe('Options 08 - Drop Up showing on top of select', () => {
  test('drop shows up (upward)', async ({ page }) => {
    await page.goto('#/options08');
    await page.getByRole('button').click();
    const dropParentElm = await page.locator('.ms-parent');
    const parentY = (await dropParentElm.boundingBox())!.y;
    expect(parentY).toBeGreaterThan(350);

    const dropElm = await page.locator('.ms-drop');
    const dropY = (await dropElm.boundingBox())!.y;
    expect(dropY).toBeLessThanOrEqual(100);

    await page.locator('span').filter({ hasText: 'April' }).click();
    await page.locator('span').filter({ hasText: 'May' }).click();
    await page.getByRole('button', { name: 'April, May' }).click();
  });
});
