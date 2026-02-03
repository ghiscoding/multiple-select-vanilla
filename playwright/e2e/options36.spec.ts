import { expect, test } from '@playwright/test';

test.describe('Options 36 - Infinite Scroll', () => {
  test('select should use infinite scroll', async ({ page }) => {
    await page.goto('#/options36');

    // -- 1st Select
    await page.locator('[data-test="select1"].ms-parent').click();

    const ulElm1 = await page.locator('[data-test="select1"] .ms-drop ul');
    const liElms1 = await page.locator('[data-test="select1"] .ms-drop ul li');
    await expect(liElms1.nth(0)).toContainText('Title 1');
    await liElms1.nth(0).click();
    await expect(page.locator('[data-test=select1].ms-parent .ms-choice span')).toHaveText('Title 1');

    // scroll near the end of the list
    await page.locator('[data-test="select1"].ms-parent').click();
    await ulElm1.evaluate(e => (e.scrollTop = e.scrollHeight - 10));
    await page.locator('[data-test="select1"] .ms-drop label').filter({ hasText: 'Title 25' }).click();

    // scroll completely to the end of the list & expect scrolling back to top
    await page.locator('[data-test="select1"].ms-parent').click();
    await ulElm1.evaluate(e => (e.scrollTop = e.scrollHeight));
    const selectDropLoc1 = await page.locator('div[data-test=select1] .ms-drop');
    const firstTitleLoc = await page.locator('div[data-test=select1] .ms-drop li:nth-of-type(1)');
    await expect(firstTitleLoc).toContainText('Title 1');
    await expect(firstTitleLoc).toHaveClass('hide-radio highlighted');
    await selectDropLoc1.press('Enter');

    // -- 2nd Select
    await page.locator('[data-test=select2].ms-parent').click();
    const ulElm2 = await page.locator('[data-test="select2"] .ms-drop ul');
    const liElms2 = await page.locator('[data-test="select2"] .ms-drop ul li');
    await expect(await liElms2.nth(4).locator('span').innerHTML()).toBe('<i class="fa fa-star"></i> Task 5');
    await liElms2.nth(4).click();
    await expect(await liElms2.nth(5).locator('span').innerHTML()).toBe('<i class="fa fa-star"></i> Task 6');
    await liElms2.nth(5).click();
    await page.getByRole('button', { name: '5, 6' }).click();

    // scroll to the middle and click 1003
    const selectLoc2 = await page.locator('div[data-test=select2].ms-parent');
    await selectLoc2.click();
    await ulElm2.evaluate(e => (e.scrollTop = e.scrollHeight / 2));
    await page.locator('[data-test="select2"] .ms-drop label').filter({ hasText: '1003' }).click();
    await page.getByRole('button', { name: '5, 6, 1003' });

    // scroll to near the end and select last 2 labels
    await ulElm2.evaluate(e => (e.scrollTop = e.scrollHeight - 300));
    await expect(await page.locator('[data-test="select2"] .ms-drop li[data-key=option_1995] label span').innerHTML()).toBe(
      '<i class="fa fa-star"></i> Task 1996',
    );
    await expect(await page.locator('[data-test="select2"] .ms-drop li[data-key=option_1996] label span').innerHTML()).toBe(
      '<i class="fa fa-star"></i> Task 1997',
    );
    await page.locator('[data-test="select2"] .ms-drop label').filter({ hasText: '1996' }).click();
    await page.locator('[data-test="select2"] .ms-drop label').filter({ hasText: '1997' }).click();
    await page.getByRole('button', { name: '5 of 2000 selected' });

    // pressing arrow down until we reach the end will scroll back to top of the list
    selectLoc2.press('ArrowDown');
    selectLoc2.press('ArrowDown');
    selectLoc2.press('ArrowDown');
    await expect(await page.locator('[data-test="select2"] .ms-drop li[data-key=option_1999]')).toHaveClass('highlighted');

    selectLoc2.press('ArrowDown'); // Task 1 (scrolled back to top)

    const firstTaskLoc = await page.locator('div[data-test=select2] .ms-drop li:nth-of-type(1)');
    await expect(firstTaskLoc).toContainText('Task 1');
    // await expect(await page.locator('[data-test="select2"] .ms-drop li[data-key=option_0]')).toHaveClass('highlighted');
  });
});
