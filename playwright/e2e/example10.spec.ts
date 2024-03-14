import { test, expect } from '@playwright/test';

test.describe('Example 10 - Large Select Dataset with Virtual Scroll', () => {
  test('select should use virtual scroll', async ({ page }) => {
    await page.goto('#/example10');

    // -- 1st Select
    await page.locator('[data-test="select10-1"].ms-parent').click();

    const ulElm1 = await page.locator('[data-test="select10-1"] .ms-drop ul');
    const liElms1 = await page.locator('[data-test="select10-1"] .ms-drop ul li');
    await expect(liElms1.nth(0)).toContainText('0');
    await liElms1.nth(0).click();
    await expect(liElms1.nth(1)).toContainText('1');
    await liElms1.nth(1).click();
    await page.getByRole('button', { name: '0, 1' }).click();

    // scroll to the middle and click 5001
    await page.locator('[data-test="select10-1"].ms-parent').click();
    await ulElm1.evaluate(e => (e.scrollTop = e.scrollHeight / 2));
    await page.locator('[data-test="select10-1"] .ms-drop label').filter({ hasText: '5001' }).click();
    await page.getByRole('button', { name: '0, 1, 5001' });

    // scroll to the end and select last 2 labels
    await ulElm1.evaluate(e => (e.scrollTop = e.scrollHeight));
    await page.locator('label').filter({ hasText: '9998' }).click();
    await page.locator('label').filter({ hasText: '9999' }).click();
    await page.getByRole('button', { name: '5 of 10000 selected' });

    // filter with text 999 and expect 9998 & 9999 to show up
    await page.getByRole('textbox', { name: '🔎︎' }).fill('999');
    await page.locator('label').filter({ hasText: '9998' }).click();
    await page.locator('label').filter({ hasText: '9999' }).click();
    await page.getByRole('button', { name: '0, 1, 5001' }).click();

    // clear filter, scroll back to top and expect 0,1 to still be checked
    await page.locator('[data-test="select10-1"].ms-parent').click();
    await page.locator('[data-test="select10-1"] .ms-search .ms-icon-close').click();
    await ulElm1.evaluate(e => (e.scrollTop = 0));
    await expect(liElms1.nth(0)).toContainText('0');
    await expect(liElms1.nth(1)).toContainText('1');
    expect(await liElms1.nth(0).locator('input[type=checkbox][data-key=option_0]').isChecked()).toBeTruthy();
    expect(await liElms1.nth(1).locator('input[type=checkbox][data-key=option_1]').isChecked()).toBeTruthy();
    expect(await liElms1.nth(2).locator('input[type=checkbox][data-key=option_2]').isChecked()).toBeFalsy();

    // scroll back to middle and expect 5001 to still be checked
    await ulElm1.evaluate(e => (e.scrollTop = e.scrollHeight / 2));
    expect(await page.locator('label').filter({ hasText: '5001' })).toBeVisible();
    expect(await liElms1.locator('input[type=checkbox][data-key=option_5001]').isChecked()).toBeTruthy();
    await page.locator('[data-test=select10-1].ms-parent').click(); // close drop

    // -- 2nd Select
    await page.locator('[data-test=select10-2].ms-parent').click();
    const ulElm2 = await page.locator('[data-test="select10-2"] .ms-drop ul');
    const liElms2 = await page.locator('[data-test="select10-2"] .ms-drop ul li');
    await expect(await liElms2.nth(4).locator('span').innerHTML()).toBe('<i class="fa fa-star"></i> Task 4');
    await liElms2.nth(4).click();
    await expect(await liElms2.nth(5).locator('span').innerHTML()).toBe('<i class="fa fa-star"></i> Task 5');
    await liElms2.nth(5).click();
    await page.getByRole('button', { name: '4, 5' }).click();

    // scroll to the middle and click 5003
    await page.locator('[data-test="select10-2"].ms-parent').click();
    await ulElm2.evaluate(e => (e.scrollTop = e.scrollHeight / 2));
    await page.locator('[data-test="select10-2"] .ms-drop label').filter({ hasText: '5003' }).click();
    await page.getByRole('button', { name: '4, 5, 5003' });

    // scroll to the end and select last 2 labels
    await ulElm2.evaluate(e => (e.scrollTop = e.scrollHeight));
    await expect(await page.locator('[data-test="select10-2"] .ms-drop li[data-key=option_9995] label span').innerHTML()).toBe(
      '<i class="fa fa-star"></i> Task 9995',
    );
    await expect(await page.locator('[data-test="select10-2"] .ms-drop li[data-key=option_9996] label span').innerHTML()).toBe(
      '<i class="fa fa-star"></i> Task 9996',
    );
    await page.locator('[data-test="select10-2"] .ms-drop label').filter({ hasText: '9995' }).click();
    await page.locator('[data-test="select10-2"] .ms-drop label').filter({ hasText: '9996' }).click();
    await page.getByRole('button', { name: '5 of 10000 selected' });

    // filter with text 999 and expect 9995 & 9996 to show up
    await page.getByRole('textbox', { name: '🔎︎' }).fill('999');
    await page.locator('[data-test="select10-2"] .ms-drop label').filter({ hasText: '9995' }).click();
    await page.locator('[data-test="select10-2"] .ms-drop label').filter({ hasText: '9996' }).click();
    await page.getByRole('button', { name: '4, 5, 5003' }).click();

    // clear filter, scroll back to top and expect 0,1 to still be checked
    await page.locator('[data-test="select10-2"].ms-parent').click();
    await page.locator('[data-test="select10-2"] .ms-search .ms-icon-close').click();
    await ulElm2.evaluate(e => (e.scrollTop = 0));
    await expect(await liElms2.nth(4).locator('span').innerHTML()).toBe('<i class="fa fa-star"></i> Task 4');
    await expect(await liElms2.nth(5).locator('span').innerHTML()).toBe('<i class="fa fa-star"></i> Task 5');
    expect(await liElms2.nth(4).locator('input[type=checkbox][data-key=option_4]').isChecked()).toBeTruthy();
    expect(await liElms2.nth(5).locator('input[type=checkbox][data-key=option_5]').isChecked()).toBeTruthy();
    expect(await liElms2.nth(6).locator('input[type=checkbox][data-key=option_6]').isChecked()).toBeFalsy();

    // scroll back to middle and expect 5003 to still be checked
    await ulElm2.evaluate(e => (e.scrollTop = e.scrollHeight / 2));
    expect(await page.locator('[data-test="select10-2"] .ms-drop label').filter({ hasText: '5003' })).toBeVisible();
    expect(await liElms2.locator('input[type=checkbox][data-key=option_5003]').isChecked()).toBeTruthy();
    await page.locator('[data-test=select10-2].ms-parent').click(); // close drop
  });
});
