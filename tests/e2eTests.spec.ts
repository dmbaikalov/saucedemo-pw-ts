import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { userCredentials } from '../helpers/TestData';

let loginPage: LoginPage;
let productsPage: ProductsPage;
let checkoutPage: CheckoutPage;

test.describe('E2E tests', () => {
  test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  test('User can login on the website', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await loginPage.checkIfLoginWasSuccesful();
  });

  test('After adding a product to the cart, the user will be able to see the number one on the cart icon', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.addItemToCart[0].click();
    await expect(productsPage.cartButton).toHaveText('1');
  });

  test('After adding six products to the cart, the user will be able to see the number six on the cart icon', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.addItemToCart[0].click();
    await productsPage.addItemToCart[1].click();
    await productsPage.addItemToCart[2].click();
    await productsPage.addItemToCart[3].click();
    await productsPage.addItemToCart[4].click();
    await productsPage.addItemToCart[5].click();
    await expect(productsPage.cartButton).toHaveText('6');
  });

  test('User is able to choose a product and buy it', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.addItemToCart[1].click();
    await productsPage.cartButton.click();
    await checkoutPage.checkoutButton.click();
    await checkoutPage.firstNameField.fill(userCredentials.firstname);
    await checkoutPage.lastNameField.fill(userCredentials.lastname);
    await checkoutPage.zipCodeField.fill(userCredentials.zipcode);
    await checkoutPage.continueButton.click();
    await checkoutPage.finishButton.click();
    await expect(checkoutPage.checkOutIsComplete).toBeVisible();
  });


});



