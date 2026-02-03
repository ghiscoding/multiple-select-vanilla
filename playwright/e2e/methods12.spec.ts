import { expect, test } from '@playwright/test';

test.describe('Methods 12 - getData()', () => {
  test('method returns default options when calling the method', async ({ page }) => {
    let dialogText = '';
    page.on('dialog', async alert => {
      dialogText = alert.message();
      await alert.dismiss();
    });

    await page.goto('#/methods12');
    await page.getByRole('button', { name: 'getData' }).click();
    const str = `[
    {
        \"type\": \"option\",
        \"text\": \"text1\",
        \"value\": \"text1\",
        \"visible\": true,
        \"selected\": false,
        \"disabled\": false,
        \"classes\": \"\",
        \"title\": \"\",
        \"_key\": \"option_0\"
    },
    {
        \"type\": \"option\",
        \"text\": \"text2\",
        \"value\": \"text2\",
        \"visible\": true,
        \"selected\": false,
        \"disabled\": false,
        \"classes\": \"\",
        \"title\": \"\",
        \"_key\": \"option_1\"
    },
    {
        \"type\": \"option\",
        \"text\": \"text3\",
        \"value\": \"text3\",
        \"visible\": true,
        \"selected\": false,
        \"disabled\": false,
        \"classes\": \"\",
        \"title\": \"\",
        \"_key\": \"option_2\"
    }
]`;
    await expect(dialogText).toContain(str);
  });
});
