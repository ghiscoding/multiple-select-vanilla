import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

async function assertDropWidth(page: Page, selector: string, expectation: number, range = 10) {
  const dropElm1 = await page.$(selector);
  const drop1Width = (await dropElm1?.boundingBox())!.width;
  expect(drop1Width).toBeGreaterThanOrEqual(expectation - range);
  expect(drop1Width).toBeLessThan(expectation + range);
}

test.describe('Select Auto-Width', () => {
  test('every select drop parent should have different width', async ({ browser, page }) => {
    await page.goto('http://localhost:3000/#/example04');

    assertDropWidth(page, 'div[data-test=select1]', 92);
    await page.getByRole('button', { name: 'First', exact: true }).click();
    await page.locator('div[data-test=select1] .ms-drop li label').filter({ hasText: 'Fourth' }).click();
    await expect(page.locator('div[data-test=select1] .ms-choice span')).toHaveText('Fourth');

    assertDropWidth(page, 'div[data-test=select2]', 108);
    await page.getByRole('button', { name: 'Options 1' }).click();
    await page.locator('div[data-test=select2] .ms-drop li label').filter({ hasText: 'Options 3' }).click();
    await expect(page.locator('div[data-test=select2] .ms-choice span')).toHaveText('Options 3');

    assertDropWidth(page, 'div[data-test=select3]', 315);
    await page.getByRole('button', { name: 'This is the first option and value is 1' }).first().click();
    await page.getByRole('listitem').filter({ hasText: 'This is the fourth option and value is 4' }).locator('label').click();
    await expect(page.locator('div[data-test=select3] .ms-choice span')).toHaveText('This is the fourth option and value is 4');

    assertDropWidth(page, 'div[data-test=select4]', 200);
    await page.getByRole('button', { name: 'This is the first option and value is 1' }).click();
    await page.getByRole('listitem').filter({ hasText: 'This is the fourth option and value is 4' }).locator('label').click();
    await expect(page.locator('div[data-test=select4] .ms-choice span')).toHaveText('This is the fourth option and value is 4');

    assertDropWidth(page, 'div[data-test=select5]', 120);
    await page.locator('div:nth-child(5) > .col-sm-9 > .ms-parent > .ms-choice').click();
    await page.getByText('Group 2', { exact: true }).click();
    await page.getByRole('button', { name: '[Group 2: Option 4, Option 5, Option 6]' }).click();
    await expect(page.locator('div[data-test=select5] .ms-choice span')).toHaveText('[Group 2: Option 4, Option 5, Option 6]');

    assertDropWidth(page, 'div[data-test=select6]', 170);
    await page.locator('div:nth-child(6) > .col-sm-9 > .ms-parent > .ms-choice').click();
    await page.getByText('This is group 2').click();
    await page.getByRole('button', { name: '[This is group 2: This is option 4, This is option 5, This is option 6]' }).click();
    await expect(page.locator('div[data-test=select6] .ms-choice span')).toHaveText(
      '[This is group 2: This is option 4, This is option 5, This is option 6]'
    );

    await browser.close();
  });
});
