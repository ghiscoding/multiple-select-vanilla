import { expect, test } from '@playwright/test';

test.describe('Example 06 - Disabled items', () => {
  test('first select disabled selection February, March are shown but not clickable', async ({ page }) => {
    await page.goto('#/example06');
    await page.getByRole('button', { name: 'January, March' }).click();
    await page.getByRole('option', { name: 'April' }).click();
    await page.getByRole('option', { name: 'April' }).click();
    await page.getByRole('option', { name: 'April' }).click();
    await page.getByRole('option', { name: 'January' }).click();
    await page.getByRole('button', { name: 'March, April' }).click();
  });

  test('second select disabled group selection Group1, Option1,2,3 should not be toggable', async ({ page }) => {
    await page.goto('#/example06');
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' }).click();
    const group1SelectAll = await page.locator('[data-key="group_0"] .icon-checkbox-container div');
    await expect(group1SelectAll).toHaveClass('ms-icon ms-icon-partial-group');
    let group2SelectAll = await page.locator('[data-key="group_1"] .icon-checkbox-container div');
    await expect(group2SelectAll).toHaveClass('ms-icon ms-icon-partial-group');
    await page.getByRole('option', { name: 'Group 2' }).click();
    group2SelectAll = await page.locator('[data-key="group_1"] .icon-checkbox-container div');
    await expect(group2SelectAll).toHaveClass('ms-icon ms-icon-check');
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' });
    await page.getByRole('button', { name: '4 of 9 selected' }).click();
    await page.getByRole('button', { name: '4 of 9 selected' }).click();
    await page.locator('label').filter({ hasText: 'Option 4' }).click();
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5, Option 6]' }).click();
    const group3SelectAll = await page.locator('[data-key="group_2"] .icon-checkbox-container div');
    await expect(group3SelectAll).toHaveClass('ms-icon ms-icon-uncheck');
  });
});
