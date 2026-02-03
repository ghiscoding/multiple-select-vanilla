import { expect, test } from '@playwright/test';

test.describe('Options 09 - Display Number Values', () => {
  test('select February & March and expect drop parent to show "2, 3" value numbers', async ({ page }) => {
    await page.goto('#/options09');
    await page.getByRole('button').click();
    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('span').filter({ hasText: 'March' }).click();

    const parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('2, 3');

    await page.locator('span').filter({ hasText: 'July' }).click();
    await page.locator('span').filter({ hasText: 'August' }).click();
    await page.getByRole('button', { name: '4 of 12 selected' }).click();
    expect(parentSpan).toHaveText('4 of 12 selected');
  });
});
