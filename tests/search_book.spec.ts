import { test, expect } from '@playwright/test';

test('success search book', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    await page.locator('#searchBox').fill('java');
    const bookElements = await page.$$('[id^="see-book-"]');

    for (const element of bookElements) {
      const text = await element.textContent();
      console.log(text);
      await expect(text?.toLocaleLowerCase()).toMatch(/java/);
    }
});