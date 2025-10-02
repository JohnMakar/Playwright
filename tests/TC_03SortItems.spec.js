import {test ,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage'
import { HomePage } from '../page/HomePage'

test('Sort Items Low To High', async ({page}) => {
    /*Take instance Of used Classes*/
    const login = new LoginPage(page);
    const home = new HomePage(page);

    /* Login */
    await login.GoToLoginPage();
    await login.InPutLoginData("standard_user","secret_sauce");
    await login.ClickLoginBtn();

    /* Sort Items By Price*/
    await home.SortItems('lohi');

    /*Store All Prices in Variable*/
    const prices = await home.getAllProductPrices();
    const sorted = [...prices].sort((a,b) => a - b);

    /* Assert is items sorted or Not */
    expect(prices).toEqual(sorted);

    /*Close The Browser*/
    await page.close();
 
})