import { test, expect } from '@playwright/test';

test.describe('Options 26 - The Styler / CSS Styler', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('#/options26');
  });

  test('1st select has January & June with custom styling', async ({ page }) => {
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

  test('2nd select has January & June with custom styling', async ({ page }) => {
    await page.locator('[data-test=select2].ms-parent').click();
    const optionLoc1 = await page.locator('[data-test=select2] .ms-drop ul li').nth(1);
    optionLoc1.click();
    expect(optionLoc1).toHaveText('Option 1');
    await expect(optionLoc1).toHaveCSS('color', 'rgb(0, 0, 255)');
    await expect(optionLoc1).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
    const dropLoc2 = await page.locator('[data-test=select2] .ms-choice span', { hasText: '[Group 1: Option 1]' });
    await dropLoc2.waitFor();
  });

  test('3rd select has February & April with custom CSS styler', async ({ page }) => {
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

  test('4th select has January & June with custom styling', async ({ page }) => {
    await page.locator('[data-test=select4].ms-parent').click();
    const optionLoc3 = await page.locator('[data-test=select4] .ms-drop ul li').nth(3);
    optionLoc3.click();
    expect(optionLoc3).toHaveText('Option 3');
    await expect(optionLoc3).toHaveCSS('color', 'rgb(128, 0, 128)');
    await expect(optionLoc3).toHaveCSS('text-decoration', 'underline solid rgb(128, 0, 128)');
    const dropLoc2 = await page.locator('[data-test=select4] .ms-choice span', { hasText: '[Group 1: Option 3]' });
    await dropLoc2.waitFor();
  });
});
