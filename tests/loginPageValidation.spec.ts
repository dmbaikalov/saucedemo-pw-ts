import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

let loginPage: LoginPage;


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

})


