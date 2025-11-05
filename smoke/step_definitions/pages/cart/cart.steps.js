const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');
const CartPage = require('./cart.page');
const data = require('../../../../utils/data.json');

let cartPage;

Before(async function() {
    cartPage = new CartPage(this.page);
});

When('I add one product to the cart', async function() {
    await cartPage.addToCart();
});

When('I open the cart', async function() {
    await cartPage.openCart();
});

When('I click checkout', async function() {
    await cartPage.clickCheckout();
});

When('I enter checkout information', async function() {
    await cartPage.enterInformation(data.checkout.firstName, data.checkout.lastName, data.checkout.postalCode);
});

When('I continue to overview', async function() {
    await cartPage.continue();
});

When('I finish the order', async function() {
    await cartPage.finish();
});

Then('I should see the success message {string}', async function(message) {
    const actualMessage = await cartPage.getSuccessMessage();
    assert.strictEqual(actualMessage, message);
});