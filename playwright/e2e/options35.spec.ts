import { test, expect } from '@playwright/test';

test.describe('Options 35 - Diacritic Parser', () => {
  test('filtering on all type of select & clear search input', async ({ page }) => {
    await page.goto('#/options35');

    await page.locator('[data-test=select1].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).fill('év');
    await page.keyboard.press('Enter');
    await page.locator('[data-test=select1] span').filter({ hasText: 'Février' }).click();
    const selectAll3 = await page.locator('[data-test=select1] .ms-select-all input[type=checkbox]');
    expect(selectAll3).toBeChecked();
    await expect(page.locator('input.in-log')).toHaveValue('év');
    await expect(page.locator('input.out-log')).toHaveValue('ev');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(1);
    await page.locator('[data-test=select1].ms-parent').click();

    await page.locator('[data-test=select1].ms-parent').click();
    await page.locator('[data-test=select1] .ms-search .icon-close').click();
    await expect(page.locator('[data-test=select1] .ms-search span')).toHaveText('');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(12);

    await page.getByRole('textbox', { name: '🔎︎' }).fill('e');
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(7);
    await page.locator('[data-test=select1] .ms-search .icon-close').click();
    await expect(page.locator('[data-test=select1] .ms-search span')).toHaveText('');

    await page.getByRole('textbox', { name: '🔎︎' }).fill('û');
    await page.keyboard.press('Enter');
    await expect(page.locator('input.in-log')).toHaveValue('û');
    await expect(page.locator('input.out-log')).toHaveValue('u');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(3);
    await page.locator('[data-test=select1] .ms-search .icon-close').click();
    await page.getByRole('textbox', { name: '🔎︎' }).fill('u');
    await page.keyboard.press('Enter');
    await page.locator('[data-test=select1] span').filter({ hasText: 'Juin' }).click();
    await page.locator('[data-test=select1] span').filter({ hasText: 'Juillet' });
    await page.locator('[data-test=select1] span').filter({ hasText: 'Août' }).click();
    const parentSpan = await page.locator('div[data-test=select1] .ms-choice span');
    await expect(parentSpan).toHaveText('Février, Juin, Août');
  });
});
