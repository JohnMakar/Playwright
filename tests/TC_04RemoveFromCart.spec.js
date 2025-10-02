import {test, expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { HomePage } from '../page/HomePage'
import { CartPage } from '../page/CartPage'

test ('Remove Item From Cart',async ({page}) => {
    /*Take Object of Used Classes*/
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const cart = new CartPage(page)

    /* Login First */ 
    await login.GoToLoginPage();
    await login.InPutLoginData("standard_user","secret_sauce");
    await login.ClickLoginBtn();

    /* From Home Page Add Items */
    await home.addProductToCart("Sauce Labs Backpack");
    await home.addProductToCart("Sauce Labs Bolt T-Shirt");

    /* GO TO Cart Page */
    await home.goToCart();

    /* Remove Item From Cart */
    await home.removeProduct("Sauce Labs Backpack")

    /* Check If item is remover or not */
    expect(await cart.isProductInCart('Sauce Labs Backpack')).toBeFalsy();
    
    /* Close The Page */
    page.close();
})