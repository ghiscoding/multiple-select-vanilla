import { test, expect, Page } from '@playwright/test';

async function assertDropHeight(page: Page, selector: string, expectation: number, range = 3) {
  const dropElm = await page.locator(selector);
  const dropElmBB = await dropElm?.boundingBox();
  const elmHeight = dropElmBB?.height ?? 0;
  expect(elmHeight).toBeGreaterThanOrEqual(expectation - range);
  expect(elmHeight).toBeLessThan(expectation + range);
}

test.describe('Example 11 - Bootstrap Theme', () => {
  test('select element have different element height & text font size', async ({ page }) => {
    await page.goto('#/example11');
    await page.getByRole('button', { name: 'form-control-sm' }).click();
    await page.getByRole('listitem').filter({ hasText: 'January' }).locator('span').click();

    await assertDropHeight(page, '[data-test=select1] .ms-choice', 29);
    await assertDropHeight(page, '[data-test=select2] .ms-choice', 36);
    await assertDropHeight(page, '[data-test=select3] .ms-choice', 46);
  });
});
