import { test, expect } from '@playwright/test';

test.describe('Example 05 - disabled select', () => {
  test('should expect a disabled select element', async ({ page }) => {
    await page.goto('#/example05');

    const hiddenSelect = await page.locator('select.ms-offscreen');
    await expect(hiddenSelect).toBeDisabled();

    const msSelect = await page.getByRole('button', { name: 'January, March' });
    await expect(msSelect).toHaveClass('ms-choice disabled');
  });
});
