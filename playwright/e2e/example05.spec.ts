import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/#/example05');

  const hiddenSelect = await page.locator('select.ms-offscreen');
  await expect(hiddenSelect).toBeDisabled();

  const msSelect = await page.getByRole('button', { name: 'January, March' });
  await expect(msSelect).toHaveClass('ms-choice disabled');
});
