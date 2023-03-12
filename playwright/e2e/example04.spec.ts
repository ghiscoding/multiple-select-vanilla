import { expect, test } from '@playwright/test';

test.describe('Select Auto-Width', () => {
  test('every select drop parent should have different width', async ({ browser, page }) => {
    await page.goto('http://localhost:3000/#/example04');

    const dropElm1 = await page.$('div[data-test=select1]');
    const drop1Width = (await dropElm1?.boundingBox())!.width;
    expect(drop1Width).toBeGreaterThanOrEqual(88);
    expect(drop1Width).toBeLessThan(95);
    await page.getByRole('button', { name: 'First', exact: true }).click();
    await page.locator('div[data-test=select1] .ms-drop li label').filter({ hasText: 'Fourth' }).click();
    await expect(page.locator('div[data-test=select1] .ms-choice span')).toHaveText('Fourth');

    const dropElm2 = await page.$('div[data-test=select2]');
    const drop2Width = (await dropElm2?.boundingBox())!.width;
    expect(drop2Width).toBeGreaterThanOrEqual(105);
    expect(drop2Width).toBeLessThan(110);
    await page.getByRole('button', { name: 'Options 1' }).click();
    await page.locator('div[data-test=select2] .ms-drop li label').filter({ hasText: 'Options 3' }).click();
    await expect(page.locator('div[data-test=select2] .ms-choice span')).toHaveText('Options 3');

    const dropElm3 = await page.$('div[data-test=select3]');
    const drop3Width = (await dropElm3?.boundingBox())!.width;
    expect(drop3Width).toBeGreaterThanOrEqual(312);
    expect(drop3Width).toBeLessThan(320);
    await page.getByRole('button', { name: 'This is the first option and value is 1' }).first().click();
    await page.getByRole('listitem').filter({ hasText: 'This is the fourth option and value is 4' }).locator('label').click();
    await expect(page.locator('div[data-test=select3] .ms-choice span')).toHaveText('This is the fourth option and value is 4');

    const dropElm4 = await page.$('div[data-test=select4]');
    const drop4Width = (await dropElm4?.boundingBox())!.width;
    expect(drop4Width).toBeGreaterThanOrEqual(198);
    expect(drop4Width).toBeLessThan(205);
    await page.getByRole('button', { name: 'This is the first option and value is 1' }).click();
    await page.getByRole('listitem').filter({ hasText: 'This is the fourth option and value is 4' }).locator('label').click();
    await expect(page.locator('div[data-test=select4] .ms-choice span')).toHaveText('This is the fourth option and value is 4');

    const dropElm5 = await page.$('div[data-test=select5]');
    const drop5Width = (await dropElm5?.boundingBox())!.width;
    expect(drop5Width).toBeGreaterThanOrEqual(118);
    expect(drop5Width).toBeLessThan(124);
    await page.locator('div:nth-child(5) > .col-sm-9 > .ms-parent > .ms-choice').click();
    await page.getByText('Group 2', { exact: true }).click();
    await page.getByRole('button', { name: '[Group 2: Option 4, Option 5, Option 6]' }).click();
    await expect(page.locator('div[data-test=select5] .ms-choice span')).toHaveText('[Group 2: Option 4, Option 5, Option 6]');

    const dropElm6 = await page.$('div[data-test=select6]');
    const drop6Width = (await dropElm6?.boundingBox())!.width;
    expect(drop6Width).toBeGreaterThanOrEqual(165);
    expect(drop6Width).toBeLessThan(175);
    await page.locator('div:nth-child(6) > .col-sm-9 > .ms-parent > .ms-choice').click();
    await page.getByText('This is group 2').click();
    await page.getByRole('button', { name: '[This is group 2: This is option 4, This is option 5, This is option 6]' }).click();
    await expect(page.locator('div[data-test=select6] .ms-choice span')).toHaveText(
      '[This is group 2: This is option 4, This is option 5, This is option 6]'
    );

    await browser.close();
  });
});
