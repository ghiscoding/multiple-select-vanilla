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
    await expect(await juneLoc.locator('label')).toHaveText('June');
    await page.keyboard.press('Enter');
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
    await page.getByRole('button', { name: '[Group 1: Option 1, Option 2, Option 3]' }).click();
    await expect(parent2Span).toHaveText('[Group 1: Option 1, Option 2, Option 3]');
  });
});
