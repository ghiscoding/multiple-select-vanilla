import { test, expect } from '@playwright/test';

test.describe('Example 03 - Multiple Width', () => {
  test('each item should be around 44px wide and expect item selected to show in select parent element', async ({ page }) => {
    await page.goto('#/example03');
    await page.locator('div[data-test=select1].ms-parent').click();
    await page.getByRole('combobox').filter({ hasText: '30' }).locator('label');
    await page.getByRole('option', { name: '30' }).locator('label').click();
    await page.getByRole('option', { name: '15' }).click();
    let elm16 = await page.locator('label').filter({ hasText: '16' });
    await elm16.click();
    expect((await elm16!.boundingBox())!.width).toBe(54);

    elm16 = await page.locator('div[data-test=select1] .ms-drop li:nth-of-type(16)');
    await elm16.focus();
    await expect(elm16).toHaveClass('multiple highlighted selected');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('Space'); // unselect 15
    let parent1Span = await page.locator('div[data-test=select1] .ms-choice span');
    await expect(parent1Span).toHaveText('16, 30');
    await page.keyboard.press('Enter'); // reselect 15
    parent1Span = await page.locator('div[data-test=select1] .ms-choice span');
    await page.getByRole('button', { name: '15, 16, 30' }).click();
  });

  test('second select and expect optgroup selection to select the entire group when optgroup is selected', async ({ page }) => {
    await page.goto('#/example03');
    await page.locator('div[data-test=select2].ms-parent').click();
    await page.getByText('Group 1').click();
    await page.getByRole('button', { name: '5 of 15 selected' }).click();
    await page.getByRole('button', { name: '5 of 15 selected' }).click();
    await page.getByRole('option', { name: '3', exact: true }).click();
    expect(await page.getByRole('option', { name: '3', exact: true }).locator('div').nth(1)).toHaveClass('ms-icon ms-icon-uncheck');
    await page.getByRole('button', { name: '4 of 15 selected' }).click();
    await page.getByRole('button', { name: '4 of 15 selected' }).click();
    await page.getByText('Group 2').click();
    await page.getByRole('option', { name: '11' }).locator('label').click();
    await page.getByRole('option', { name: '12' }).locator('span').click();
    await page.getByRole('option', { name: '13' }).locator('span').click();
    await page.getByRole('option', { name: '14' }).locator('span').click();
    await page.getByRole('option', { name: '15' }).locator('span').click();
    await page.getByRole('button', { name: '14 of 15 selected' }).click();
    await page.getByRole('button', { name: '14 of 15 selected' }).click();
    const selectAll2 = await page.locator('[data-test=select2] .ms-select-all .icon-checkbox-container div');
    await expect(selectAll2).toHaveClass('ms-icon ms-icon-minus');
    await page.getByRole('option', { name: '3', exact: true }).click();
    expect(await page.getByRole('option', { name: '3', exact: true }).locator('div').nth(1)).toHaveClass('ms-icon ms-icon-check');
    await expect(selectAll2).toHaveClass('ms-icon ms-icon-check');
    await page.getByRole('button', { name: 'All selected' });
    const selectAllLoc = await page.locator('div[data-test=select2] .ms-drop .ms-select-all');
    await selectAllLoc.hover();
    await page.keyboard.press('ArrowDown'); // unselect Group 1
    await page.keyboard.press('Space');
    let parent2Span = await page.locator('div[data-test=select2] .ms-choice span');
    await expect(parent2Span).toHaveText('10 of 15 selected');
    await page.keyboard.press('ArrowDown'); // unselect Group 1 -> 1st item
    await page.keyboard.press('Enter');
    parent2Span = await page.locator('div[data-test=select2] .ms-choice span');
    await expect(parent2Span).toHaveText('11 of 15 selected');
    const group1item1Loc = await page.locator('[data-test=select2] .ms-drop li:nth-of-type(2) input');
    await expect(group1item1Loc).toBeChecked();
  });
});
