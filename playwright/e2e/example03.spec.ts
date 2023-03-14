import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/#/example03');
  await page.locator('div[data-test=select1].ms-parent').click();
  await page.getByRole('listitem').filter({ hasText: '30' }).locator('label').click();
  await page.getByRole('checkbox', { name: '15' }).check();
  const elm16 = await page.locator('label').filter({ hasText: '16' });
  await elm16.click();
  expect((await elm16!.boundingBox())!.width).toBe(44);
  await page.getByRole('button', { name: '15, 16, 30' }).click();
  const parent1Span = await page.locator('div[data-test=select1] .ms-choice span');
  await expect(parent1Span).toHaveText('15, 16, 30');

  await page.locator('div[data-test=select2].ms-parent').click();
  await page.getByText('Group 1').click();
  await page.getByRole('button', { name: '5 of 15 selected' }).click();
  await page.getByRole('button', { name: '5 of 15 selected' }).click();
  await page.getByRole('checkbox', { name: '3', exact: true }).uncheck();
  await page.getByRole('button', { name: '4 of 15 selected' }).click();
  await page.getByRole('button', { name: '4 of 15 selected' }).click();
  await page.getByText('Group 2').click();
  await page.getByRole('listitem').filter({ hasText: '11' }).locator('label').click();
  await page.getByRole('listitem').filter({ hasText: '12' }).locator('span').click();
  await page.getByRole('listitem').filter({ hasText: '13' }).locator('span').click();
  await page.getByRole('listitem').filter({ hasText: '14' }).locator('span').click();
  await page.getByRole('listitem').filter({ hasText: '15' }).locator('span').click();
  await page.getByRole('button', { name: '14 of 15 selected' }).click();
  await page.getByRole('button', { name: '14 of 15 selected' }).click();
  await page.getByRole('checkbox', { name: '3', exact: true }).check();
  const selectAll2 = await page.locator('[data-test=select2] .ms-select-all input[data-name=selectAll]');
  await expect(selectAll2).toBeChecked();
  await page.getByRole('button', { name: 'All selected' }).click();
});
