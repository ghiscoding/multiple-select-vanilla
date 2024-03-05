import { test, expect } from '@playwright/test';

test.describe('Methods 01 - getOptions()', () => {
  test('method returns default options when calling the method', async ({ page }) => {
    let dialogText = '';
    page.on('dialog', async alert => {
      dialogText = alert.message();
      await alert.dismiss();
    });

    await page.goto('#/methods01');
    await page.getByRole('button', { name: 'getOptions' }).click();
    const strArray = [
      '{',
      `"name": "",`,
      `"placeholder": "",`,
      `"classes": "",`,
      `"classPrefix": "",`,
      `"selectAll": true,`,
      `"single": false,`,
      `"singleRadio": false,`,
      `"multiple": false,`,
      `"hideOptgroupCheckboxes": false,`,
      `"multipleWidth": 80,`,
      `"maxHeight": 250,`,
      `"maxHeightUnit": "px",`,
      `"position": "bottom",`,
      `"displayValues": false,`,
      `"displayTitle": false,`,
      `"displayDelimiter": ", ",`,
      `"minimumCountSelected": 3,`,
      `"ellipsis": false,`,
      `"isOpen": false,`,
      `"keepOpen": false,`,
      `"openOnHover": false,`,
      `"container": null,`,
      `"filter": true,`,
      `"filterGroup": false,`,
      `"filterPlaceholder": "",`,
      `"filterAcceptOnEnter": false,`,
      `"showClear": false,`,
      `"autoAdjustDropHeight": false,`,
      `"autoAdjustDropPosition": false,`,
      `"autoAdjustDropWidthByTextSize": false,`,
      `"adjustedHeightPadding": 10,`,
      `"useSelectOptionLabel": false,`,
      `"useSelectOptionLabelToHtml": false,`,
      `"navigationHighlight": true,`,
      `"infiniteScroll": false,`,
      `"virtualScroll": true\n}`,
    ].join('\n    ');
    await expect(dialogText).toContain(strArray);
  });
});
