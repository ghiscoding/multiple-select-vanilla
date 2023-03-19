import { test, expect } from '@playwright/test';

test.describe('Options 07 - Max Height Unit', () => {
  test('drop should display 5 labels at first and expect a fixed height when changing height unit input', async ({ page }) => {
    await page.goto('#/options07');

    await page.locator('div[data-test="select1"].ms-parent').click();
    let dropElm1 = await page.locator('div[data-test="select1"] .ms-drop ul');
    let dropHeight1 = (await dropElm1.boundingBox())!.height;
    expect(dropHeight1).toBeGreaterThanOrEqual(160);
    expect(dropHeight1).toBeLessThan(180);

    await page.locator('#number').fill('6');
    page.keyboard.press('Enter');

    dropElm1 = await page.locator('div[data-test="select1"] .ms-drop ul');
    dropHeight1 = (await dropElm1.boundingBox())!.height;
    expect(dropHeight1).toBeGreaterThanOrEqual(200);
    expect(dropHeight1).toBeLessThan(210);
    await page.locator('div[data-test="select1"].ms-parent').click();

    // select 2
    await page.locator('div[data-test="select2"].ms-parent').click();
    let dropElm2 = await page.locator('div[data-test="select2"] .ms-drop ul');
    let dropHeight2 = (await dropElm2.boundingBox())!.height;
    expect(dropHeight2).toBeGreaterThanOrEqual(185);
    expect(dropHeight2).toBeLessThan(200);

    await page.locator('#number').fill('5');
    page.keyboard.press('Enter');

    dropElm2 = await page.locator('div[data-test="select2"] .ms-drop ul');
    dropHeight2 = (await dropElm2.boundingBox())!.height;
    expect(dropHeight2).toBeGreaterThanOrEqual(155);
    expect(dropHeight2).toBeLessThan(175);
    await page.locator('div[data-test="select2"].ms-parent').click();
  });
});
