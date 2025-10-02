import {test ,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { HomePage } from '../page/HomePage'
import { CartPage } from '../page/CartPage';

test('Add Products Feature',async({page}) => {
    /* Take Objects Of Used Classes */
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const cart = new CartPage(page);

    /* Login */
    await login.GoToLoginPage();
    await login.InPutLoginData("standard_user","secret_sauce");
    await login.ClickLoginBtn();

    /* Add Items To Cart */
    await home.addProductToCart("Sauce Labs Backpack");
    await home.addProductToCart("Sauce Labs Bolt T-Shirt");
    await home.goToCart();

    /* Assert that Wanted Item Added To Cart*/ 
    const isFirstInCart = await cart.isProductInCart('Sauce Labs Backpack');
    expect (isFirstInCart).toBeTruthy();
    const isSecondInCart = await cart.isProductInCart('Sauce Labs Bolt T-Shirt');
    expect (isSecondInCart).toBeTruthy();
    
    /*Close The Browser*/
    await page.close();
})