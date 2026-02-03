import { expect, test } from '@playwright/test';

test.describe('Options 40 - Pre-Filter Data', () => {
  test('all select dropdown should have data pre-filtered', async ({ page }) => {
    await page.goto('#/options40');

    // 1st select
    await page.locator('div[data-test=select1].ms-parent').click();
    await expect(await page.getByRole('option', { name: 'January' })).toHaveCount(0);
    await expect(await page.getByRole('option', { name: 'February' })).toHaveCount(1);
    await expect(await page.getByRole('option', { name: 'March' })).toHaveCount(0);
    await expect(await page.getByRole('option', { name: 'April' })).toHaveCount(1);
    await expect(await page.getByRole('option', { name: 'May' })).toHaveCount(1);
    const select1LiElms = await page.locator('div[data-test=select1] li[role="option"]');
    await expect(select1LiElms).toHaveCount(10);
    await page.locator('div[data-test=select1].ms-parent').click();

    // 2nd select
    await page.locator('div[data-test=select2].ms-parent').click();
    const select2GroupElms = await page.locator('div[data-test=select2] li.group');
    const select2LiElms = await page.locator('div[data-test=select2] li');
    await expect(select2GroupElms).toHaveCount(2);
    await expect(await select2GroupElms.getByText('Group 1')).toHaveCount(1);
    await expect(await select2LiElms.getByText('Option 1')).toHaveCount(1);
    await expect(await select2GroupElms.getByText('Group 2')).toHaveCount(0);
    await expect(await select2LiElms.getByText('Option 4')).toHaveCount(0);
    await expect(await select2GroupElms.getByText('Group 3')).toHaveCount(1);
    await expect(await select2LiElms.getByText('Option 7')).toHaveCount(1);
    await page.locator('div[data-test=select2].ms-parent').click();

    // 3rd select
    await page.locator('div[data-test=select3].ms-parent').click();
    await expect(await page.getByRole('option', { name: 'January' })).toHaveCount(1);
    await expect(await page.getByRole('option', { name: 'February' })).toHaveCount(0);
    await expect(await page.getByRole('option', { name: 'March' })).toHaveCount(1);
    await expect(await page.getByRole('option', { name: 'April' })).toHaveCount(0);
    await expect(await page.getByRole('option', { name: 'May' })).toHaveCount(1);
    const select3LiElms = await page.locator('div[data-test=select3] li[role="option"]');
    await expect(select3LiElms).toHaveCount(10);
    await page.locator('div[data-test=select3].ms-parent').click();

    // 4th select
    await page.locator('div[data-test=select4].ms-parent').click();
    const select4GroupElms = await page.locator('div[data-test=select4] li.group');
    const select4LiElms = await page.locator('div[data-test=select4] li');
    await expect(select4GroupElms).toHaveCount(3);
    await expect(await select4GroupElms.getByText('Q1')).toHaveCount(0);
    await expect(await select4LiElms.getByText('January')).toHaveCount(0);
    await expect(await select4GroupElms.getByText('Q2')).toHaveCount(1);
    await expect(await select4LiElms.getByText('April')).toHaveCount(1);
    await expect(await select4GroupElms.getByText('Q3')).toHaveCount(1);
    await expect(await select4LiElms.getByText('July')).toHaveCount(1);
    await page.locator('div[data-test=select4].ms-parent').click();
  });
});
