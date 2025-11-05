const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('./login.page');
const data = require('../../../../utils/data.json');

Given('I open the saucedemo homepage', async function() {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.open();
});

When('I login with standard user', async function() {
    await this.loginPage.login(data.credentials.username, data.credentials.password);
});