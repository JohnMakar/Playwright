exports.CheckoutPage = 
class CheckoutPage{
    constructor(page){
        this.page = page;
        /* Checkout Btn */
        this.CheckoutBtn = page.locator('[data-test="checkout"]');
        /*First Name Field*/
        this.firstNameField = page.locator('[data-test="firstName"]');
        /*Last Name Field*/
        this.lastNameField = page.locator('[data-test="lastName"]');
        /*Zip Code Field*/
        this.ZipCodeField = page.locator('[data-test="postalCode"]');
        /*Continue Btn*/
        this.continueButton = page.locator('[data-test="continue"]');
        /*Finsh Btn*/
        this.finishButton = page.locator('[data-test="finish"]');
        /*Cancel Btn*/
        this.CancelButton = page.locator('#cancel');
        /* Page Header */ 
        this.successHeader = page.locator('.complete-header');
        /* Cart Title */
        this.cartTitle = page.locator('.title');
    }
    async ClickCheckoutBtn(){
        await this.CheckoutBtn.click();
    }

    async CheckoutFormInput(firstName,lastName,ZipCode){
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.ZipCodeField.fill(ZipCode);
        await this.continueButton.click();
    }

    async ClickFinishBtn(){
        await this.finishButton.click();
    }
    async ClickCancelBtn(){
        await this.CancelButton.click();
    }

    async isBackToCart(){
        return await this.cartTitle.innerText();
    }
    async getSucessMessage(){
        return await this.successHeader.innerText();
    }
}