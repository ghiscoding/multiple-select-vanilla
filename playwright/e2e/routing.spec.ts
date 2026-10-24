import { expect, test } from '@playwright/test';

// Match Vite development modules and production chunks, including raw HTML modules.
const example02Module = /\/(?:src\/examples\/)?example02(?:\.ts|(?:\.html)?-[^/]+\.js|\.html\?raw)/;

test.describe('SPA routing', () => {
  test('loads example modules only after navigation and supports browser history', async ({ page }) => {
    const requests: string[] = [];
    page.on('request', request => requests.push(request.url()));
    await page.goto('/');
    await expect(page.locator('.bd-title')).toHaveText('Getting Started');
    expect(requests.filter(url => /\/(?:src\/examples\/)?example\d+/.test(url))).toEqual([]);

    await page.locator('#example01').click();
    await expect(page.locator('.ms-parent')).toHaveCount(2);
    expect(requests.some(url => /\/example01[.-]/.test(url))).toBe(true);
    expect(requests.some(url => example02Module.test(url))).toBe(false);

    await page.locator('#example02').click();
    await expect(page.locator('.bd-title')).toContainText('Multiple Select');
    expect(requests.some(url => example02Module.test(url))).toBe(true);
    await page.goBack();
    await expect(page.locator('#example01')).toHaveClass(/active/);
    await expect(page.locator('.bd-title')).toContainText('Single Select');
    await page.goBack();
    await expect(page.locator('.bd-title')).toHaveText('Getting Started');
    await page.goForward();
    await expect(page.locator('.ms-parent')).toHaveCount(2);
    await expect(page).toHaveTitle('Multiple-Select-Vanilla · example01');
  });

  test('ignores a slow route after a newer navigation completes', async ({ page }) => {
    let release!: () => void;
    const pending = new Promise<void>(resolve => {
      release = resolve;
    });
    await page.route(example02Module, async route => {
      await pending;
      await route.continue();
    });
    await page.goto('#/example01');
    await expect(page.locator('.ms-parent')).toHaveCount(2);
    const requested = page.waitForRequest(example02Module);
    await page.locator('#example02').click();
    await requested;
    await expect(page.locator('.panel-wm-content')).toHaveText('Loading...');
    await page.locator('#getting-started').click();
    await expect(page.locator('.bd-title')).toHaveText('Getting Started');
    const loaded = page.waitForEvent('requestfinished', request => example02Module.test(request.url()));
    release();
    await loaded;
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    await expect(page.locator('.bd-title')).toHaveText('Getting Started');
    await expect(page.locator('.ms-parent')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/getting-started$/);
    await expect(page.locator('#getting-started')).toHaveClass(/active/);
  });

  test('cleans up dropdowns outside the route and dark mode on navigation', async ({ page }) => {
    await page.goto('#/options17');
    await page.locator('.select4.ms-parent').click();
    await expect(page.locator('body > .ms-drop')).toBeVisible();
    await page.locator('#example15').click();
    await expect(page.locator('.panel-wm-content')).toHaveClass(/dark-mode/);
    await expect(page.locator('body > .ms-drop')).toHaveCount(0);
    await page.locator('#example01').click();
    await expect(page.locator('.ms-parent')).toHaveCount(2);
    await expect(page.locator('.panel-wm-content')).not.toHaveClass(/dark-mode/);
    await page.locator('#options17').click();
    await page.locator('.select4.ms-parent').click();
    await expect(page.locator('body > .ms-drop')).toHaveCount(1);
  });

  test('supports direct hashes, the Examples alias, and unknown routes', async ({ page }) => {
    await page.goto('#/missing-route');
    await expect(page.locator('.bd-title')).toHaveText('Getting Started');
    await expect(page).toHaveURL(/#\/getting-started$/);
    await page.locator('#examples').click();
    await expect(page.locator('.ms-parent')).toHaveCount(2);
    await expect(page.locator('#examples')).toHaveClass(/active/);
    await expect(page.locator('#example01')).toHaveClass(/active/);
    await page.evaluate(() => {
      window.location.hash = '#/methods04';
    });
    await expect(page.locator('#disableBtn')).toBeVisible();
    await expect(page.locator('#methods04')).toHaveClass(/active/);
    await page.locator('#disableBtn').click();
    await expect(page.locator('.ms-choice')).toBeDisabled();
  });

  test('shows a route load failure and allows navigation to another page', async ({ page }) => {
    await page.route(example02Module, route => route.abort());
    await page.goto('#/example02');
    await expect(page.getByRole('alert')).toContainText('Unable to load this page');
    await expect(page.locator('.panel-wm-content')).not.toHaveAttribute('aria-busy');
    await page.locator('#example01').click();
    await expect(page.locator('.ms-parent')).toHaveCount(2);
    await expect(page.getByRole('alert')).toHaveCount(0);
  });
});
