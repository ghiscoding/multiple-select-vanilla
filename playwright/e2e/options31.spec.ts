import { expect, test } from '@playwright/test';

test.describe('Options 31 - Use Select Option as Label', () => {
  test('both select show selected value numbers & 2nd select can also render value number with html', async ({ page }) => {
    await page.goto('#/options31');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.locator('[data-test=select1].ms-drop ul li').nth(3).click();
    const parentSpanLoc1 = await page.locator('[data-test=select1].ms-parent .ms-choice span');
    await expect(parentSpanLoc1).toHaveText('3, 4, 6');
    await page.locator('[data-test=select1].ms-parent').click();

    const parentSpanHtml2 = await page.locator('[data-test=select2].ms-parent .ms-choice span').innerHTML();
    await expect(parentSpanHtml2).toBe('<i class="fa fa-star"></i>1');
    await page.locator('[data-test=select2].ms-parent').click();
    const dropSpanHtml2 = await page.locator('[data-test=select2].ms-drop ul li span').nth(0).innerHTML();
    await expect(dropSpanHtml2).toBe('<i class="fa fa-star"></i> January');
    const optionLoc4 = await page.locator('[data-test=select2].ms-drop ul li').nth(3);
    optionLoc4.click();
    await expect(optionLoc4.locator('label span')).toHaveText('April');
    await page.waitForTimeout(75);
    const parentSpanLoc4 = await page.locator('[data-test=select2].ms-parent .ms-choice span').innerHTML();
    await expect(parentSpanLoc4).toBe('<i class="fa fa-star"></i>1, 4');
  });
});
