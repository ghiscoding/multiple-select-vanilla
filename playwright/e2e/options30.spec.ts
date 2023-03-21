import { test, expect, Page } from '@playwright/test';

async function assertDropSize(page: Page, selector: string, type: 'height' | 'width', expectation: number, range = 15) {
  const dropElm1 = await page.locator(selector);
  const elmSize = (await dropElm1?.boundingBox())![type];
  expect(elmSize).toBeGreaterThanOrEqual(expectation - range);
  expect(elmSize).toBeLessThan(expectation + range);
}

test.describe('Options 30 - Auto-Adjust Drop Height/Width', () => {
  test('each select have different height/width by available space', async ({ page }) => {
    await page.goto('#/options30');
    await page.locator('[data-test=select1].ms-parent').click();
    assertDropSize(page, '[data-test=select1] .ms-choice', 'width', 75);
    assertDropSize(page, '[data-test=select1].ms-drop', 'width', 130);
    assertDropSize(page, '[data-test=select1].ms-drop', 'height', 198);

    await page.locator('[data-test=select2].ms-parent').click();
    assertDropSize(page, '[data-test=select2] .ms-choice', 'width', 200);
    assertDropSize(page, '[data-test=select2].ms-drop', 'width', 200);
    assertDropSize(page, '[data-test=select2].ms-drop', 'height', 260);

    await page.locator('[data-test=select3].ms-parent').click();
    assertDropSize(page, '[data-test=select3] .ms-choice', 'width', 135);
    assertDropSize(page, '[data-test=select3].ms-drop', 'width', 135);
    assertDropSize(page, '[data-test=select3].ms-drop', 'height', 320);

    await page.locator('[data-test=select4].ms-parent').click();
    assertDropSize(page, '[data-test=select4] .ms-choice', 'width', 200);
    assertDropSize(page, '[data-test=select4].ms-drop', 'width', 294);
  });
});
