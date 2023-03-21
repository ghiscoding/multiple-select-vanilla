import { test, expect, Page } from '@playwright/test';

async function assertDropHeight(page: Page, selector: string, expectation: number, range = 3) {
  const dropElm1 = await page.locator(selector);
  const elmHeight = (await dropElm1?.boundingBox())!.height;
  expect(elmHeight).toBeGreaterThanOrEqual(expectation - range);
  expect(elmHeight).toBeLessThan(expectation + range);
}

test.describe('Example 11 - Bootstrap Theme', () => {
  test('select element have different element height & text font size', async ({ page }) => {
    await page.goto('#/example11');
    await page.getByRole('button', { name: 'form-control-sm' }).click();
    await page.getByRole('listitem').filter({ hasText: 'January' }).locator('span').click();

    assertDropHeight(page, '[data-test=select1] .ms-choice', 29);
    assertDropHeight(page, '[data-test=select2] .ms-choice', 36);
    assertDropHeight(page, '[data-test=select3] .ms-choice', 46);
  });
});
