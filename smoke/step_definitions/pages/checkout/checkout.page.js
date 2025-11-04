class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.postalCodeInput = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.successMessage = '.complete-header';
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

module.exports = CheckoutPage;