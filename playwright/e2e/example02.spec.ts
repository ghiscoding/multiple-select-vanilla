import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/#/example02');
  await page.locator('div[data-test=select1].ms-parent').click();
  await page.locator('span').filter({ hasText: 'February' }).click();
  await page.locator('span').filter({ hasText: 'April' }).click();
  await page.locator('span').filter({ hasText: 'May' }).click();
  const parent1Span = await page.locator('div[data-test=select1] .ms-choice span');
  await page.getByRole('button', { name: 'February, April, May' }).click();
  await expect(parent1Span).toHaveText('February, April, May');

  await page.locator('div[data-test=select2].ms-parent').click();
  const parent2Span = await page.locator('div[data-test=select2] .ms-choice span');
  await page.getByText('Group 1').click();
  await page.getByRole('button', { name: '[Group 1: Option 1, Option 2, Option 3]' }).click();
  await expect(parent2Span).toHaveText('[Group 1: Option 1, Option 2, Option 3]');
});
