import { test, expect } from '@playwright/test';

test.describe('Options 35 - Diacritic Parser', () => {
  test('filtering on all type of select & clear search input', async ({ page }) => {
    await page.goto('#/options35');

    // 1st Select
    // --------------
    await page.locator('[data-test=select1].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('év');
    await page.locator('[data-test=select1] span').filter({ hasText: 'Février' }).click();
    const selectAll1 = await page.locator('[data-test=select1] .ms-select-all input[type=checkbox]');
    expect(selectAll1).toBeChecked();
    await expect(page.locator('input.in-log')).toHaveValue('év');
    await expect(page.locator('input.out-log')).toHaveValue('ev');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(1);
    await page.locator('[data-test=select1].ms-parent').click();

    await page.locator('[data-test=select1].ms-parent').click();
    await page.locator('[data-test=select1] .ms-search .ms-icon-close').click();
    await expect(page.locator('[data-test=select1] .ms-search span')).toHaveText('');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(12);

    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('e');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(7);
    await page.locator('[data-test=select1] .ms-search .ms-icon-close').click();
    await expect(page.locator('[data-test=select1] .ms-search span')).toHaveText('');

    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('û ');
    await expect(page.locator('input.in-log')).toHaveValue('û');
    await expect(page.locator('input.out-log')).toHaveValue('u');
    await expect(page.locator('[data-test=select1].ms-drop li:not(.ms-no-results)')).toHaveCount(3);
    await page.locator('[data-test=select1] .ms-search .ms-icon-close').click();
    await page.getByRole('textbox', { name: '🔎︎' }).fill('u');
    await page.locator('[data-test=select1] span').filter({ hasText: 'Juin' }).click();
    await page.locator('[data-test=select1] span').filter({ hasText: 'Juillet' });
    await page.locator('[data-test=select1] span').filter({ hasText: 'Août' }).click();
    const parentSpan = await page.locator('div[data-test=select1] .ms-choice span');
    await expect(parentSpan).toHaveText('Février, Juin, Août');
    await page.locator('[data-test=select1].ms-parent').click();

    // 2nd Select
    // --------------
    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('év');
    await page.locator('[data-test=select2] span').filter({ hasText: 'Février' }).click();
    const selectAll2 = await page.locator('[data-test=select2] .ms-select-all input[type=checkbox]');
    expect(selectAll2).toBeChecked();
    await expect(page.locator('[data-test=select2].ms-drop li:not(.ms-no-results)')).toHaveCount(1);
    await page.locator('[data-test=select2].ms-parent').click();

    await page.locator('[data-test=select2].ms-parent').click();
    await page.locator('[data-test=select2] .ms-search .ms-icon-close').click();
    await expect(page.locator('[data-test=select2] .ms-search span')).toHaveText('');
    await expect(page.locator('[data-test=select2].ms-drop li:not(.ms-no-results)')).toHaveCount(12);

    await page.getByRole('textbox', { name: '🔎︎' }).press('e');
    await expect(page.locator('[data-test=select2].ms-drop li:not(.ms-no-results)')).toHaveCount(7);
    await page.locator('[data-test=select2] .ms-search .ms-icon-close').click();
    await expect(page.locator('[data-test=select2] .ms-search span')).toHaveText('');

    await page.getByRole('textbox', { name: '🔎︎' }).pressSequentially('û ');
    await expect(page.locator('[data-test=select2].ms-drop li:not(.ms-no-results)')).toHaveCount(3);
    await page.locator('[data-test=select2] .ms-search .ms-icon-close').click();
    await page.getByRole('textbox', { name: '🔎︎' }).press('u');
    await page.locator('[data-test=select2] span').filter({ hasText: 'Juin' }).click();
    await page.locator('[data-test=select2] span').filter({ hasText: 'Juillet' });
    await page.locator('[data-test=select2] span').filter({ hasText: 'Août' }).click();
    const parentSpan2 = await page.locator('div[data-test=select2] .ms-choice span');
    await expect(parentSpan2).toHaveText('Février, Juin, Août');
    await page.locator('[data-test=select2].ms-parent').click();
  });
});
