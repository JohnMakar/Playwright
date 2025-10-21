import {test, expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { HomePage } from '../page/HomePage'
import { CartPage } from '../page/CartPage'

test ('Varify Cart Page',async ({page}) =>{
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const cart = new CartPage(page);
    /* Complete Login Flow */
    await login.GoToLoginPage();
    await login.InPutLoginData('standard_user','secret_sauce');
    await login.ClickLoginBtn();
    
    /* From Home Page Click on Cart Button */
    await home.goToCart();
    
    /* Make Sure The Browser Located in Cart Page */
    const pageTitle = await cart.isInCart();
    expect(pageTitle).toBe("Your Cart");
})