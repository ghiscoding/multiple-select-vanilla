import { test, expect } from '@playwright/test';

test.describe('Options 24 - Show Clear button', () => {
  test('clear button expect input to be cleared', async ({ page }) => {
    await page.goto(']#/options24');
    await page.locator('[data-test=select1].ms-parent').click();
    await expect(page.locator('[data-test=select1] .ms-choice span')).toHaveText('January');
    await page.locator('[data-test=select1] .ms-choice .icon-close').click();
    await expect(page.locator('[data-test=select1] .ms-choice span')).toHaveText('');
    await page.locator('[data-test=select1].ms-parent').click();

    await page.locator('[data-test=select2].ms-parent').click();
    await expect(page.locator('[data-test=select2] .ms-choice span')).toHaveText('Option 1');
    await page.locator('[data-test=select2] .ms-choice .icon-close').click();
    await expect(page.locator('[data-test=select2] .ms-choice span')).toHaveText('');
    await page.locator('[data-test=select2].ms-parent').click();

    await page.locator('[data-test=select3].ms-parent').click();
    await page.getByRole('checkbox', { name: 'February' }).check();
    await page.getByRole('checkbox', { name: 'March' }).check();
    await page.getByRole('checkbox', { name: 'April' }).check();
    await expect(page.locator('[data-test=select3] .ms-choice span')).toHaveText('February, March, April');
    await page.getByRole('checkbox', { name: 'May' }).check();
    await expect(page.locator('[data-test=select3] .ms-choice span')).toHaveText('4 of 12 selected');
    await page.locator('[data-test=select3].ms-parent').click();
    await page.locator('[data-test=select3] .ms-choice .icon-close').click();
    await expect(page.locator('[data-test=select3] .ms-choice span')).toHaveText('');

    await page.locator('[data-test=select4].ms-parent').click();
    await page.getByLabel('Group 2').check();
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('[Group 2: Option 4, Option 5, Option 6]');
    await page.getByLabel('Group 3').check();
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('6 of 9 selected');
    await page.locator('[data-test=select4] .ms-choice .icon-close').click();
    await expect(page.locator('[data-test=select4] .ms-choice span')).toHaveText('');
  });
});
