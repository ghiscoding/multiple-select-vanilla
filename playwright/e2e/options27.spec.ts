import { test, expect } from '@playwright/test';

test.describe('Options 27 - Text Template', () => {
  test('option labels & selected options shows as html', async ({ page }) => {
    // ms-select #1
    await page.goto('#/options27');
    await page.locator('div[data-test=select1].ms-parent').click();
    const optionLoc1 = await page.locator('div[data-test=select1] .ms-drop ul li').nth(0);
    await optionLoc1.click();
    await expect(optionLoc1.locator('label span')).toHaveText('January');
    const spanLoc1 = await optionLoc1.locator('span').innerHTML();
    await expect(spanLoc1).toBe('<i class="fa fa-star"></i>January');

    const ms1OptionLoc4 = await page.locator('div[data-test=select1] .ms-drop ul li').nth(3);
    await ms1OptionLoc4.click();
    await expect(ms1OptionLoc4.locator('label span')).toHaveText('April');
    const ms1SpanLoc4 = await ms1OptionLoc4.locator('span').innerHTML();
    await expect(ms1SpanLoc4).toBe('<i class="fa fa-star"></i>April');

    await page.waitForTimeout(90);
    await expect(page.locator('div[data-test=select1] .ms-choice span')).toHaveText('January, April');
    let ms1ParentSpanLoc = await page.locator('div[data-test=select1].ms-parent .ms-choice span').innerHTML();
    await expect(ms1ParentSpanLoc).toBe('<i class="fa fa-star"></i>January, <i class="fa fa-star"></i>April');

    await page.locator('button#disableRenderHtml').click();
    ms1ParentSpanLoc = (await page.locator('div[data-test=select1].ms-parent .ms-choice span').textContent()) as string;
    await expect(ms1ParentSpanLoc).toBe('<i class="fa fa-star"></i>January, <i class="fa fa-star"></i>April');
    await page.locator('div[data-test=select1].ms-parent').click();

    // ms-select #2
    await page.locator('div[data-test=select2].ms-parent').click();
    const ms2OptionLoc2 = await page.locator('div[data-test=select2] .ms-drop ul li').nth(0);
    await ms2OptionLoc2.click();
    await expect(ms2OptionLoc2.locator('label span')).toHaveText('50"');
    const spanLoc2 = await ms2OptionLoc2.locator('span').innerHTML();
    await expect(spanLoc2).toBe('50"');

    const ms2OptionLoc3 = await page.locator('div[data-test=select2] .ms-drop ul li').nth(2);
    await ms2OptionLoc3.click();
    await expect(ms2OptionLoc3.locator('label span').nth(0)).toHaveText('<span style="font-weight:bold">33</span>');
    const spanLoc4txt = await ms2OptionLoc3.locator('span').textContent();
    const spanLoc4html = await ms2OptionLoc3.locator('span').innerHTML();
    await expect(spanLoc4txt).toBe('<span style="font-weight:bold">33</span>');
    await expect(spanLoc4html).toBe('&lt;span style="font-weight:bold"&gt;33&lt;/span&gt;');

    await page.waitForTimeout(90);
    await expect(page.locator('div[data-test=select2] .ms-choice span')).toHaveText(
      '50", <span style="font-weight:bold">33</span>'
    );
    let ms2ParentSpanLocText = await page.locator('div[data-test=select2].ms-parent .ms-choice span').textContent();
    let ms2ParentSpanLocHtml = await page.locator('div[data-test=select2].ms-parent .ms-choice span').innerHTML();
    await expect(ms2ParentSpanLocText).toBe('50", <span style="font-weight:bold">33</span>');
    await expect(ms2ParentSpanLocHtml).toBe('50", &lt;span style="font-weight:bold"&gt;33&lt;/span&gt;');

    await page.locator('button#enableRenderHtml').click();
    ms2ParentSpanLocText = await page.locator('div[data-test=select2].ms-parent .ms-choice span').nth(0).textContent();
    ms2ParentSpanLocHtml = await page.locator('div[data-test=select2].ms-parent .ms-choice span').nth(0).innerHTML();
    await expect(ms2ParentSpanLocText).toBe('50", 33');
    await expect(ms2ParentSpanLocHtml).toBe('50", <span style="font-weight:bold">33</span>');
  });
});
