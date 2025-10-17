import { test, expect } from '@playwright/test';

test.describe('Option 37 - Navigation Highlight', () => {
  test('first select with single group select', async ({ page }) => {
    await page.goto('#/options37');

    // 1st select
    const parentSelectLoc1 = await page.locator('[data-test="select1"].ms-parent');
    await parentSelectLoc1.click();
    const optGroups = await page.locator('.group.hide-radio .optgroup.disabled');
    const liElms = await page.locator('div[data-test=select1] .option-level-1');
    await expect(optGroups).toBeDefined();
    await expect(optGroups).toHaveCount(3);
    await expect(liElms).toHaveCount(9);
    await expect(optGroups.nth(0)).toContainText('Group 1');
    await expect(optGroups.nth(1)).toContainText('Group 2');
    await expect(optGroups.nth(2)).toContainText('Group 3');
    await parentSelectLoc1.press('ArrowDown');
    await parentSelectLoc1.press('ArrowDown');
    await parentSelectLoc1.press('Space');
    await expect(page.locator('[data-test=select1].ms-parent .ms-choice span')).toHaveText('Option 3');
    await expect(await page.locator('div[data-test=select1].ms-parent')).not.toHaveClass('ms-parent-open');

    // 2nd select
    const parentSelectLoc2 = await page.locator('[data-test="select2"].ms-parent');
    await parentSelectLoc2.click();
    await parentSelectLoc2.press('ArrowDown');
    await parentSelectLoc2.press('ArrowDown');
    await parentSelectLoc2.press('Space');
    await parentSelectLoc2.press('ArrowDown');
    await parentSelectLoc2.press('Enter');
    await expect(page.locator('[data-test=select2].ms-parent .ms-choice span')).toHaveText('February, March');
    await page.locator('[data-test="select2"].ms-parent').click();
    await expect(await page.locator('div[data-test=select2].ms-parent')).not.toHaveClass('ms-parent-open');

    // // 3rd select
    const parentSelectLoc3 = await page.locator('[data-test="select3"].ms-parent');
    await parentSelectLoc3.click();
    await parentSelectLoc3.press('ArrowDown');
    await parentSelectLoc3.press('Space');
    await expect(page.locator('[data-test=select3].ms-parent .ms-choice span')).toHaveText('4 of 9 selected');
    await parentSelectLoc3.press('ArrowDown');
    await parentSelectLoc3.press('Enter');
    await expect(page.locator('[data-test=select3].ms-parent .ms-choice span')).toHaveText('[Group 1: Option 1], [Group 2: Option 5, Option 6]');
    await parentSelectLoc3.press('ArrowUp');
    await parentSelectLoc3.press('Space');
    await expect(page.locator('[data-test=select3].ms-parent .ms-choice span')).toHaveText('4 of 9 selected');
    await expect(await page.locator('div[data-test=select3].ms-parent')).not.toHaveClass('ms-parent-open');
    await page.locator('[data-test="select3"].ms-parent').click();

    // 4th select
    const parentSelectLoc4 = await page.locator('[data-test="select4"].ms-parent');
    await parentSelectLoc4.click();
    await parentSelectLoc4.press('ArrowDown');
    await parentSelectLoc4.press('Enter');
    await parentSelectLoc4.pressSequentially('de');
    await page.getByRole('option', { name: 'def' }).click();
    await page.getByRole('option', { name: 'cde' }).click();
    const selectAllLoc = await page.locator('[data-test=select4] .ms-select-all input[type=checkbox]');
    expect(selectAllLoc).toBeChecked();
    await expect(page.locator('[data-test=select4].ms-drop input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('[data-test=select4].ms-drop ul li.selected input[data-name="selectItem"]')).toHaveCount(2);
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('abc, cde, def');
    await expect(page.getByRole('button', { name: 'cde, def' })).toHaveCount(1);
  });
});
