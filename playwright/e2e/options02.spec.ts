import { test, expect } from '@playwright/test';

test.describe('Options 02 - Single Radio', () => {
  test('have radio button and expect drop to close after each selection', async ({ page }) => {
    await page.goto('#/options02');
    await page.locator('div[data-test="select1"] .ms-choice span', { hasText: 'First' }).click();
    await page.getByRole('option').filter({ hasText: 'Third' }).locator('span').click();
    const drop1elm = await page.locator('div[data-test=select1] .ms-drop');
    expect(drop1elm).toBeHidden();

    await page.locator('div[data-test="select2"] .ms-choice span', { hasText: 'Option 1' }).click();
    await page.getByRole('option').filter({ hasText: 'Option 4' }).locator('span').click();
    const drop2elm = await page.locator('div[data-test=select2] .ms-drop');
    expect(drop2elm).toBeHidden();

    await page.locator('div[data-test="select3"].ms-parent').click();
    await page.locator('div[data-test="select3"] .ms-drop label span', { hasText: 'Fourth' }).click();
    const drop3elm = await page.locator('div[data-test=select3] .ms-drop');
    expect(drop3elm).toBeHidden();
  });
});
