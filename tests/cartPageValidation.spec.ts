import { test, expect} from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductPage } from '../pages/ProductPage';


let productsPage: ProductsPage;
let loginPage: LoginPage;
let productPage: ProductPage;
let cartPage: CartPage;

test.describe('Cart Page Validations', () => {
    test.beforeEach(({page}) => {
        productsPage = new ProductsPage(page);
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
  });

    test('QTY column in the cart is visible', async () => {
        await loginPage.open();
        await loginPage.fillLoginFormAndSubmit();
        await productsPage.cartButton.click();
        await expect(cartPage.qtyColumn).toBeVisible(); 
});
    test('Description column in the cart is visible', async () => {
        await loginPage.open();
        await loginPage.fillLoginFormAndSubmit();
        await productsPage.cartButton.click();
        await expect(cartPage.descriptionColumn).toBeVisible();
    });

    test('Continue shopping button in the cart is visible', async () => {
        await loginPage.open();
        await loginPage.fillLoginFormAndSubmit();
        await productPage.cartButton.click();
        await expect(cartPage.continueShoppingButton).toBeVisible();
    });

    test('Checkout button in the cart is visible', async () => {
        await loginPage.open();
        await loginPage.fillLoginFormAndSubmit();
        await productPage.cartButton.click();
        await expect(cartPage.checkoutButton).toBeVisible();
    });

});


