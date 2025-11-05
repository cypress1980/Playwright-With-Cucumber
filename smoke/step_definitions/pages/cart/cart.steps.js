const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const CartPage = require('./cart.page');
const data = require('../../../../utils/data.json');

const cartPage = new CartPage(this.page);

When('I add one product to the cart', async function() {
    cartPage.addToCart()
    //this.cartPage = new CartPage(this.page);
    //await CartPage.addToCart(this.page)
    //await this.cartPage.addToCart();
});

When('I open the cart', async function() {
    cartPage.openCart()
    //this.cartPage = new CartPage(this.page);
    //await this.cartPage.openCart();
    
});

When('I click checkout', async function() {
    cartPage.clickCheckout()
    //this.cartPage = new CartPage(this.page);
    //await this.cartPage.clickCheckout();
});

When('I enter checkout information', async function() {
    cartPage.enterInformation(data.checkout.firstName,data.checkout.lastName,data.checkout.postalCode)
    //this.cartPage = new CartPage(this.page);
    //await this.cartPage.enterInformation(data.checkout.firstName,data.checkout.lastName,data.checkout.postalCode);
});

When('I continue to overview', async function() {
    cartPage.continue()
    //this.cartPage = new CartPage(this.page);
    //await this.cartPage.continue();
});

When('I finish the order', async function() {
    cartPage.finish()
    //this.cartPage = new CartPage(this.page);
    //await this.cartPage.finish();
});

Then('I should see the success message {string}', async function(message) {
    cartPage.getSuccessMessage()
    //this.cartPage = new CartPage(this.page);
    //const actualMessage = await this.cartPage.getSuccessMessage();
    assert.strictEqual(actualMessage, message);
});