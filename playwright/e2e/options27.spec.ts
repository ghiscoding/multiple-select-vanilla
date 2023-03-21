import { test, expect } from '@playwright/test';

test.describe('Options 27 - Text Template', () => {
  test('option labels & selected options shows as html', async ({ page }) => {
    await page.goto('#/options27');
    await page.locator('.ms-parent').click();
    const optionLoc1 = await page.locator('.ms-drop ul li').nth(0);
    optionLoc1.click();
    expect(await optionLoc1.locator('label span')).toHaveText('January');
    expect(await optionLoc1.locator('span').innerHTML()).toBe('<i class="fa fa-star"></i>January');

    const optionLoc4 = await page.locator('.ms-drop ul li').nth(3);
    optionLoc4.click();
    expect(await optionLoc4.locator('label span')).toHaveText('April');
    expect(await optionLoc4.locator('span').innerHTML()).toBe('<i class="fa fa-star"></i>April');

    await page.waitForTimeout(75);
    expect(await page.locator('.ms-choice span')).toHaveText('January, April');
    expect(await page.locator('.ms-parent .ms-choice span').innerHTML()).toBe(
      '<i class="fa fa-star"></i>January, <i class="fa fa-star"></i>April'
    );
  });
});
