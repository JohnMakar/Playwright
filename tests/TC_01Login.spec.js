import {test ,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { HomePage } from '../page/HomePage';

test ('Login Feature',async ({page}) => {

    /* Object Of LoginPage Class*/
    const login = new LoginPage(page);

    /*Open Link*/
    await login.GoToLoginPage();

    /*Login */
    await login.InPutLoginData("standard_user","secret_sauce");
    await login.ClickLoginBtn();

    /*Assert that the browser in Login Page*/
    await expect(page).toHaveTitle('Swag Labs');
    
    /*Close The Browser*/
    await page.close();
})