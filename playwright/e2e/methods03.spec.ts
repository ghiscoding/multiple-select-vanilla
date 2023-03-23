import { test, expect } from '@playwright/test';

test.describe('Methods 03 - setSelects() / getSelects()', () => {
  test('calling setSelects(1,3) and expect values & options to be displayed in alert', async ({ page }) => {
    let dialogTexts: string[] = [];
    page.on('dialog', async (alert) => {
      dialogTexts.push(alert.message());
      await alert.dismiss();
    });

    await page.goto('#/methods03');
    await page.getByRole('button', { name: 'SetSelects' }).click();
    await page.getByRole('button', { name: 'GetSelects' }).click();
    expect(dialogTexts[0]).toBe('Selected values: 1,3');
    expect(dialogTexts[1]).toBe('Selected texts: January,March');
  });
});
