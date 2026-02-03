import { expect, test } from '@playwright/test';

test.describe('Options 26 - The Styler / CSS Styler', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('#/options26');
  });

  test('1st select has February & April with custom CSS styler', async ({ page }) => {
    await page.locator('[data-test=select3].ms-parent').click();
    const optionLoc2 = await page.locator('[data-test=select3] .ms-drop ul li').nth(1);
    optionLoc2.click();
    expect(optionLoc2).toHaveText('February');
    await expect(optionLoc2).toHaveCSS('color', 'rgb(0, 20, 255)');
    await expect(optionLoc2).toHaveCSS('background-color', 'rgb(111, 190, 255)');

    const optionLoc4 = await page.locator('[data-test=select3] .ms-drop ul li').nth(3);
    optionLoc4.click();
    expect(optionLoc4).toHaveText('April');
    await expect(optionLoc4).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(optionLoc4).toHaveCSS('background-color', 'rgb(151, 39, 39)');
    const selectedText3 = page.locator('[data-test=select3] .ms-choice span', { hasText: 'February, April' });
    await selectedText3.waitFor();
  });

  test('2nd select has January & June with custom styling', async ({ page }) => {
    await page.locator('[data-test=select4].ms-parent').click();
    const optionLoc3 = await page.locator('[data-test=select4] .ms-drop ul li').nth(3);
    optionLoc3.click();
    expect(optionLoc3).toHaveText('Option 3');
    await expect(optionLoc3).toHaveCSS('color', 'rgb(128, 0, 128)');
    await expect(optionLoc3).toHaveCSS('text-decoration', 'underline');
    const dropLoc2 = await page.locator('[data-test=select4] .ms-choice span', { hasText: '[Group 1: Option 3]' });
    await dropLoc2.waitFor();
  });
});
