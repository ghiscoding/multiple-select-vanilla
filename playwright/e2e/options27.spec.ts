import { test, expect } from '@playwright/test';

test.describe('Options 27 - Text Template', () => {
  test('option labels & selected options shows as html', async ({ page }) => {
    await page.goto('#/options27');
    await page.locator('.ms-parent').click();
    const optionLoc1 = await page.locator('.ms-drop ul li').nth(0);
    optionLoc1.click();
    await expect(optionLoc1.locator('label span')).toHaveText('January');
    const spanLoc1 = await optionLoc1.locator('span').innerHTML();
    await expect(spanLoc1).toBe('<i class="fa fa-star"></i>January');

    const optionLoc4 = await page.locator('.ms-drop ul li').nth(3);
    optionLoc4.click();
    await expect(optionLoc4.locator('label span')).toHaveText('April');
    const spanLoc4 = await optionLoc4.locator('span').innerHTML();
    await expect(spanLoc4).toBe('<i class="fa fa-star"></i>April');

    await page.waitForTimeout(90);
    await expect(page.locator('.ms-choice span')).toHaveText('January, April');
    const parentSpanLoc = await page.locator('.ms-parent .ms-choice span').innerHTML();
    await expect(parentSpanLoc).toBe('<i class="fa fa-star"></i>January, <i class="fa fa-star"></i>April');
  });
});
