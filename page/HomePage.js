import { expect } from "@playwright/test";
exports.HomePage =
class HomePage {
    constructor(page){
        this.page = page;
        this.PageTitle = '//*[@id="header_container"]/div[1]/div[2]/div';
        this.SideMenu = '#react-burger-menu-btn';
        this.CartBtn ='//*[@id="shopping_cart_container"]/a';
        this.SortDropdown = this.page.locator('.product_sort_container');
        this.inventoryContainer ='#inventory_container';
        this.inventoryItems = page.locator('.inventory_item');
        this.AddToCartBtn = '//*[@id="add-to-cart-sauce-labs-backpack"]';
        this.itemName = '.inventory_item_name ';
        this.cartItems = page.locator('.cart_item');
    }
    async addProductToCart(productName) {
  const products = this.page.locator('.inventory_item');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const name = await products.nth(i).locator('.inventory_item_name').innerText();
    if (name.trim() === productName) {
      await products.nth(i).locator('button').click();
      return true;
    }
  }
  throw new Error(`Product "${productName}" not found`);
}
async goToCart(){
    await this.page.click(this.CartBtn);
}

async SortItems(option){
    await this.SortDropdown.selectOption(option);
}
 async getAllProductPrices() {
    const count = await this.inventoryItems.count(); 
    const prices = [];
    for (let i = 0; i < count; i++) {
      const priceText = await this.inventoryItems.nth(i).locator('.inventory_item_price').innerText();
      prices.push(parseFloat(priceText.replace('$', '')));
    }
    return prices;
  }

   async removeProduct(productName) {
    const count = await this.cartItems.count();
    for (let i = 0; i < count; i++) {
      const name = await this.cartItems.nth(i).locator('.inventory_item_name').innerText();
      if (name.trim() === productName) {
        await this.cartItems.nth(i).locator('button').click(); 
        return true;
      }
    }
    throw new Error(`Product "${productName}" not found in cart`);
  }
}
