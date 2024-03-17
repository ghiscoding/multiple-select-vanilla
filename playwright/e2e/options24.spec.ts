import { test, expect } from '@playwright/test';

test.describe('Options 24 - Show Clear button', () => {
  test('clear button expect input to be cleared', async ({ page }) => {
    await page.goto(']#/options24');
    await page.locator('[data-test=select1].ms-parent').click();
    expect(await page.locator('.ms-parent[data-test=select1] .ms-choice .ms-icon-close')).toBeVisible();
    await expect(page.locator('[data-test=select1] .ms-choice span')).toHaveText('January');
    await page.locator('[data-test=select1] .ms-choice .ms-icon-close').click();
    await expect(page.locator('[data-test=select1] .ms-choice span')).toHaveText('');
    expect(await page.locator('.ms-parent[data-test=select1] .ms-choice .ms-icon-close')).not.toBeVisible();
    await page.locator('[data-test=select1].ms-parent').click();

    await page.locator('[data-test=select2].ms-parent').click();
    await expect(page.locator('[data-test=select2] .ms-choice span')).toHaveText('Option 1');
    expect(await page.locator('.ms-parent[data-test=select2] .ms-choice .ms-icon-close')).toBeVisible();
    await page.locator('[data-test=select2] .ms-choice .ms-icon-close').click();
    await expect(page.locator('[data-test=select2] .ms-choice span')).toHaveText('');
    expect(await page.locator('.ms-parent[data-test=select2] .ms-choice .ms-icon-close')).not.toBeVisible();
    await page.locator('[data-test=select2].ms-parent').click();

    expect(await page.locator('.ms-parent[data-test=select3] .ms-choice .ms-icon-close')).not.toBeVisible();
    await page.locator('[data-test=select3].ms-parent').click();
    await page.getByRole('option', { name: 'February' }).click();
    await page.getByRole('option', { name: 'March' }).click();
    await page.getByRole('option', { name: 'April' }).click();
    expect(await page.locator('.ms-parent[data-test=select3] .ms-choice .ms-icon-close')).toBeVisible();
    await expect(page.locator('[data-test=select3] .ms-choice span')).toHaveText('February, March, April');
    await page.getByRole('option', { name: 'May' }).click();
    await expect(page.locator('[data-test=select3] .ms-choice span')).toHaveText('4 of 12 selected');
    await page.locator('[data-test=select3].ms-parent').click();
    await page.locator('[data-test=select3] .ms-choice .ms-icon-close').click();
    expect(await page.locator('.ms-parent[data-test=select3] .ms-choice .ms-icon-close')).not.toBeVisible();
    await expect(page.locator('[data-test=select3] .ms-choice span')).toHaveText('');

    expect(await page.locator('.ms-parent[data-test=select4] .ms-choice .ms-icon-close')).not.toBeVisible();
    await page.locator('[data-test=select4].ms-parent').click();
    await page.getByRole('option', { name: 'Group 2' }).click();
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('[Group 2: Option 4, Option 5, Option 6]');
    await page.getByRole('option', { name: 'Group 3' }).click();
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('6 of 9 selected');
    await page.locator('[data-test=select4] .ms-choice .ms-icon-close').click();
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('');
  });
});
