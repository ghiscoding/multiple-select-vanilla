import { expect, test } from '@playwright/test';

test.describe('Example 07 - Submit Data', () => {
  test('submit form and display alert with serialized form data in an alert', async ({ page }) => {
    let dialogText = '';
    page.on('dialog', async alert => {
      dialogText = alert.message();
      await alert.dismiss();
    });

    await page.goto('#/example07');
    await page.getByRole('button', { name: 'First' }).click();
    await page.getByRole('option').filter({ hasText: 'Second' }).locator('span').click();
    await page.getByTestId('submit').click();
    await expect(dialogText).toBe('select1=2');
  });

  test('submit form with multiple data in second select and display alert with serialized form data in an alert', async ({ page }) => {
    let dialogText = '';
    page.on('dialog', async alert => {
      dialogText = alert.message();
      await alert.dismiss();
    });

    await page.goto('#/example07');
    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByRole('option').filter({ hasText: 'Third' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'Fourth' }).locator('span').click();
    await page.getByRole('button', { name: 'Third, Fourth' }).click();
    await page.getByTestId('submit').click();
    await expect(dialogText).toBe('select1=1&select2=3&select2=4');

    // unselect 3,4 and select 1,2 instead
    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByRole('option').filter({ hasText: 'Third' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'Fourth' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'First' }).locator('span').click();
    await page.getByRole('option').filter({ hasText: 'Second' }).locator('span').click();
    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByTestId('submit').click();
    await expect(dialogText).toBe('select1=1&select2=1&select2=2');
  });
});
