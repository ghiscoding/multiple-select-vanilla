import { test, expect } from '@playwright/test';

test.describe('Options 13 - The Ellipsis', () => {
  test('ellipsis is shown after selecting 6+ options', async ({ page }) => {
    await page.goto('#/options13');
    await page.getByRole('button').click();
    await page.locator('span').filter({ hasText: 'February' }).click();
    await page.locator('span').filter({ hasText: 'March' }).click();
    await page.locator('span').filter({ hasText: 'April' }).click();
    await page.locator('span').filter({ hasText: 'May' }).click();
    await page.locator('span').filter({ hasText: 'June' }).click();
    let parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('February, March, April, May, June');

    await page.locator('span').filter({ hasText: 'July' }).click();
    parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('February, March, April, May, June...');

    await page.locator('span').filter({ hasText: 'August' }).click();
    parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('February, March, April, May, June...');
  });
});
