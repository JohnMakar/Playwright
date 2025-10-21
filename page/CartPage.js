exports.CartPage =
class CartPage{
    constructor(page){
        this.page=page;
        this.cartItems = page.locator('.cart_item');
        this.cartPageTitle = page.locator('[data-test = "title"]')
    }
async isProductInCart(productName) {
    const count = await this.cartItems.count();

    for (let i = 0; i < count; i++) {
      const name = await this.cartItems.nth(i).locator('.inventory_item_name').innerText();
      if (name.trim() === productName) {
        return true;
      }
    }

    return false;
  }

  async isInCart(){
    return await this.cartPageTitle.innerText();
  }
}