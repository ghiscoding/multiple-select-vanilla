import { expect, test } from '@playwright/test';

test.describe('Options 42 - Lazy Load Data', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('#/options42');

    // change server delay to 100ms
    const serverDelayLoc = await page.locator('#serverdelay');
    expect(serverDelayLoc).toHaveCount(1);
    await serverDelayLoc.fill('200');
    await page.waitForTimeout(200); // wait for ms-select to re-render
  });

  test('1st select - lazy load with regular array', async ({ page }) => {
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
  });

  test('2nd select - lazy load with data array', async ({ page }) => {
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
    loading2Loc = await page.locator('.ms-loading');
    await expect(loading2Loc).not.toBeVisible();
    select2LiElms = await page.locator('div[data-test=select2] li[role="option"]');
    await expect(select2LiElms).toHaveCount(12);
    await page.locator('div[data-test=select2].ms-parent').click();
    loading2Loc = await page.locator('.ms-loading');
    await expect(loading2Loc).not.toBeVisible();
    await page.locator('div[data-test=select2].ms-parent').click();
    await page.locator('div[data-test=select2].ms-parent').click();
  });

  test('3rd select - lazy load with Option Groups', async ({ page }) => {
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
    await page.locator('div[data-test=select3].ms-parent').click();
    let select3LiElms = await page.locator('div[data-test=select3] li[role="option"]');
    loading3Loc = await page.locator('.ms-loading');
    await expect(loading3Loc).not.toBeVisible();
    select3LiElms = await page.locator('div[data-test=select3] li[role="option"]');
    await expect(select3LiElms).toHaveCount(16);
    await page.locator('div[data-test=select3].ms-parent').click();
    loading3Loc = await page.locator('.ms-loading');
    await expect(loading3Loc).not.toBeVisible();
    await page.locator('div[data-test=select3].ms-parent').click();
    await page.locator('div[data-test=select3].ms-parent').click();
  });

  // --
  test('4th select - lazy load with Filter & OK button', async ({ page }) => {
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

    // 4th select, open/close multiple times should now be instant without any lazy reloading
    await page.locator('div[data-test=select4].ms-parent').click();
    loading4Loc = await page.locator('.ms-loading');
    await expect(loading4Loc).not.toBeVisible();
    select4LiElms = await page.locator('div[data-test=select4] li[role="option"]');
    await expect(select4LiElms).toHaveCount(12);
    await page.locator('div[data-test=select4].ms-parent').click();
    loading4Loc = await page.locator('.ms-loading');
    await expect(loading4Loc).not.toBeVisible();
    await page.locator('div[data-test=select4].ms-parent').click();

    const placeholderLocator = await page.getByPlaceholder('filter placeholder');
    expect(placeholderLocator).toHaveCount(1);
    await placeholderLocator.focus();
    await placeholderLocator.pressSequentially('april');
    select4LiElms = await page.locator('div[data-test=select4] li[role="option"]');
    await expect(select4LiElms).toHaveCount(1);
    await page.locator('div[data-test=select4].ms-parent').click();
  });

  // 5th select - failure case
  test('5th select should show loading then failure icon and text on lazyData reject', async ({ page }) => {
    await page.goto('#/options42');

    // open the 5th select (failure case)
    await page.locator('div[data-test=select5].ms-parent').click();
    const loadingLoc = page.locator('div[data-test=select5] .ms-loading');
    await expect(loadingLoc).toBeVisible();
    await expect(loadingLoc).toContainText('Loading');

    // Wait for the failure to appear (should be after serverDelay)
    let failedIcon = page.locator('div[data-test=select5] .ms-icon-lazy-failed');
    await expect(failedIcon).toBeVisible({ timeout: 2000 });
    let failedText = page.locator('div[data-test=select5] .ms-lazy-failed');
    await expect(failedText).toBeVisible();
    await expect(failedText).toContainText('Failed to load data');

    // close/reopen should retry loading
    await page.locator('div[data-test=select5].ms-parent').click();
    await page.locator('div[data-test=select5].ms-parent').click();
    const loadingLoc2 = page.locator('div[data-test=select5] .ms-loading');
    await expect(loadingLoc2).toBeVisible();
    await expect(loadingLoc2).toContainText('Loading...');

    // Wait for the failure to appear (should be after serverDelay)
    failedIcon = page.locator('div[data-test=select5] .ms-icon-lazy-failed');
    await expect(failedIcon).toBeVisible({ timeout: 2000 });
    failedText = page.locator('div[data-test=select5] .ms-lazy-failed');
    await expect(failedText).toBeVisible();
    await expect(failedText).toContainText('Failed to load data');
  });
});
