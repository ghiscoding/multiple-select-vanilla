import { test, expect } from '@playwright/test';

test.describe('Options 21 - Filter Accept On Enter', () => {
  test('select drop filter has a placeholder text', async ({ page }) => {
    await page.goto('#/options21');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('ef');
    await expect(await page.locator('.ms-drop li.hide-radio')).toHaveCount(2);
    await page.getByRole('textbox').press('Enter');
    await expect(await page.locator('[data-test=select1] .ms-choice span')).toHaveText('def');

    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('g');
    await expect(await page.locator('.ms-drop li.hide-radio')).toHaveCount(2);
    await page.getByRole('textbox').press('Enter');
    await expect(await page.locator('[data-test=select2] .ms-choice span')).toHaveText('efg, fgh, ghi');
  });
});
