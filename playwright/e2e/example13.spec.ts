import { test, expect } from '@playwright/test';

test.describe('Example 13 - Destroy Select', () => {
  test('creating & destroying select multiple times', async ({ page }) => {
    await page.goto('#/example13');
    await page.getByRole('button', { name: 'Dynamically Create' }).click();
    await page.getByRole('button', { name: '1, 3, 4' }).click();
    await page.getByRole('button', { name: 'Destroy' }).click();
    expect(page.locator['[data-test="select1"]']).toBeUndefined();

    await page.locator('div').filter({ hasText: 'Use Select Option Label & Render HTML' });
    await page.getByRole('button', { name: 'Dynamically Create' }).click();
    await page.getByRole('button', { name: '1, 3, 4' }).click();
    await page.locator('label').filter({ hasText: 'January' }).click();
    await page.getByRole('button', { name: '3, 4' }).click();
  });

  test('modifying option data', async ({ page }) => {
    await page.goto('#/example13');
    await page.getByRole('button', { name: 'Dynamically Create' }).click();
    await page.getByRole('button', { name: '1, 3, 4' }).click();
    await expect(page.locator('.ms-drop').nth(0)).toBeVisible();
    let liElms = await page.locator('[data-test="select1"] .ms-drop ul li');
    expect(await page.locator('[data-test="select1"] .ms-drop ul li label')).toHaveCount(12);
    expect(await liElms.nth(0).locator('input[type=checkbox][data-key=option_0]').isChecked()).toBeTruthy();
    expect(await liElms.nth(0).locator('span')).toHaveText('January');
    expect(await liElms.nth(2).locator('input[type=checkbox][data-key=option_2]').isChecked()).toBeTruthy();
    expect(await liElms.nth(2).locator('span')).toHaveText('March');
    expect(await liElms.nth(3).locator('input[type=checkbox][data-key=option_3]').isChecked()).toBeTruthy();
    expect(await liElms.nth(3).locator('span')).toHaveText('April');

    await page.getByRole('button', { name: 'Modify Data' }).click();

    // await expect(page.locator('.ms-drop').nth(0)).toBeVisible();
    liElms = await page.locator('[data-test="select1"] .ms-drop ul li');
    expect(await page.locator('[data-test="select1"] .ms-drop ul li label')).toHaveCount(5);
    expect(await liElms.nth(0).locator('input[type=checkbox][data-key=option_0]').isChecked()).toBeFalsy();
    expect(await liElms.nth(0).locator('span')).toHaveText('Options 1');
    expect(await liElms.nth(1).locator('input[type=checkbox][data-key=option_1]').isChecked()).toBeFalsy();
    expect(await liElms.nth(1).locator('span')).toHaveText('Options 2');
    expect(await liElms.nth(2).locator('input[type=checkbox][data-key=option_2]').isChecked()).toBeTruthy();
    expect(await liElms.nth(2).locator('span')).toHaveText('Options 3');
    expect(await liElms.nth(3).locator('input[type=checkbox][data-key=option_3]').isChecked()).toBeTruthy();
    expect(await liElms.nth(3).locator('span')).toHaveText('Options 4');
  });
});
