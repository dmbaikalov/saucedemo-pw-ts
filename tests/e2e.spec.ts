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
let productPage: ProductPage;
let cartPage: CartPage;

test.describe('Login page validations', () => {
    test.beforeEach(({ page }) => {
        loginPage = new LoginPage(page);
    })
    test('Username field is visible', async () => {
        await loginPage.open();
        await expect(loginPage.usernameField).toBeVisible();
    });

    test('Password field is visible', async () => {
        await loginPage.open();
        await expect(loginPage.userPasswordField).toBeVisible();
    });

    test('Login button is visible', async () => {
        await loginPage.open();
        await expect(loginPage.loginButton).toBeVisible();
    });

});

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

  test('Product name is visible on product page', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.itemsOnPage[1].click();
    await expect(productPage.productName).toBeVisible();
});
  test('Product picture is visible on product page', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.itemsOnPage[1].click();
    await expect(productPage.productPricture).toBeVisible();
});

  test('Product price is visible on product page', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.itemsOnPage[1].click();
    await expect(productPage.productPrice).toBeVisible();
});

  test('Product description is visible on product page', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.itemsOnPage[1].click();
    await expect(productPage.productDescription).toBeVisible();
});

  test('Cart button is visible on product page', async () => {
    await loginPage.open();
    await loginPage.fillLoginFormAndSubmit();
    await productsPage.itemsOnPage[1].click();
    await expect(productPage.addProductToCartButton).toBeVisible();
});
});

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
  
// TO-DO --> Separate duplicates with different methods
  
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



