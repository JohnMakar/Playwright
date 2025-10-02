exports.BurgerMenu = 
class BurgerMenu{
    constructor(page){
    this.page = page;
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.loginButton = page.locator('[data-test="login-button"]');
    }
    async ClickOnMenu(){
        await this.menuButton.click();
    }

     async ClickOnLogoutBtn() {
    await this.logoutLink.click();
    }
    async isBackToLogin() {
    return await this.loginButton.isVisible();
  }
}