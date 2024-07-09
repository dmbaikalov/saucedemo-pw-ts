import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';
import { ProductsPage } from '../pages/ProductsPage.ts';
import { ProductPage } from '../pages/ProductPage.ts';


test('Validate that Log Out button is visible', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillLoginFormAndSubmit();
  await productsPage.burgerMenu.click();
  await productsPage.logoutButton.click();
});

test('Validate that products Cart is visible', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.fillLoginFormAndSubmit();
  await expect(productsPage.cartIcon).toBeVisible();
});

/** --- TO DO ---
 *        Треба розбити тест знизу на 5 частин, зрозуміти як винести 
 *        productPage, loginPage, productsPage в прекондішн для всіх тестів
 */ 
test('Product name, picture, description, price, add to cart button is visible on product page', async ({ page }) => {
  const productPage = new ProductPage(page);
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.open();
  await loginPage.fillLoginFormAndSubmit();
  await productsPage.itemsOnPage[1].click();
  await expect(productPage.productName).toBeVisible();
  await expect(productPage.productPricture).toBeVisible();
  await expect(productPage.productPrice).toBeVisible();
  await expect(productPage.productDescription).toBeVisible();
  await expect(productPage.addProductToCartButton).toBeVisible();
});