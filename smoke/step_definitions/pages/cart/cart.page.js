class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = '#checkout';
        this.addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
        this.shoppingCartLink = '.shopping_cart_link';
        this.checkoutButton = '#checkout';
        this.page = page;
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.postalCodeInput = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.successMessage = '.complete-header';
    }

    async clickCheckout() {
        await this.page.click(this.checkoutButton);
    }

    async addToCart() {
        await this.page.click(this.addToCartButton);
    }

    async openCart() {
        await this.page.click(this.shoppingCartLink);
    }

    async clickCheckout() {
        await this.page.click(this.checkoutButton);
    }

    async enterInformation(firstName, lastName, postalCode) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.postalCodeInput, postalCode);
    }

    async continue() {
        await this.page.click(this.continueButton);
    }

    async finish() {
        await this.page.click(this.finishButton);
    }

    async getSuccessMessage() {
        return await this.page.textContent(this.successMessage);
    }
    
}

module.exports = CartPage;