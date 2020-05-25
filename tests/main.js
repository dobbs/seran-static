// ESM syntax is supported.
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localtest.me:2015/');
  await page.$eval('wiki-link', el => el.click({preventDefault:_=>{}}));
  await page.$('h1[title="This Link"]');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
export {}
