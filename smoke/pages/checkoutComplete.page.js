class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.finishButton = '#finish';
    this.completeHeader = '.complete-header';
  }

  async finishOrder() {
    await this.page.click(this.finishButton);
  }

  async getSuccessMessage() {
    return (await this.page.textContent(this.completeHeader)).trim();
  }
}

module.exports = CheckoutCompletePage;
