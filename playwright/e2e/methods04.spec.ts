import { expect, test } from '@playwright/test';

test.describe('Methods 04 - enable/disable', () => {
  test('ignores an option click after the open dropdown is disabled', async ({ page }) => {
    await page.goto('#/methods04');
    const select = page.locator('select.full-width');
    const trigger = page.locator('.ms-choice');
    const option = page.locator('.ms-drop label').filter({ hasText: 'January' });
    await trigger.click();
    const box = await option.boundingBox();
    if (!box) {
      throw new Error('Expected January to be visible');
    }

    await select.evaluate(element => {
      (element as HTMLSelectElement & { _multipleSelect: { disable(): void } })._multipleSelect.disable();
    });
    await expect(trigger).toBeDisabled();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await expect(select).toHaveValues([]);

    await page.getByRole('button', { name: 'Enable' }).click();
    await trigger.click();
    await option.click();
    await expect(select).toHaveValues(['1']);
  });

  test('disabling & enabling drop dynamically', async ({ page }) => {
    await page.goto('#/methods04');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop')).toBeVisible();

    await page.getByRole('button', { name: 'Disable' }).click();
    await expect(page.locator('.ms-choice')).toHaveClass('ms-choice disabled');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop')).not.toBeVisible();

    await page.getByRole('button', { name: 'Enable' }).click();
    await expect(page.locator('.ms-choice')).toHaveClass('ms-choice');
    await page.locator('.ms-parent').click();
    await expect(page.locator('.ms-drop')).toBeVisible();
  });
});
