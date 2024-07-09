import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';


test('User login is succesful', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillLoginFormAndSubmit();
  await loginPage.checkIfLoginWasSuccesful();
})

test('Adding product to the cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillLoginFormAndSubmit();
  await productsPage.addItemToCart[1].click();
  await expect(productsPage.cartWithProducts).toHaveText('1');
});

test('Adding two products to the cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillLoginFormAndSubmit();
  await productsPage.addItemToCart[0].click();
  await productsPage.addItemToCart[5].click();
  await expect(productsPage.cartWithProducts).toHaveText('2');
});


