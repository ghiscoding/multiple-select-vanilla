import { test, expect } from '@playwright/test';

test.describe('Options 19 - Filter Only Optgroup', () => {
  test('filtering by optgroup', async ({ page }) => {
    await page.goto('#/options19');
    const disabledLabel = await page.locator('.ms-drop li label.disabled');
    expect(disabledLabel).toHaveCount(1);
    expect(disabledLabel).toHaveText('000');

    await page.locator('.ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).fill('B');
    await page.keyboard.press('Enter');
    await page.getByLabel('Group B').check();

    const labelElms = await page.locator('.ms-drop input[data-name="selectItem"]');
    expect(labelElms).toHaveCount(5);
    await page.getByRole('button', { name: '5 of 18 selected' }).click();

    // reopen & add Group A
    await page.locator('.ms-parent').click();
    await page.getByText('Group A').click();
    await page.getByRole('button', { name: '9 of 18 selected' }).dblclick();
    await page.getByText('[Select all]').click();
    await page.getByRole('button', { name: '17 of 18 selected' }).click();
  });
});
