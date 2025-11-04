class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
        this.shoppingCartLink = '.shopping_cart_link';
    }

    async addToCart() {
        await this.page.click(this.addToCartButton);
    }

    async openCart() {
        await this.page.click(this.shoppingCartLink);
    }
}

module.exports = InventoryPage;