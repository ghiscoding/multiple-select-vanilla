import { expect, test } from '@playwright/test';

test.describe('Example 16 - Avatar Images as Text Template', () => {
  test('show avatar images', async ({ page }) => {
    await page.goto('#/example16');

    // 1st select
    const parentSelect1 = await page.locator('.ms-parent[data-test=select1]');
    await parentSelect1.click();
    await expect(page.locator('div[data-test=select1] .ms-drop')).not.toBeHidden();
    const parentSelectList1 = await page.locator('.ms-parent[data-test=select1] .ms-list');
    await parentSelectList1.press('ArrowDown', { delay: 10 });
    await parentSelectList1.press('ArrowDown', { delay: 10 });
    await parentSelectList1.press('Enter');
    const parentSpan1 = await page.locator('.ms-parent[data-test=select1] .ms-choice span');
    expect(parentSpan1).toHaveText('Erika');
    await expect(parentSpan1.locator('img').getByAltText('image3')).toBeDefined();
    await expect(parentSpan1.locator('img')).toHaveAttribute('src', /examples\/images\/avatar3.png/gi);
    await expect(page.locator('div[data-test=select1] .ms-drop')).toBeHidden();

    // 2nd select
    const parentSelect2 = await page.locator('.ms-parent[data-test=select2]');
    await parentSelect2.click();
    await expect(page.locator('div[data-test=select2] .ms-drop')).not.toBeHidden();
    const parentSelectList2 = await page.locator('.ms-parent[data-test=select2] .ms-list');
    await parentSelectList2.press('ArrowDown', { delay: 10 });
    await parentSelectList2.press('Enter');
    await expect(page.locator('[data-test=select2].ms-drop li.selected').nth(0).locator('div.name-section')).toHaveText('Smith');
    await expect(page.locator('[data-test=select2].ms-drop li.selected').nth(0).locator('div.job-section')).toHaveText('Accounting');
    const parentSpan2 = await page.locator('.ms-parent[data-test=select2] .ms-choice span');
    expect(await parentSpan2.locator('.name-section')).toHaveText('Smith');
    expect(await parentSpan2.locator('.job-section')).toHaveText('Accounting');
    await expect(parentSpan2.locator('img').getByAltText('image2')).toBeDefined();
    await expect(parentSpan2.locator('img')).toHaveAttribute('src', /examples\/images\/avatar2.png/gi);
    await expect(page.locator('div[data-test=select2] .ms-drop')).toBeHidden();
  });
});
