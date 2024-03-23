import { test, expect } from '@playwright/test';

test.describe('Events Demo', () => {
  test('executing multiple actions with ms-select should fire multiple events', async ({ page }) => {
    await page.goto('#/events');
    const textareaLoc = await page.locator('textarea');
    await expect(textareaLoc).toHaveText('onAfterCreate event fire!');
    await page.locator('.ms-parent').click();
    await expect(textareaLoc).toHaveText('onAfterCreate event fire!\nonFocus event fire!\nonBlur event fire!\nonOpen event fire!');

    // close the drop
    await page.locator('.ms-parent').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire!',
      ].join('\n'),
    );

    // open the drop & select 1st group
    await page.locator('.ms-parent').click();
    await page.getByText('Group 1').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[null,{"text":"Option 1","value":"1","selected":true,"disabled":false},null,{"text":"Option 2","value":"2","selected":true,"disabled":false},null,{"text":"Option 3","value":"3","selected":true,"disabled":false},null]}',
      ].join('\n'),
    );

    await page.locator('.ms-drop .ms-select-all .icon-checkbox-container').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[null,{"text":"Option 1","value":"1","selected":true,"disabled":false},null,{"text":"Option 2","value":"2","selected":true,"disabled":false},null,{"text":"Option 3","value":"3","selected":true,"disabled":false},null]}',
        'onCheckAll event fire!',
      ].join('\n'),
    );

    await page.locator('.ms-search input').pressSequentially('1');
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[null,{"text":"Option 1","value":"1","selected":true,"disabled":false},null,{"text":"Option 2","value":"2","selected":true,"disabled":false},null,{"text":"Option 3","value":"3","selected":true,"disabled":false},null]}',
        'onCheckAll event fire!',
        'onCheckAll event fire!',
        'onFilter event fire! text: 1',
      ].join('\n'),
    );

    await page.locator('.ms-search .ms-icon-close').click();
    await expect(textareaLoc).toHaveText(
      [
        'onAfterCreate event fire!',
        'onFocus event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onFocus event fire!',
        'onClose event fire!',
        'onBlur event fire!',
        'onOpen event fire!',
        'onOptgroupClick event fire! view: {"label":"Group 1","selected":true,"children":[null,{"text":"Option 1","value":"1","selected":true,"disabled":false},null,{"text":"Option 2","value":"2","selected":true,"disabled":false},null,{"text":"Option 3","value":"3","selected":true,"disabled":false},null]}',
        'onCheckAll event fire!',
        'onCheckAll event fire!',
        'onFilter event fire! text: 1',
        'onCheckAll event fire!',
        'onFilter event fire! text: ',
        'onFilterClear event fire!',
      ].join('\n'),
    );
  });
});
