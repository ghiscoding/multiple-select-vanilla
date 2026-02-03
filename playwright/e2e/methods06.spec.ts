import { expect, test } from '@playwright/test';

test.describe('Methods 06 - check/uncheck', () => {
  test('clicking Check and Uncheck should change selection on all select drops', async ({ page }) => {
    await page.goto('#/methods06');
    await page.locator('[data-test=select1]').getByRole('button', { name: 'Value 1' });
    await page.locator('[data-test=select2]').getByRole('button', { name: 'Value 1' });
    await page.locator('[data-test=select3]').getByRole('button', { name: '[Group 1: Value 1], [Group 2: Value 3]' });

    // click on Check
    await page.getByRole('button', { name: 'Check', exact: true }).click();
    await page.locator('[data-test=select1]').getByRole('button', { name: 'Value 2' });
    await expect(page.locator('[data-test=select1].ms-drop li.selected label span')).toHaveText('Value 2');

    await page.locator('[data-test=select2]').getByRole('button', { name: 'Value 1, Value 2' });
    await expect(page.locator('[data-test=select2].ms-drop li.selected')).toHaveCount(2);
    await expect(page.locator('[data-test=select2].ms-drop li.selected').nth(0).locator('label span')).toHaveText('Value 1');
    await expect(page.locator('[data-test=select2].ms-drop li.selected').nth(1).locator('label span')).toHaveText('Value 2');

    await page.locator('[data-test=select3]').getByRole('button', { name: '[Group 1: Value 1, Value 2], [Group 2: Value 3]' });
    await expect(page.locator('[data-test=select3].ms-drop li.selected')).toHaveCount(4);
    await expect(page.locator('[data-test=select3].ms-drop li.selected').nth(0).locator('label.optgroup')).toHaveText('Group 1');
    await expect(page.locator('[data-test=select3].ms-drop li.selected').nth(1).locator('label span')).toHaveText('Value 1');
    await expect(page.locator('[data-test=select3].ms-drop li.selected').nth(2).locator('label span')).toHaveText('Value 2');
    await expect(page.locator('[data-test=select3].ms-drop li.selected').nth(3).locator('label span')).toHaveText('Value 3');

    // click on Uncheck
    await page.getByRole('button', { name: 'Uncheck' }).click();
    await page.locator('[data-test=select1]').getByRole('button', { name: '' });
    await expect(page.locator('[data-test=select1].ms-drop li.selected')).toHaveCount(0);

    await page.locator('[data-test=select2]').getByRole('button', { name: 'Value 1' });
    await expect(page.locator('[data-test=select2].ms-drop li.selected')).toHaveCount(1);
    await expect(page.locator('[data-test=select2].ms-drop li.selected').nth(0).locator('label span')).toHaveText('Value 1');

    await page.locator('[data-test=select3]').getByRole('button', { name: '[Group 1: Value 1], [Group 2: Value 3]' });
    await expect(page.locator('[data-test=select3].ms-drop li.selected')).toHaveCount(2);
    await expect(page.locator('[data-test=select3].ms-drop li.selected').nth(0).locator('label span')).toHaveText('Value 1');
    await expect(page.locator('[data-test=select3].ms-drop li.selected').nth(1).locator('label span')).toHaveText('Value 3');
  });
});
