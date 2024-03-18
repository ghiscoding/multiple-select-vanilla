import { test, expect } from '@playwright/test';

test.describe('Example 15 - Dark Mode', () => {
  test('multiple select with dark mode', async ({ page }) => {
    await page.goto('#/example15');

    await page.locator('div[data-test=single] .ms-choice').filter({ hasText: 'January' }).click();
    const li1LabelElms = await page.locator('div[data-test=single] li.hide-radio');
    const li1DividerElms = await page.locator('div[data-test=single] li.option-divider');
    expect(await page.locator('div[data-test=single] div.ms-icon-caret')).toHaveClass(/open/);
    await page.locator('div[data-test=single] .ms-drop li label').filter({ hasText: 'March' }).click();
    expect(await page.locator('div[data-test=single] div.ms-icon-caret')).not.toHaveClass(/open/);
    await expect(li1LabelElms).toHaveCount(12);
    await expect(li1DividerElms).toHaveCount(2);

    await page.locator('div[data-test=radio] .ms-choice').filter({ hasText: 'February' }).click();
    const li2LabelElms = await page.locator('div[data-test=radio] li[role=option]');
    const li2DividerElms = await page.locator('div[data-test=radio] li.option-divider');
    expect(await page.locator('div[data-test=radio] div.ms-icon-caret')).toHaveClass(/open/);
    expect(await page.locator('div[data-test=radio] .icon-checkbox-container.radio div').nth(1)).toHaveClass('ms-icon ms-icon-radio');
    expect(await page.locator('div[data-test=radio] .icon-checkbox-container.radio div')).toHaveCount(12);
    await page.locator('div[data-test=radio] .ms-drop li label').filter({ hasText: 'April' }).click();
    expect(await page.locator('div[data-test=radio] div.ms-icon-caret')).not.toHaveClass(/open/);
    await expect(li2LabelElms).toHaveCount(12);
    await expect(li2DividerElms).toHaveCount(2);

    await page.locator('div[data-test=multiple] .ms-choice').click();
    const li3LabelElms = await page.locator('div[data-test=multiple] li:not(.option-divider)');
    const li3DividerElms = await page.locator('div[data-test=multiple] li.option-divider');
    await expect(li3LabelElms).toHaveCount(13);
    await expect(li3DividerElms).toHaveCount(2);
    expect(await page.locator('div[data-test=multiple] div.ms-icon-caret')).toHaveClass(/open/);
    await page.locator('div[data-test=multiple] span').filter({ hasText: 'February' }).click();
    const parent2Span = await page.locator('div[data-test=multiple] .ms-choice span');
    await page.getByRole('button', { name: 'February' }).click();
    expect(await page.locator('div[data-test=multiple] div.ms-icon-caret')).not.toHaveClass(/open/);
    await expect(parent2Span).toHaveText('February');

    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' }).click();
    await page.getByRole('option', { name: 'Group 2' }).click();
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5]' });
    await page.getByRole('button', { name: '4 of 9 selected' }).click();
    await page.getByRole('button', { name: '4 of 9 selected' }).click();
    await page.getByRole('option', { name: 'Option 4' }).click();
    expect(await page.locator('div[data-test=group] div.ms-icon-caret')).toHaveClass(/open/);
    await page.getByRole('button', { name: '[Group 1: Option 1], [Group 2: Option 5, Option 6]' }).click();

    expect(await page.locator('.ms-parent[data-test=data1] .ms-choice .ms-icon-close')).not.toBeVisible();
    await page.locator('div[data-test=data1] .ms-choice').click();
    const li5LabelElms = await page.locator('div[data-test=data1] li:not(.option-divider)');
    const li5DividerElms = await page.locator('div[data-test=data1] li.option-divider');
    await expect(li5LabelElms).toHaveCount(7);
    await expect(li5DividerElms).toHaveCount(1);
    await page.locator('div[data-test=data1] span').filter({ hasText: 'Option 2' }).click();
    const parent4Span = await page.locator('div[data-test=data1] .ms-choice span');
    expect(await page.locator('div[data-test=data1] div.ms-icon-caret')).toHaveClass(/open/);
    await page.getByRole('button', { name: 'Option 2' }).click();
    await expect(parent4Span).toHaveText('Option 2');
    expect(await page.locator('.ms-parent[data-test=data1] .ms-choice .ms-icon-close')).toBeVisible();
    expect(await page.locator('div[data-test=data1] div.ms-icon-caret')).not.toHaveClass(/open/);
  });
});
