exports.LoginPage = 
class LoginPage{
    constructor (page){
        this.page = page;
        this.usernamefield = this.page.locator('#user-name');
        this.passwordField = this.page.locator('#password');
        this.LoginBtn = this.page.locator('#login-button');
    }

    async GoToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async InPutLoginData(username,password){
        await this.usernamefield.fill(username);
        await this.passwordField.fill(password);
    }

    async ClickLoginBtn(){
        await this.LoginBtn.click();
    }

}