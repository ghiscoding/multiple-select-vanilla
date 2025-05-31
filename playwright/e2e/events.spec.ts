import { expect, test } from '@playwright/test';

test.describe('Events Demo', () => {
  test('executing multiple actions with ms-select should fire multiple events', async ({ page }) => {
    await page.goto('#/events');
    const textareaLoc = await page.locator('textarea');
    await expect(textareaLoc).toHaveText('onAfterCreate event fire!');
    await page.locator('.ms-parent').click();
    await expect(textareaLoc).toHaveText(
      'onAfterCreate event fire!\nonFocus event fire!\nonBeforeOpen event fire!\nonBlur event fire!\nonOpen event fire!',
    );

    // close the drop
    await page.locator('.ms-parent').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire! Reason: "toggle.close"',
      ].join('\n'),
    );

    // open the drop & select 1st group
    await page.locator('.ms-parent').click();
    await page.getByText('Group 1').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire! Reason: "toggle.close"',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[{"label":"Option 1","value":"1","selected":true,"disabled":false},{"label":"Option 2","value":"2","selected":true,"disabled":false},{"label":"Option 3","value":"3","selected":true,"disabled":false}]}',
        'onChange event fire! data: {"eventName":"onOptgroupClick","item":{"label":"Group 1","selected":true,"type":"optgroup"},"selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]"],"values":["1","2","3"]}}',
      ].join('\n'),
    );

    await page.locator('.ms-drop .ms-select-all .icon-checkbox-container').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire! Reason: "toggle.close"',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[{"label":"Option 1","value":"1","selected":true,"disabled":false},{"label":"Option 2","value":"2","selected":true,"disabled":false},{"label":"Option 3","value":"3","selected":true,"disabled":false}]}',
        'onChange event fire! data: {"eventName":"onOptgroupClick","item":{"label":"Group 1","selected":true,"type":"optgroup"},"selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]"],"values":["1","2","3"]}}',
        'onCheckAll event fire!',
        'onChange event fire! data: {"eventName":"onCheckAll","selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]","[Group 2: Option 4, Option 5, Option 6]","[Group 3: Option 7, Option 8, Option 9]"],"values":["1","2","3","4","5","6","7","8","9"]}}',
      ].join('\n'),
    );

    await page.locator('.ms-search input').pressSequentially('1');
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire! Reason: "toggle.close"',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[{"label":"Option 1","value":"1","selected":true,"disabled":false},{"label":"Option 2","value":"2","selected":true,"disabled":false},{"label":"Option 3","value":"3","selected":true,"disabled":false}]}',
        'onChange event fire! data: {"eventName":"onOptgroupClick","item":{"label":"Group 1","selected":true,"type":"optgroup"},"selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]"],"values":["1","2","3"]}}',
        'onCheckAll event fire!',
        'onChange event fire! data: {"eventName":"onCheckAll","selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]","[Group 2: Option 4, Option 5, Option 6]","[Group 3: Option 7, Option 8, Option 9]"],"values":["1","2","3","4","5","6","7","8","9"]}}',
        'onCheckAll event fire!',
        'onChange event fire! data: {"eventName":"onCheckAll","selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]","[Group 2: Option 4, Option 5, Option 6]","[Group 3: Option 7, Option 8, Option 9]"],"values":["1","2","3","4","5","6","7","8","9"]}}',
        'onFilter event fire! text: 1',
      ].join('\n'),
    );

    await page.locator('.ms-search .ms-icon-close').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire! Reason: "toggle.close"',
        'onBeforeOpen event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[{"label":"Option 1","value":"1","selected":true,"disabled":false},{"label":"Option 2","value":"2","selected":true,"disabled":false},{"label":"Option 3","value":"3","selected":true,"disabled":false}]}',
        'onChange event fire! data: {"eventName":"onOptgroupClick","item":{"label":"Group 1","selected":true,"type":"optgroup"},"selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]"],"values":["1","2","3"]}}',
        'onCheckAll event fire!',
        'onChange event fire! data: {"eventName":"onCheckAll","selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]","[Group 2: Option 4, Option 5, Option 6]","[Group 3: Option 7, Option 8, Option 9]"],"values":["1","2","3","4","5","6","7","8","9"]}}',
        'onCheckAll event fire!',
        'onChange event fire! data: {"eventName":"onCheckAll","selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]","[Group 2: Option 4, Option 5, Option 6]","[Group 3: Option 7, Option 8, Option 9]"],"values":["1","2","3","4","5","6","7","8","9"]}}',
        'onFilter event fire! text: 1',
        'onCheckAll event fire!',
        'onChange event fire! data: {"eventName":"onCheckAll","selection":{"labels":["[Group 1: Option 1, Option 2, Option 3]","[Group 2: Option 4, Option 5, Option 6]","[Group 3: Option 7, Option 8, Option 9]"],"values":["1","2","3","4","5","6","7","8","9"]}}',
        'onFilter event fire! text: ',
        'onFilterClear event fire!',
      ].join('\n'),
    );
  });
});
