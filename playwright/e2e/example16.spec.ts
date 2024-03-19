import { test, expect } from '@playwright/test';

test.describe('Example 16 - Avatar Images as Text Template', () => {
  test('show avatar images', async ({ page }) => {
    await page.goto('#/example16');
    await page.locator('.ms-parent').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    const parentSpan = await page.locator('.ms-parent .ms-choice span');
    expect(parentSpan).toHaveText('Erika');
    await expect(parentSpan.locator('img').getByAltText('image3')).toBeDefined();
    await expect(parentSpan.locator('img')).toHaveAttribute('src', /examples\/images\/avatar3.png/gi);
  });
});
