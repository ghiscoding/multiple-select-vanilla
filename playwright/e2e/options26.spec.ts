import { test, expect } from '@playwright/test';

test.describe('Options 26 - The Styler', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('#/options26');
  });

  test('first select has January & June with custom styling', async ({ page }) => {
    await page.locator('[data-test=select1].ms-parent').click();
    const optionLoc1 = await page.locator('[data-test=select1] .ms-drop ul li').nth(0);
    optionLoc1.click();
    expect(optionLoc1).toHaveText('January');
    await expect(optionLoc1).toHaveCSS('color', 'rgb(255, 0, 0)');
    await expect(optionLoc1).toHaveCSS('background-color', 'rgb(255, 238, 0)');

    const optionLoc5 = await page.locator('[data-test=select1] .ms-drop ul li').nth(5);
    optionLoc5.click();
    expect(optionLoc5).toHaveText('June');
    await expect(optionLoc5).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(optionLoc5).toHaveCSS('background-color', 'rgb(0, 0, 0)');
    const selectedText1 = page.locator('[data-test=select1] .ms-choice span', { hasText: 'January, June' });
    await selectedText1.waitFor();
  });

  test('second select has January & June with custom styling', async ({ page }) => {
    await page.locator('[data-test=select2].ms-parent').click();
    const optionLoc1 = await page.locator('[data-test=select2] .ms-drop ul li').nth(1);
    optionLoc1.click();
    expect(optionLoc1).toHaveText('Option 1');
    await expect(optionLoc1).toHaveCSS('color', 'rgb(0, 0, 255)');
    await expect(optionLoc1).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    const dropLoc2 = await page.locator('[data-test=select2] .ms-choice span', { hasText: '[Group 1: Option 1]' });
    await dropLoc2.waitFor();
  });
});
