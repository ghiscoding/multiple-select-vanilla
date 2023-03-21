import { test, expect } from '@playwright/test';

test.describe('Options 31 - Use Select Option as Label', () => {
  test('both select show selected value numbers & 2nd select can also render value number with html', async ({ page }) => {
    await page.goto('#/options31');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.locator('[data-test=select1].ms-drop ul li').nth(3).click();
    expect(await page.locator('[data-test=select1].ms-parent .ms-choice span')).toHaveText('3, 4, 6');
    await page.locator('[data-test=select1].ms-parent').click();

    expect(await page.locator('[data-test=select2].ms-parent .ms-choice span').innerHTML()).toBe('<i class="fa fa-star"></i>1');
    await page.locator('[data-test=select2].ms-parent').click();
    expect(await page.locator('[data-test=select2].ms-drop ul li span').nth(0).innerHTML()).toBe(
      '<i class="fa fa-star"></i> January'
    );
    const optionLoc4 = await page.locator('[data-test=select2].ms-drop ul li').nth(3);
    optionLoc4.click();
    expect(await optionLoc4.locator('label span')).toHaveText('April');
    await page.waitForTimeout(75);
    expect(await page.locator('[data-test=select2].ms-parent .ms-choice span').innerHTML()).toBe(
      '<i class="fa fa-star"></i>1, 4'
    );
  });
});
