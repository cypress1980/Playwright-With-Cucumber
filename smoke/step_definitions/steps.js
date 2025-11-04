const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPage = require('../pages/login.page');
const InventoryPage = require('../pages/inventory.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');
const CheckoutCompletePage = require('../pages/checkoutComplete.page');
const data = require('../../utils/data.json');

Given('I open the saucedemo homepage', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When('I login with standard user', async function () {
  await this.loginPage.login(data.credentials.username, data.credentials.password);
  this.inventoryPage = new InventoryPage(this.page);
});

When('I add one product to the cart', async function () {
  await this.inventoryPage.addFirstProduct();
});

When('I open the cart', async function () {
  await this.inventoryPage.openCart();
  this.cartPage = new CartPage(this.page);
});

When('I click checkout', async function () {
  await this.cartPage.clickCheckout();
  this.checkoutPage = new CheckoutPage(this.page);
});

When('I enter checkout information', async function () {
  await this.checkoutPage.enterInfo(data.checkout.firstName, data.checkout.lastName, data.checkout.postalCode);
});

When('I continue to overview', async function () {
  await this.checkoutPage.clickContinue();
  this.checkoutCompletePage = new CheckoutCompletePage(this.page);
});

When('I finish the order', async function () {
  await this.checkoutCompletePage.finishOrder();
});

Then('I should see the success message {string}', async function (expected) {
  const msg = await this.checkoutCompletePage.getSuccessMessage();
  // allow punctuation differences (e.g. trailing '!') — check that the expected
  // substring appears in the actual message
  assert.ok(msg.includes(expected), `Expected "${msg}" to include "${expected}"`);
});
