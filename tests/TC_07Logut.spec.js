import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';
import { BurgerMenu } from '../page/BurgerMenu';

test ('Logout Feature',async({page})=>{
    const login = new LoginPage(page);
    const menu = new BurgerMenu(page);

    /*Login*/
    await login.GoToLoginPage();
    await login.InPutLoginData("standard_user","secret_sauce");
    await login.ClickLoginBtn();

    /*Click on Burger menu Btn*/
    await menu.ClickOnMenu();
    /*Click on Logout Btn*/
    await menu.ClickOnLogoutBtn();
    /*Assert*/ 
    const isLoginVisible = await menu.isBackToLogin();
    expect(isLoginVisible).toBeTruthy();

    /*Close The Browser*/
    await page.close();

})