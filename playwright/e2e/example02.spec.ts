import { test, expect } from '@playwright/test';

test.describe('Example 02 - Multiple Select', () => {
  test('first select with multiple selection', async ({ page }) => {
    await page.goto('#/example02');
    await page.locator('div[data-test=select1].ms-parent').click();
    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('span').filter({ hasText: 'April' }).click();
    await page.locator('span').filter({ hasText: 'May' }).click();
    const parent1Span = await page.locator('div[data-test=select1] .ms-choice span');

    await expect(parent1Span).toHaveText('February, April, May');
    await page.keyboard.press('ArrowDown');
    const juneLoc = await page.locator('div[data-test=select1] .ms-drop li:nth-of-type(6)');
    await expect(juneLoc).toHaveClass('highlighted');
    const juneLabelLoc = await juneLoc.locator('label');
    await expect(juneLabelLoc).toHaveText('June');
    await juneLabelLoc.press('Enter');
    await expect(parent1Span).toHaveText('4 of 12 selected');

    // go up until we reach "Select All" and use Space to press the option
    page.keyboard.press('ArrowUp');
    page.keyboard.press('ArrowUp');
    page.keyboard.press('ArrowUp');
    page.keyboard.press('ArrowUp');
    page.keyboard.press('ArrowUp');
    page.keyboard.press('ArrowUp');
    page.keyboard.press('Space');
    await expect(parent1Span).toHaveText('All selected');
    await page.getByRole('button', { name: 'All selected' }).click();
  });

  test('second select with multiple selection with optgroup and expect entire group to be selected', async ({ page }) => {
    await page.goto('#/example02');
    await page.locator('div[data-test=select2].ms-parent').click();
    const parent2Span = await page.locator('div[data-test=select2] .ms-choice span');
    await page.getByText('Group 1').click();
    const optGroup1 = await page.locator('[data-test=select2] ul li.group').nth(0);
    const optGroup1Icon = await optGroup1.locator('label.optgroup .icon-checkbox-container div');
    const optGroup1Span = await optGroup1.locator('label.optgroup span');
    await expect(optGroup1Icon).toHaveClass('ms-icon ms-icon-check');
    await expect(optGroup1Span).toHaveText('Group 1');

    const optGroup2 = await page.locator('[data-test=select2] ul li.group').nth(1);
    const optGroup2Icon = await optGroup2.locator('label.optgroup .icon-checkbox-container div');
    const optGroup2Span = await optGroup2.locator('label.optgroup span');
    await expect(optGroup2Icon).toHaveClass('ms-icon ms-icon-uncheck');
    await expect(optGroup2Span).toHaveText('Group 2');

    await page.getByRole('button', { name: '[Group 1: Option 1, Option 2, Option 3]' }).click();
    await expect(parent2Span).toHaveText('[Group 1: Option 1, Option 2, Option 3]');
  });
});
