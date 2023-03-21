import { test, expect } from '@playwright/test';

test.describe('Example 10 - Large Select Dataset with Virtual Scroll', () => {
  test('select should use virtual scroll', async ({ page }) => {
    await page.goto('#/example10');
    await page.locator('[data-test="select10"].ms-parent').click();

    const ulElm = await page.locator('.ms-drop ul');
    const liElms = await page.locator('.ms-drop ul li');
    await expect(liElms.nth(0)).toContainText('0');
    await liElms.nth(0).click();
    await expect(liElms.nth(1)).toContainText('1');
    await liElms.nth(1).click();
    await page.getByRole('button', { name: '0, 1' }).click();

    // scroll to the middle and click 5001
    await page.locator('[data-test="select10"].ms-parent').click();
    await ulElm.evaluate((e) => (e.scrollTop = e.scrollHeight / 2));
    await page.locator('label').filter({ hasText: '5001' }).click();
    await page.getByRole('button', { name: '0, 1, 5001' });

    // scroll to the end and select last 2 labels
    await ulElm.evaluate((e) => (e.scrollTop = e.scrollHeight));
    await page.locator('label').filter({ hasText: '9998' }).click();
    await page.locator('label').filter({ hasText: '9999' }).click();
    await page.getByRole('button', { name: '5 of 10000 selected' });

    // filter with text 999 and expect 9998 & 9999 to show up
    await page.getByPlaceholder('🔎︎').click();
    await page.getByPlaceholder('🔎︎').fill('999');
    await page.locator('label').filter({ hasText: '9998' }).click();
    await page.locator('label').filter({ hasText: '9999' }).click();
    await page.getByRole('button', { name: '0, 1, 5001' }).click();
  });
});
