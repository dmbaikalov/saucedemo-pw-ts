import { Page, test, expect, Locator} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.ts';

test('Login page validation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.open();
    await expect(loginPage.usernameField).toBeVisible();
    await expect(loginPage.userPasswordField).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
});

