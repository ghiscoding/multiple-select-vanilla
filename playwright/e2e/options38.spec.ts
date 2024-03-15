import { test, expect } from '@playwright/test';

test.describe('Options 38 - Dark Mode', () => {
  test('multiple select with dark mode', async ({ page }) => {
    await page.goto('#/options38');

    await page.locator('div[data-test=single] .ms-choice').filter({ hasText: 'January' }).click();
    const li1LabelElms = await page.locator('div[data-test=single] li.hide-radio');
    const li1DividerElms = await page.locator('div[data-test=single] li.option-divider');
    await page.locator('div[data-test=single] .ms-drop li label').filter({ hasText: 'March' }).click();
    await expect(li1LabelElms).toHaveCount(12);
    await expect(li1DividerElms).toHaveCount(2);

    await page.locator('div[data-test=radio] .ms-choice').filter({ hasText: 'February' }).click();
    const li2LabelElms = await page.locator('div[data-test=radio] li[role=option]');
    const li2DividerElms = await page.locator('div[data-test=radio] li.option-divider');
    await page.locator('div[data-test=radio] .ms-drop li label').filter({ hasText: 'April' }).click();
    await expect(li2LabelElms).toHaveCount(12);
    await expect(li2DividerElms).toHaveCount(2);

    await page.locator('div[data-test=multiple] .ms-choice').click();
    const li3LabelElms = await page.locator('div[data-test=multiple] li:not(.option-divider)');
    const li3DividerElms = await page.locator('div[data-test=multiple] li.option-divider');
    await expect(li3LabelElms).toHaveCount(13);
    await expect(li3DividerElms).toHaveCount(2);
    await page.locator('div[data-test=multiple] span').filter({ hasText: 'February' }).click();
    const parent2Span = await page.locator('div[data-test=multiple] .ms-choice span');
    await page.getByRole('button', { name: 'February' }).click();
    await expect(parent2Span).toHaveText('February');

    await page.locator('div[data-test=group] .ms-choice').click();
    const li4LabelElms = await page.locator('div[data-test=group] li:not(.option-divider)');
    const li4DividerElms = await page.locator('div[data-test=group] li.option-divider');
    await expect(li4LabelElms).toHaveCount(15);
    await expect(li4DividerElms).toHaveCount(4);
    await page.getByText('Group 1').click();
    await page.locator('div[data-test=group].ms-parent').click();
    const parent3Span = await page.locator('div[data-test=group] .ms-choice span');
    await expect(parent3Span).toHaveText('6 of 12 selected');

    await page.locator('div[data-test=data1] .ms-choice').click();
    const li5LabelElms = await page.locator('div[data-test=data1] li:not(.option-divider)');
    const li5DividerElms = await page.locator('div[data-test=data1] li.option-divider');
    await expect(li5LabelElms).toHaveCount(7);
    await expect(li5DividerElms).toHaveCount(1);
    await page.locator('div[data-test=data1] span').filter({ hasText: 'Option 2' }).click();
    const parent4Span = await page.locator('div[data-test=data1] .ms-choice span');
    await page.getByRole('button', { name: 'Option 2' }).click();
    await expect(parent4Span).toHaveText('Option 2');
  });

  test('clicking on "toggleDarkMode" button will toggle dark mode on all select', async ({ page }) => {
    await page.goto('#/options38');

    // open 1st select drop
    await page.locator('.ms-parent[data-test=single]').click();
    await expect(await page.locator('.ms-parent[data-test=single]')).toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=single]')).toHaveClass(/ms-dark-mode/);
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
    await expect(await page.locator('.ms-parent[data-test=single]')).not.toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=single]')).not.toHaveClass(/ms-dark-mode/);
    await page.locator('.ms-parent[data-test=single]').click(); // close drop
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();

    // open 2nd select drop
    await page.locator('.ms-parent[data-test=radio]').click();
    await expect(await page.locator('.ms-parent[data-test=radio]')).toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=radio]')).toHaveClass(/ms-dark-mode/);
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
    await expect(await page.locator('.ms-parent[data-test=radio]')).not.toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=radio]')).not.toHaveClass(/ms-dark-mode/);
    await page.locator('.ms-parent[data-test=radio]').click(); // close drop
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();

    // open 3rd select drop
    await page.locator('.ms-parent[data-test=multiple]').click();
    await expect(await page.locator('.ms-parent[data-test=multiple]')).toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=multiple]')).toHaveClass(/ms-dark-mode/);
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
    await expect(await page.locator('.ms-parent[data-test=multiple]')).not.toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=multiple]')).not.toHaveClass(/ms-dark-mode/);
    await page.locator('.ms-parent[data-test=multiple]').click(); // close drop
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();

    // open 4th select drop
    await page.locator('.ms-parent[data-test=group]').click();
    await expect(await page.locator('.ms-parent[data-test=group]')).toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=group]')).toHaveClass(/ms-dark-mode/);
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
    await expect(await page.locator('.ms-parent[data-test=group]')).not.toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=group]')).not.toHaveClass(/ms-dark-mode/);
    await page.locator('.ms-parent[data-test=group]').click(); // close drop
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();

    // open 5th select drop
    expect(await page.locator('.ms-parent[data-test=data1] .ms-choice .ms-icon-close')).not.toBeVisible();
    await page.locator('.ms-parent[data-test=data1]').click();
    await expect(await page.locator('.ms-parent[data-test=data1]')).toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=data1]')).toHaveClass(/ms-dark-mode/);
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
    await expect(await page.locator('.ms-parent[data-test=data1]')).not.toHaveClass(/ms-dark-mode/);
    await expect(await page.locator('.ms-drop[data-test=data1]')).not.toHaveClass(/ms-dark-mode/);
    await page.locator('.ms-parent[data-test=data1]').click(); // close drop
    expect(await page.locator('.ms-parent[data-test=data1] .ms-search .ms-icon-close')).toBeDefined();
    await page.getByRole('button', { name: 'Toggle Dark Mode' }).click();
  });
});
