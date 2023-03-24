import { test } from '@playwright/test';

test.describe('Example 06 - Disabled items', () => {
  test('first select disabled selection February, March are shown but not clickable', async ({ page }) => {
    await page.goto('#/example06');
    await page.getByRole('button', { name: 'January, March' }).click();
    await page.getByLabel('April').check();
    await page.getByLabel('April').uncheck();
    await page.getByLabel('April').check();
    await page.getByLabel('January').uncheck();
    await page.getByRole('button', { name: 'March, April' }).click();
  });

  test('second select disabled group selection Group1, Option1,2,3 should not be toggable', async ({ page }) => {
    await page.goto('#/example06');
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' }).click();
    await page.getByLabel('Group 2').check();
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' });
    await page.getByRole('button', { name: '4 of 9 selected' }).click();
    await page.getByRole('button', { name: '4 of 9 selected' }).click();
    await page.locator('label').filter({ hasText: 'Option 4' }).click();
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5, Option 6]' }).click();
  });
});
