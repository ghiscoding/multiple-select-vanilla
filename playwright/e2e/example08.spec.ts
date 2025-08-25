import { test, expect } from '@playwright/test';

test.describe('Example 08 - Data Property', () => {
  test('all select dropdown should have data', async ({ page }) => {
    await page.goto('#/example08');
    await page.locator('div[data-test=select1].ms-parent').click();
    await page.getByRole('option').filter({ hasText: 'January' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'February' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'March' }).locator('label').click();
    await page.getByRole('option').filter({ hasText: 'April' }).locator('label').click();
    await expect(page.locator('div[data-test=select1] .ms-choice')).toHaveText('4 of 12 selected');
    await page.locator('div[data-test=select1] .ms-choice').click();

    await page.locator('div[data-test=select2].ms-parent').click();
    await page.getByRole('option').filter({ hasText: 'January' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'February' }).locator('span').click();
    await expect(page.locator('div[data-test=select2] .ms-choice')).toHaveText('January, February');
    await page.getByRole('option').filter({ hasText: 'March' }).locator('span').click();
    await expect(page.locator('div[data-test=select2] .ms-choice')).toHaveText('January, February, March');
    await page.locator('div[data-test=select2] .ms-choice').click();

    await page.locator('div[data-test=select3].ms-parent').click();
    await page.getByRole('option').filter({ hasText: 'January' }).locator('span').click();
    await expect(page.locator('div[data-test=select3] .ms-choice')).toHaveText('January');
    await page.locator('div[data-test=select3] .ms-select-all').click();
    await expect(page.locator('div[data-test=select3] .ms-choice')).toHaveText('All selected');
    await page.locator('div[data-test=select3] .ms-choice').click();

    // select4 with numbers
    await page.locator('div[data-test=select4].ms-parent').click();
    await page.getByRole('option').filter({ hasText: '2' }).locator('span').click();
    await expect(page.locator('div[data-test=select4] .ms-choice')).toHaveText('2');
    await page.locator('div[data-test=select4] .ms-select-all').click();
    await expect(page.locator('div[data-test=select4] .ms-choice')).toHaveText('All selected');
    await page.locator('div[data-test=select4] .ms-choice').click();

    await expect(page.locator('div[data-test=select5] .ms-choice')).toHaveText('[Group 1: January]');
    await page.locator('div[data-test=select5].ms-parent').click();
    await page.getByRole('option').filter({ hasText: 'March' }).locator('label').click();
    await page.getByRole('option', { name: 'Group 2' }).click();
    await page.getByRole('button', { name: '8 of 12 selected' }).click();
    await page.getByRole('button', { name: '8 of 12 selected' }).click();
    await page.getByRole('option', { name: 'Group 1' }).click();
    await page.getByRole('button', { name: '11 of 12 selected' }).click();
  });

  test('formdata should be updated after select', async({ page }) => {
    await page.goto('#/example08');
    await page.locator('div[data-test=select6].ms-parent').click();
    await page.getByRole('option', { name: 'July' }).click();

    const selectedItemValue = await page.evaluate(() => {
      const form = document.getElementById('form');
      const formData = new FormData(form);
      return formData.get('select6')
    })

    expect(selectedItemValue).toBe(7)
  });
});
