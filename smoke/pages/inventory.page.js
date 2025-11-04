class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = '.inventory_list button.btn_primary';
    this.cartLink = '.shopping_cart_link';
  }

  async addFirstProduct() {
    // add first visible product
    const buttons = await this.page.$$(this.addToCartButtons);
    if (buttons.length === 0) throw new Error('No products found to add');
    await buttons[0].click();
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = InventoryPage;
