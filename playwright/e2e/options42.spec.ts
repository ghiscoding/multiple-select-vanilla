import { test, expect } from '@playwright/test';

test.describe('Options 42 - Lazy Load Data', () => {
  test('all select dropdown should lazy load data only once', async ({ page }) => {
    await page.goto('#/options42');

    // change server delay to 100ms
    const serverDelayLoc = await page.locator('#serverdelay');
    expect(serverDelayLoc).toHaveCount(1);
    await serverDelayLoc.fill('200');
    await page.waitForTimeout(200); // wait for ms-select to re-render

    // 1st select
    await page.locator('div[data-test=select1].ms-parent').click();
    let loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).toBeVisible();
    await expect(loading1Loc).toContainText('Loading...');
    await page.waitForTimeout(200);
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    let select1LiElms = await page.locator('div[data-test=select1] li[role="option"]');
    await expect(select1LiElms).toHaveCount(12);
    const select1li1 = await page.locator('div[data-test=select1] .ms-drop li:visible').nth(0);
    await expect(await select1li1.locator('label')).toHaveText('January');
    await select1li1.click();
    await expect(page.locator('.ms-drop').nth(0)).not.toBeVisible();

    // 1st select, open/close multiple times should now be instant without any lazy reloading
    await page.locator('div[data-test=select1].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    select1LiElms = await page.locator('div[data-test=select1] li[role="option"]');
    await expect(select1LiElms).toHaveCount(12);
    await page.locator('div[data-test=select1].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    await page.locator('div[data-test=select1].ms-parent').click();
    await page.locator('div[data-test=select1].ms-parent').click();

    // --
    // 2nd select
    await expect(await page.locator('div[data-test=select2] .ms-choice')).toHaveText('');
    await page.locator('div[data-test=select2].ms-parent').click();
    let loading2Loc = await page.locator('.ms-loading');
    await expect(loading2Loc).toBeVisible();
    await expect(loading2Loc).toContainText('Loading...');
    await page.waitForTimeout(200);
    loading2Loc = await page.locator('.ms-loading');
    await expect(loading2Loc).not.toBeVisible();

    await expect(await page.locator('div[data-test=select2] .ms-choice')).toHaveText('February, April');
    let select2LiElms = await page.locator('div[data-test=select2] li[role="option"]');
    await expect(select2LiElms).toHaveCount(12);
    const select2li1 = await page.locator('div[data-test=select2] .ms-drop li:visible').nth(0);
    await expect(await select2li1.locator('label')).toHaveText('January');
    const select2li2 = await page.locator('div[data-test=select2] .ms-drop li:visible').nth(1);
    await expect(await select2li2.locator('label')).toHaveText('February');
    const select2li3 = await page.locator('div[data-test=select2] .ms-drop li:visible').nth(2);
    await expect(await select2li3.locator('label')).toHaveText('March');
    await page.locator('div[data-test=select2].ms-parent').click();

    // 2nd select, open/close multiple times should now be instant without any lazy reloading
    await page.locator('div[data-test=select2].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    select2LiElms = await page.locator('div[data-test=select2] li[role="option"]');
    await expect(select2LiElms).toHaveCount(12);
    await page.locator('div[data-test=select2].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    await page.locator('div[data-test=select2].ms-parent').click();
    await page.locator('div[data-test=select2].ms-parent').click();

    // 3rd select
    await expect(await page.locator('div[data-test=select3] .ms-choice')).toHaveText('');
    await page.locator('div[data-test=select3].ms-parent').click();
    let loading3Loc = await page.locator('.ms-loading');
    await expect(loading3Loc).toBeVisible();
    await expect(loading3Loc).toContainText('Loading...');
    await page.waitForTimeout(200);
    loading3Loc = await page.locator('.ms-loading');
    await expect(loading3Loc).not.toBeVisible();

    await expect(await page.locator('div[data-test=select3] .ms-choice')).toHaveText('[Q1: February, March]');
    const select3GroupElms = await page.locator('div[data-test=select3] li.group');
    const select3li1 = await page.locator('div[data-test=select3] .ms-drop li.group').nth(0);
    await expect(await select3li1.locator('label.optgroup')).toHaveText('Q1');
    const select3li2 = await page.locator('div[data-test=select3] .ms-drop li.group').nth(1);
    await expect(await select3li2.locator('label.optgroup')).toHaveText('Q2');
    await expect(select3GroupElms).toHaveCount(4);
    await page.locator('div[data-test=select3].ms-parent').click();

    // 3rd select, open/close multiple times should now be instant without any lazy reloading
    await page.locator('div[data-test=select2].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    select2LiElms = await page.locator('div[data-test=select2] li[role="option"]');
    await expect(select2LiElms).toHaveCount(12);
    await page.locator('div[data-test=select2].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    await page.locator('div[data-test=select2].ms-parent').click();
    await page.locator('div[data-test=select2].ms-parent').click();

    // --
    // 2nd select
    await expect(await page.locator('div[data-test=select4] .ms-choice')).toHaveText('');
    await page.locator('div[data-test=select4].ms-parent').click();
    let loading4Loc = await page.locator('.ms-loading');
    await expect(loading4Loc).toBeVisible();
    await expect(loading4Loc).toContainText('Loading...');
    await page.waitForTimeout(200);
    loading4Loc = await page.locator('.ms-loading');
    await expect(loading4Loc).not.toBeVisible();

    await expect(await page.locator('div[data-test=select4] .ms-choice')).toHaveText('February, April');
    let select4LiElms = await page.locator('div[data-test=select4] li[role="option"]');
    await expect(select4LiElms).toHaveCount(12);
    const select4li1 = await page.locator('div[data-test=select4] .ms-drop li:visible').nth(0);
    await expect(await select4li1.locator('label')).toHaveText('January');
    const select4li2 = await page.locator('div[data-test=select4] .ms-drop li:visible').nth(1);
    await expect(await select4li2.locator('label')).toHaveText('February');
    const select4li3 = await page.locator('div[data-test=select4] .ms-drop li:visible').nth(2);
    await expect(await select4li3.locator('label')).toHaveText('March');
    await page.locator('div[data-test=select4].ms-parent').click();
    await expect(await page.locator('div[data-test=select4] .ms-drop .ms-ok-button')).toHaveText('OK');

    // 4nd select, open/close multiple times should now be instant without any lazy reloading
    await page.locator('div[data-test=select4].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    select4LiElms = await page.locator('div[data-test=select4] li[role="option"]');
    await expect(select4LiElms).toHaveCount(12);
    await page.locator('div[data-test=select4].ms-parent').click();
    loading1Loc = await page.locator('.ms-loading');
    await expect(loading1Loc).not.toBeVisible();
    await page.locator('div[data-test=select4].ms-parent').click();

    const placeholderLocator = await page.getByPlaceholder('filter placeholder');
    expect(placeholderLocator).toHaveCount(1);
    await placeholderLocator.focus();
    await placeholderLocator.pressSequentially('april');
    select4LiElms = await page.locator('div[data-test=select4] li[role="option"]');
    await expect(select4LiElms).toHaveCount(1);
    await page.locator('div[data-test=select4].ms-parent').click();
  });
});
