import { test, expect } from '@playwright/test';

test.describe('Options 06 - Custom Drop Width', () => {
  test('drop height is ~130px', async ({ page }) => {
    await page.goto('#/options06');
    await page.locator('.ms-parent').click();
    const dropElm = await page.locator('.ms-drop ul');
    const dropHeight = (await dropElm.boundingBox())!.height;
    expect(dropHeight).toBeGreaterThanOrEqual(130);
    expect(dropHeight).toBeLessThan(150);

    await page.locator('span').filter({ hasText: 'March' }).click();
    await page.getByRole('button', { name: 'March' }).click();
    await page.getByRole('button', { name: 'March' }).click();
    await page.getByText('[Select all]').click();
    await page.getByRole('button', { name: 'All selected' }).click();
  });
});
