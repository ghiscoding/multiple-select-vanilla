import { test, expect } from '@playwright/test';

test.describe('Example 16 - Avatar Images as Text Template', () => {
  test('show avatar images', async ({ page }) => {
    await page.goto('#/example16');

    // 1st select
    await page.locator('.ms-parent[data-test=select1]').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    const parentSpan1 = await page.locator('.ms-parent[data-test=select1] .ms-choice span');
    expect(parentSpan1).toHaveText('Erika');
    await expect(parentSpan1.locator('img').getByAltText('image3')).toBeDefined();
    await expect(parentSpan1.locator('img')).toHaveAttribute('src', /examples\/images\/avatar3.png/gi);
    await expect(page.locator('div[data-test=select1] .ms-drop')).toBeHidden();

    // 2nd select
    await page.locator('.ms-parent[data-test=select2]').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    const parentSpan2 = await page.locator('.ms-parent[data-test=select2] .ms-choice span');
    expect(await parentSpan2.locator('.name-section')).toHaveText('Erika');
    expect(await parentSpan2.locator('.job-section')).toHaveText('Designer');
    await expect(parentSpan2.locator('img').getByAltText('image3')).toBeDefined();
    await expect(parentSpan2.locator('img')).toHaveAttribute('src', /examples\/images\/avatar3.png/gi);
    await expect(page.locator('div[data-test=select2] .ms-drop')).toBeHidden();
  });
});
