import { expect, test } from '@playwright/test';

test.describe('Options 43 - Close on Tab', () => {
  test('multiple select to close on Tab', async ({ page }) => {
    await page.goto('#/options43');

    // 1st Select
    await page.locator('div[data-test=single] .ms-choice').filter({ hasText: 'January' }).click();
    await expect(page.locator('div[data-test=single] .ms-drop')).toBeVisible();
    const li1LabelElms = await page.locator('div[data-test=single] li.hide-radio');
    await expect(li1LabelElms).toHaveCount(12);
    await page.keyboard.press('Tab');
    await expect(page.locator('div[data-test=single] .ms-drop')).not.toBeVisible();

    // 2nd Select
    await page.locator('div[data-test=radio] .ms-choice').filter({ hasText: 'February' }).click();
    const li2LabelElms = await page.locator('div[data-test=radio] li[role=option]');
    await expect(page.locator('div[data-test=radio] .ms-drop')).toBeVisible();
    await expect(li2LabelElms).toHaveCount(12);
    await page.keyboard.press('Tab');
    await expect(page.locator('div[data-test=radio] .ms-drop')).not.toBeVisible();

    // 3rd Select
    await page.locator('div[data-test=multiple] .ms-choice').click();
    const li3LabelElms = await page.locator('div[data-test=multiple] li:not(.option-divider)');
    await expect(page.locator('div[data-test=multiple] .ms-drop')).toBeVisible();
    await expect(li3LabelElms).toHaveCount(13);
    await page.keyboard.press('Tab');
    await expect(page.locator('div[data-test=multiple] .ms-drop')).not.toBeVisible();

    // 4th Select
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' }).click();
    await expect(page.locator('div[data-test=group] .ms-drop')).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(page.locator('div[data-test=group] .ms-drop')).not.toBeVisible();

    // 5th Select
    await page.locator('div[data-test=data1] .ms-choice').click();
    await expect(page.locator('div[data-test=data1] .ms-drop')).toBeVisible();
    await page.keyboard.press('Tab'); // 1st Tab will focus on "OK" button
    await expect(page.locator('div[data-test=data1] .ms-drop')).toBeVisible();
    await expect(page.locator('div[data-test=data1] .ms-ok-button')).toBeFocused();
    await page.keyboard.press('Tab'); // 2nd Tab will close the drop
    await expect(page.locator('div[data-test=data1] .ms-drop')).not.toBeVisible();
  });
});
