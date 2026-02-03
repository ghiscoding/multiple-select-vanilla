import { expect, test } from '@playwright/test';

test.describe('Options 28 - Label Template', () => {
  test('option labels & selected options shows as html', async ({ page }) => {
    await page.goto('#/options28');
    await page.locator('.ms-parent').click();

    await page.locator('.ms-drop ul li label').nth(1).click();
    let parentSpanLoc = await page.locator('.ms-parent .ms-choice span').innerHTML();
    await expect(parentSpanLoc).toBe('[<i class="fa fa-star"></i>Group 1: Option 1]');

    const optgroup1 = await page.locator('.ms-drop ul label.optgroup').nth(0);
    optgroup1.click();
    await page.waitForTimeout(100);
    parentSpanLoc = await page.locator('.ms-parent .ms-choice span').innerHTML();
    await expect(parentSpanLoc).toBe('[<i class="fa fa-star"></i>Group 1: Option 1, Option 2, Option 3]');
  });
});
