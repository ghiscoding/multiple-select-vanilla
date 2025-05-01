import { test, expect } from '@playwright/test';

test.describe('Options 41 - Pre-Sort Data', () => {
  test('all select dropdown should have data pre-filtered', async ({ page }) => {
    await page.goto('#/options41');

    // 1st select
    await page.locator('div[data-test=select1].ms-parent').click();
    const select1LiElms = await page.locator('div[data-test=select1] li[role="option"]');
    await expect(select1LiElms).toHaveCount(12);
    const select1li1 = await page.locator('div[data-test=select1] .ms-drop li').nth(0);
    await expect(await select1li1.locator('label')).toHaveText('December');
    const select1li2 = await page.locator('div[data-test=select1] .ms-drop li').nth(1);
    await expect(await select1li2.locator('label')).toHaveText('November');
    const select1li3 = await page.locator('div[data-test=select1] .ms-drop li').nth(2);
    await expect(await select1li3.locator('label')).toHaveText('October');
    await page.locator('div[data-test=select1].ms-parent').click();

    // 2nd select
    await page.locator('div[data-test=select2].ms-parent').click();
    const select2GroupElms = await page.locator('div[data-test=select2] li.group');
    const select2li1 = await page.locator('div[data-test=select2] .ms-drop li.group').nth(0);
    await expect(await select2li1.locator('label.optgroup')).toHaveText('Group 3');
    const select2li2 = await page.locator('div[data-test=select2] .ms-drop li.group').nth(1);
    await expect(await select2li2.locator('label.optgroup')).toHaveText('Group 2');
    await expect(select2GroupElms).toHaveCount(3);
    await page.locator('div[data-test=select2].ms-parent').click();

    // 3rd select
    await page.locator('div[data-test=select3].ms-parent').click();
    const select3LiElms = await page.locator('div[data-test=select3] li[role="option"]');
    await expect(select3LiElms).toHaveCount(12);
    const select3li1 = await page.locator('div[data-test=select3] .ms-drop li').nth(0);
    await expect(await select3li1.locator('label')).toHaveText('December');
    const select3li2 = await page.locator('div[data-test=select3] .ms-drop li').nth(1);
    await expect(await select3li2.locator('label')).toHaveText('November');
    const select3li3 = await page.locator('div[data-test=select3] .ms-drop li').nth(2);
    await expect(await select3li3.locator('label')).toHaveText('October');
    await page.locator('div[data-test=select3].ms-parent').click();

    // 4th select
    await page.locator('div[data-test=select4].ms-parent').click();
    const select4GroupElms = await page.locator('div[data-test=select4] li.group');
    const select4li1 = await page.locator('div[data-test=select4] .ms-drop li.group').nth(0);
    await expect(await select4li1.locator('label.optgroup')).toHaveText('Q4');
    const select4li2 = await page.locator('div[data-test=select4] .ms-drop li.group').nth(1);
    await expect(await select4li2.locator('label.optgroup')).toHaveText('Q3');
    await expect(select4GroupElms).toHaveCount(4);
    await page.locator('div[data-test=select4].ms-parent').click();
  });
});
