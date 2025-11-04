const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const playwright = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.context = null;
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  // launch browser and new page for each scenario
  this.browser = await playwright.chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});
