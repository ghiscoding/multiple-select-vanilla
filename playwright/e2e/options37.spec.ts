import { test, expect } from '@playwright/test';

test.describe('Option 37 - Navigation Highlight', () => {
  test('first select with single group select', async ({ page }) => {
    await page.goto('#/options37');

    // 1st select
    await page.locator('[data-test="select1"].ms-parent').click();
    const optGroups = await page.locator('.group.hide-radio .optgroup.disabled');
    const liElms = await page.locator('div[data-test=select1] .option-level-1');
    await expect(optGroups).toBeDefined();
    await expect(optGroups).toHaveCount(3);
    await expect(liElms).toHaveCount(9);
    await expect(optGroups.nth(0)).toContainText('Group 1');
    await expect(optGroups.nth(1)).toContainText('Group 2');
    await expect(optGroups.nth(2)).toContainText('Group 3');
    page.keyboard.press('ArrowDown');
    page.keyboard.press('ArrowDown');
    page.keyboard.press('Space');
    await expect(page.locator('[data-test=select1].ms-parent .ms-choice span')).toHaveText('Option 3');
    await expect(await page.locator('div[data-test=select1].ms-parent')).not.toHaveClass('ms-parent-open');

    // 2nd select
    await page.locator('[data-test="select2"].ms-parent').click();
    page.keyboard.press('ArrowDown');
    page.keyboard.press('ArrowDown');
    page.keyboard.press('Space');
    page.keyboard.press('ArrowDown');
    page.keyboard.press('Enter');
    await expect(page.locator('[data-test=select2].ms-parent .ms-choice span')).toHaveText('February, March');
    await page.locator('[data-test="select2"].ms-parent').click();
    await expect(await page.locator('div[data-test=select2].ms-parent')).not.toHaveClass('ms-parent-open');

    // 3rd select
    await page.locator('[data-test="select3"].ms-parent').click();
    page.keyboard.press('ArrowDown');
    page.keyboard.press('Space');
    await expect(page.locator('[data-test=select3].ms-parent .ms-choice span')).toHaveText('4 of 9 selected');
    page.keyboard.press('ArrowDown');
    page.keyboard.press('Enter');
    await expect(page.locator('[data-test=select3].ms-parent .ms-choice span')).toHaveText('[Group 1: Option 1], [Group 2: Option 5, Option 6]');
    page.keyboard.press('ArrowUp');
    page.keyboard.press('Space');
    await expect(page.locator('[data-test=select3].ms-parent .ms-choice span')).toHaveText('4 of 9 selected');
    await expect(await page.locator('div[data-test=select3].ms-parent')).not.toHaveClass('ms-parent-open');
    await page.locator('[data-test="select3"].ms-parent').click();

    // 4th select
    await page.locator('[data-test="select4"].ms-parent').click();
    page.keyboard.press('ArrowDown');
    page.keyboard.press('Enter');
    await page.keyboard.type('de');
    await page.getByLabel('def').check();
    await page.getByLabel('cde').check();
    const selectAllLoc = await page.locator('[data-test=select4] .ms-select-all input[type=checkbox]');
    expect(selectAllLoc).toBeChecked();
    await expect(page.locator('[data-test=select4].ms-drop input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('[data-test=select4].ms-drop ul li.selected input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('abc, cde, def');
    await expect(page.getByRole('button', { name: 'cde, def' })).toHaveCount(1);
  });
});
