import { test, expect } from '@playwright/test';

test.describe('Example 01 - Basic Select', () => {
  test('test', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000/#/example01');

    await page.locator('div[data-test=select1] .ms-choice').filter({ hasText: 'First' }).click();
    await expect(await page.locator('div[data-test=select1] .ms-drop li.hide-radio').count()).toBe(4);
    await page.locator('div[data-test=select1] .ms-drop li label').filter({ hasText: 'Fourth' }).click();

    const optGroups = await page.locator('.group.hide-radio .optgroup.disabled');
    const liElms = await page.locator('div[data-test=select2] .option-level-1');
    await expect(optGroups).toBeDefined();
    await expect(await optGroups.count()).toBe(3);
    await expect(await liElms.count()).toBe(9);
    await expect(optGroups.nth(0)).toContainText('Group 1');
    await expect(optGroups.nth(1)).toContainText('Group 2');
    await expect(optGroups.nth(2)).toContainText('Group 3');

    await page.getByRole('button', { name: 'Option 1' }).click();
    await page.getByText('Group 1').click();
    await page.locator('span').filter({ hasText: 'Option 3' }).click();
    await page.getByRole('button', { name: 'Option 3' }).click();
    await page.getByText('Group 2').click();
    await page.locator('span').filter({ hasText: 'Option 5' }).click();
  });
});
