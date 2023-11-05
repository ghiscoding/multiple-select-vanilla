import { test, expect } from '@playwright/test';

test.describe('Options 34 - Show Search Clear button', () => {
  test('filtering on all type of select & clear search input', async ({ page }) => {
    await page.goto('#/options34');
    await page.locator('[data-test=select1].ms-parent').click();
    await page.locator('[data-test=select1] .ms-search input').fill('gh');
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-test=select1].ms-drop li.hide-radio')).toHaveCount(2);
    await page.getByRole('listitem').filter({ hasText: 'fgh' }).locator('label').click();

    await page.locator('[data-test=select1].ms-parent').click();
    await page.locator('[data-test=select1] .ms-search .icon-close').click();
    await expect(page.locator('[data-test=select1] .ms-search span')).toHaveText('');
    await page.locator('[data-test=select1].ms-parent').click();
    await expect(page.locator('[data-test=select1].ms-drop li.hide-radio')).toHaveCount(31);

    await page.locator('[data-test=select2].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).fill('33');
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-test=select2].ms-drop li.group')).toHaveCount(1);
    await expect(page.locator('[data-test=select2].ms-drop li.option-level-1')).toHaveCount(1);
    await page.getByRole('listitem').filter({ hasText: 'Group 11' }).locator('label').click();
    await page.getByRole('listitem').filter({ hasText: '333' }).locator('span').click();

    await page.locator('[data-test=select2].ms-parent').click();
    await page.locator('[data-test=select2] .ms-search .icon-close').click();
    await expect(page.locator('[data-test=select2] .ms-search span')).toHaveText('');
    await page.locator('[data-test=select2].ms-parent').click();
    await expect(page.locator('[data-test=select2].ms-drop li.hide-radio')).toHaveCount(37);

    await page.locator('[data-test=select3].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).fill('ef');
    await page.keyboard.press('Enter');
    await page.locator('[data-test=select3] span').filter({ hasText: 'def' }).click();
    await page.locator('[data-test=select3] span').filter({ hasText: 'efg' }).click();
    const selectAll3 = await page.locator('[data-test=select3] .ms-select-all input[type=checkbox]');
    expect(selectAll3).toBeChecked();
    await page.locator('[data-test=select3].ms-parent').click();

    await page.locator('[data-test=select3].ms-parent').click();
    await page.locator('[data-test=select3] .ms-search .icon-close').click();
    await expect(page.locator('[data-test=select3] .ms-search span')).toHaveText('');
    await page.locator('[data-test=select3].ms-parent').click();
    await expect(page.locator('[data-test=select3].ms-drop li')).toHaveCount(32);

    await page.locator('[data-test=select4].ms-parent').click();
    await page.getByRole('textbox', { name: '🔎︎' }).fill('10');
    await page.keyboard.press('Enter');
    await page.locator('[data-test=select4] span').filter({ hasText: 'Group 20' }).click();
    await page.getByRole('button', { name: '[Group 20: 210]' }).click();

    await page.locator('[data-test=select4].ms-parent').click();
    await page.locator('[data-test=select4] .ms-search .icon-close').click();
    await expect(page.locator('[data-test=select4] .ms-search span')).toHaveText('');
    await page.locator('[data-test=select4].ms-parent').click();
    await expect(page.locator('[data-test=select4].ms-drop li')).toHaveCount(38);
  });
});
