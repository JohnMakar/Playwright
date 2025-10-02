exports.LoginPage = 
class LoginPage{
    constructor (page){
        this.page = page;
        this.usernamefield = '#user-name';
        this.passwordField = '#password';
        this.LoginBtn = '#login-button';
    }

    async GoToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async InPutLoginData(username,password){
        await this.page.locator(this.usernamefield).fill(username);
        await this.page.locator(this.passwordField).fill(password);
    }

    async ClickLoginBtn(){
        await this.page.locator(this.LoginBtn).click();
    }

}