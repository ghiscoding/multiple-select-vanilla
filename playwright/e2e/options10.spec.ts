import { test, expect } from '@playwright/test';

test.describe('Options 10 - Display Selected Titles', () => {
  test('select February & March and expect drop parent to show "February, March" selected text', async ({ page }) => {
    await page.goto('#/options10');
    await page.getByRole('button').click();
    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('span').filter({ hasText: 'March' }).click();

    const parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('February, March');

    await page.locator('span').filter({ hasText: 'July' }).click();
    await page.locator('span').filter({ hasText: 'August' }).click();
    await page.getByRole('button', { name: '4 of 12 selected' }).click();
    expect(parentSpan).toHaveText('4 of 12 selected');
  });
});
