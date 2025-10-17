import { expect, test } from '@playwright/test';

test.describe('Options 43 - Close on Tab', () => {
  test('multiple select to close on Tab', async ({ page }) => {
    await page.goto('#/options43');

    // 1st Select
    const singleLoc1 = await page.locator('div[data-test=single] .ms-drop');
    await page.locator('div[data-test=single] .ms-choice').filter({ hasText: 'January' }).click();
    await expect(singleLoc1).toBeVisible();
    const li1LabelElms = await page.locator('div[data-test=single] li.hide-radio');
    await expect(li1LabelElms).toHaveCount(12);
    await singleLoc1.press('Tab');
    await expect(page.locator('div[data-test=single] .ms-drop')).not.toBeVisible();

    // 2nd Select
    const singleLoc2 = await page.locator('div[data-test=radio] .ms-drop');
    await page.locator('div[data-test=radio] .ms-choice').filter({ hasText: 'February' }).click();
    const li2LabelElms = await page.locator('div[data-test=radio] li[role=option]');
    await expect(singleLoc2).toBeVisible();
    await expect(li2LabelElms).toHaveCount(12);
    await singleLoc2.press('Tab');
    await expect(page.locator('div[data-test=radio] .ms-drop')).not.toBeVisible();

    // 3rd Select
    const singleLoc3 = await page.locator('div[data-test=multiple] .ms-drop');
    await page.locator('div[data-test=multiple] .ms-choice').click();
    const li3LabelElms = await page.locator('div[data-test=multiple] li:not(.option-divider)');
    await expect(singleLoc3).toBeVisible();
    await expect(li3LabelElms).toHaveCount(13);
    await singleLoc3.press('Tab');
    await expect(page.locator('div[data-test=multiple] .ms-drop')).not.toBeVisible();

    // 4th Select
    const singleLoc4 = await page.locator('div[data-test=group] .ms-drop');
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' }).click();
    await expect(singleLoc4).toBeVisible();
    await singleLoc4.press('Tab');
    await expect(page.locator('div[data-test=group] .ms-drop')).not.toBeVisible();

    // 5th Select
    const singleLoc5 = await page.locator('div[data-test=data1] .ms-drop');
    await page.locator('div[data-test=data1] .ms-choice').click();
    await expect(singleLoc5).toBeVisible();
    await singleLoc5.press('Tab'); // 1st Tab will focus on "OK" button
    await expect(page.locator('div[data-test=data1] .ms-drop')).toBeVisible();
    await expect(page.locator('div[data-test=data1] .ms-ok-button')).toBeFocused();
    await singleLoc5.press('Tab'); // 2nd Tab will close the drop
    await expect(page.locator('div[data-test=data1] .ms-drop')).not.toBeVisible();
  });
});
