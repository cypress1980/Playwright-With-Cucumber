const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const CartPage = require('../cart/cart.page');
const CheckoutPage = require('../checkout/checkout.page');
const data = require('../../../../utils/data.json');

// When('I add one product to the cart', async function() {
//     await this.inventoryPage.addToCart();
// });

// When('I open the cart', async function() {
//     await this.inventoryPage.openCart();
//     this.cartPage = new CartPage(this.page);
// });

// When('I click checkout', async function() {
//     await this.cartPage.clickCheckout();
//     this.checkoutPage = new CheckoutPage(this.page);
// });

// When('I enter checkout information', async function() {
//     await this.checkoutPage.enterInformation(
//         data.checkout.firstName,
//         data.checkout.lastName,
//         data.checkout.postalCode
//     );
// });

// When('I continue to overview', async function() {
//     await this.checkoutPage.continue();
// });

// When('I finish the order', async function() {
//     await this.checkoutPage.finish();
// });

// Then('I should see the success message {string}', async function(message) {
//     const actualMessage = await this.checkoutPage.getSuccessMessage();
//     assert.strictEqual(actualMessage, message);
// });