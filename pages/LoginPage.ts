import { Page, expect, Locator } from '@playwright/test';
import { userData, mainLink } from '../helpers/TestData';
import { Url } from 'url';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly userPasswordField: Locator;
    readonly loginButton: Locator;
    readonly loginPageLogo: Locator;
    readonly productPageLink: String;

    
    constructor(page: Page){
        this.page = page;
        this.productPageLink = "https://www.saucedemo.com/inventory.html"
        this.loginPageLogo = page.getByText('Swag Labs');
        this.usernameField = page.locator('[data-test="username"]');
        this.userPasswordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async open(){
        await this.page.goto(mainLink);
    }

    async fillLoginFormAndSubmit(){
        await this.usernameField.fill(userData.username);
        await this.userPasswordField.fill(userData.password);
        await this.loginButton.click();
    }

    async checkIfLoginWasSuccesful() {
        await expect(this.page.url()).toEqual(this.productPageLink);
    }
}