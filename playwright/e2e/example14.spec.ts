import { test, expect } from '@playwright/test';

test.describe('Example 14 - The Divider', () => {
  test('multiple select with divider list items', async ({ page }) => {
    await page.goto('#/example14');

    await page.locator('div[data-test=single] .ms-choice').filter({ hasText: 'January' }).click();
    const li1LabelElms = await page.locator('div[data-test=single] li.hide-radio');
    const li1DividerElms = await page.locator('div[data-test=single] li.option-divider');
    await page.locator('div[data-test=single] .ms-drop li label').filter({ hasText: 'March' }).click();
    await expect(li1LabelElms).toHaveCount(12);
    await expect(li1DividerElms).toHaveCount(2);

    await page.locator('div[data-test=multiple] .ms-choice').click();
    const li2LabelElms = await page.locator('div[data-test=multiple] li:not(.option-divider)');
    const li2DividerElms = await page.locator('div[data-test=multiple] li.option-divider');
    await expect(li2LabelElms).toHaveCount(13);
    await expect(li2DividerElms).toHaveCount(2);
    await page.locator('div[data-test=multiple] span').filter({ hasText: 'February' }).click();
    const parent2Span = await page.locator('div[data-test=multiple] .ms-choice span');
    await page.getByRole('button', { name: 'February' }).click();
    await expect(parent2Span).toHaveText('February');

    await page.locator('div[data-test=group] .ms-choice').click();
    const li3LabelElms = await page.locator('div[data-test=group] li:not(.option-divider)');
    const li3DividerElms = await page.locator('div[data-test=group] li.option-divider');
    await expect(li3LabelElms).toHaveCount(15);
    await expect(li3DividerElms).toHaveCount(4);
    await page.getByText('Group 1').click();
    await page.locator('div[data-test=group].ms-parent').click();
    const parent3Span = await page.locator('div[data-test=group] .ms-choice span');
    await expect(parent3Span).toHaveText('6 of 12 selected');

    await page.locator('div[data-test=data1] .ms-choice').click();
    const li4LabelElms = await page.locator('div[data-test=data1] li:not(.option-divider)');
    const li4DividerElms = await page.locator('div[data-test=data1] li.option-divider');
    await expect(li4LabelElms).toHaveCount(7);
    await expect(li4DividerElms).toHaveCount(1);
    await page.locator('div[data-test=data1] span').filter({ hasText: 'Option 2' }).click();
    const parent4Span = await page.locator('div[data-test=data1] .ms-choice span');
    await page.getByRole('button', { name: 'Option 2' }).click();
    await expect(parent4Span).toHaveText('Option 2');

    await page.locator('div[data-test=data2] .ms-choice').click();
    const li5LabelElms = await page.locator('div[data-test=data2] li:not(.option-divider)');
    const li5DividerElms = await page.locator('div[data-test=data2] li.option-divider');
    await expect(li5LabelElms).toHaveCount(7);
    await expect(li5DividerElms).toHaveCount(1);
    await page.locator('div[data-test=data2] span').filter({ hasText: 'Option 6' }).click();
    const parent5Span = await page.locator('div[data-test=data2] .ms-choice span');
    await page.locator('div[data-test=data2].ms-parent').click();
    await expect(parent5Span).toHaveText('Option 2, Option 6');
  });
});
