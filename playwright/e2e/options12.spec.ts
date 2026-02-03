import { expect, test } from '@playwright/test';

test.describe('Options 12 - Minimum Count Selected', () => {
  test('shows a maximum of 8 selected options but 9 selection will show 9 of 19 selected', async ({ page }) => {
    await page.goto('#/options12');
    await page.getByRole('button').click();
    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('span').filter({ hasText: 'March' }).click();
    await page.locator('span').filter({ hasText: 'April' }).click();
    await page.locator('span').filter({ hasText: 'May' }).click();
    await page.locator('span').filter({ hasText: 'June' }).click();
    await page.locator('span').filter({ hasText: 'July' }).click();
    await page.locator('span').filter({ hasText: 'August' }).click();
    await page.locator('span').filter({ hasText: 'September' }).click();
    let parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('February, March, April, May, June, July, August, September');

    await page.locator('span').filter({ hasText: 'January' }).click();
    parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('9 of 12 selected');
  });
});
