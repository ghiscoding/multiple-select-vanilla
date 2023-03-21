import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

test.describe('Options 05 - Custom Drop Width', () => {
  test('drop width is ~580px', async ({ page }) => {
    await page.goto('#/options05');

    await page.locator('.ms-parent').click();
    const dropElm = await page.locator('.ms-drop');
    const dropWidth = (await dropElm.boundingBox())!.width;
    expect(dropWidth).toBeGreaterThanOrEqual(570);
    expect(dropWidth).toBeLessThan(590);

    await page.getByLabel('6', { exact: true }).check();
    await page.getByLabel('8', { exact: true }).check();
    await page.getByLabel('30').check();
    await page.getByRole('button', { name: '6, 8, 30' }).click();
  });
});
