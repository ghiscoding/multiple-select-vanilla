import { expect, test } from '@playwright/test';

test.describe('Methods 03 - setSelects() / getSelects()', () => {
  test('calling setSelects(1,3) and expect values & options to be displayed in alert', async ({ page }) => {
    const dialogTexts: string[] = [];
    page.on('dialog', async alert => {
      dialogTexts.push(alert.message());
      await alert.dismiss();
    });

    await page.goto('#/methods03');

    await page.locator('#setSelectsBtn').click();
    await page.locator('#getSelectsBtn').click();
    expect(dialogTexts[0]).toBe('Selected values: 1,3');
    expect(dialogTexts[1]).toBe('Selected texts: January,March');

    await page.locator('#setSelectsBtn2').click();
    await page.locator('#getSelectsBtn2').click();
    expect(dialogTexts[2]).toBe('Selected values: February,April');
  });
});
