import { test, expect } from '@playwright/test';

test.describe('I18N Demo', () => {
  test('select drop is using French locale', async ({ page }) => {
    await page.goto('#/i18n');
    await page.locator('.ms-parent').click();
    await page.getByText('[Tout sélectionner]').click();
    await page.locator('span').filter({ hasText: 'Février' }).click();
    await page.locator('span').filter({ hasText: 'Janvier' }).click();
    await expect(page.locator('.ms-parent .ms-choice span')).toHaveText('10 de 12 sélectionnés');
    await page.locator('.ms-search input').fill('janv');
    await page.keyboard.press('Enter');
    await page.locator('span').filter({ hasText: 'Janvier' }).click();
    await page.getByText('[Tout sélectionner]').click();
    await page.getByRole('button', { name: 'Fermer' }).click();
    await expect(page.locator('.ms-parent .ms-choice span')).toHaveText('10 de 12 sélectionnés');
  });
});
