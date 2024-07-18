import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { ProductsPage } from '../pages/ProductsPage.ts';
import { ProductPage } from '../pages/ProductPage.ts';

let productsPage: ProductsPage;
let loginPage: LoginPage;
let productPage: ProductPage;

test.describe('Products page validations', () => {
  test.beforeEach(({page}) => {
    productsPage = new ProductsPage(page);
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
  });

  test('Validate that Log Out button is visible', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.burgerMenu.click();
    await productsPage.logoutButton.click();
  });

  test('Validate that products Cart is visible', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await expect(productsPage.cartIcon).toBeVisible();
});

  test('Product name, picture, description, price, add to cart button is visible on product page', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.itemsOnPage[1].click();
    await expect(productPage.productName).toBeVisible();
    await expect(productPage.productPricture).toBeVisible();
    await expect(productPage.productPrice).toBeVisible();
    await expect(productPage.productDescription).toBeVisible();
    await expect(productPage.addProductToCartButton).toBeVisible();
});
});
