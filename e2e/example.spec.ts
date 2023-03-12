import { test, expect } from '@playwright/test';

test('select drops auto-width should have different width as per their content', async ({ page }) => {
  await page.goto('http://localhost:3000/#/example04');
  const drop1 = await page.$('div[data-test=select1]');
  const drop1box = await drop1?.boundingBox();
  const dropWidth = drop1box!.width;
  expect(dropWidth).toBeGreaterThanOrEqual(88);
  expect(dropWidth).toBeLessThan(95);
});
