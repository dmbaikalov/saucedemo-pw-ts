import { Locator, Page } from "@playwright/test";



export class CheckoutPage {
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly zipCodeField: Locator;
    readonly checkoutButton: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly checkOutIsComplete: Locator;

    constructor(page: Page){
        this.firstNameField = page.locator('[data-test="firstName"]');
        this.lastNameField = page.locator('[data-test="lastName"]');
        this.zipCodeField = page.locator('[data-test="postalCode"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueButton = page.getByRole("button", { name: 'Continue' });
        this.finishButton = page.getByRole("button", { name: 'Finish' });
        this.checkOutIsComplete = page.locator('.complete-header')
    }
}