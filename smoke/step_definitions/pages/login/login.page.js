class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.saucedemo.com/';
    this.username = '#user-name';
    this.password = '#password';
    this.loginButton = '#login-button';
  }

  async open() {
    await this.page.goto(this.url);
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginButton);
  }
}

module.exports = LoginPage;
