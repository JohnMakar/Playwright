import {test, expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { HomePage } from '../page/HomePage'
import { CartPage } from '../page/CartPage'
import { CheckoutPage } from '../page/CheckoutPage'

test ('Complete Checkout Form',async ({page}) =>{
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    /* Login First */ 
    await login.GoToLoginPage();
    await login.InPutLoginData("standard_user","secret_sauce");
    await login.ClickLoginBtn();
    /* From Home Page Add Items */
    await home.addProductToCart("Sauce Labs Backpack");
    await home.addProductToCart("Sauce Labs Bolt T-Shirt");
    /* GO TO Cart Page */
    await home.goToCart();
    /*Goto Checkout Form*/
    await checkout.ClickCheckoutBtn();
    /*Fill CheckoutForm*/
    await checkout.CheckoutFormInput("John","Makar","123");
    /* Continue CheckOut */
    await checkout.ClickFinishBtn();
    /*Make Sure that Checkout is completed*/
    const sucess = await checkout.getSucessMessage();
    expect(sucess).toContain("Thank you for your order!");
    /*Close The Page*/
    await page.close();
})