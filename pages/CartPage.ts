import { Locator, Page } from "@playwright/test";
import { ProductPage } from "./ProductPage";
import { LoginPage } from "./LoginPage";

export class CartPage extends ProductPage {
    readonly qtyColumn: Locator;
    readonly descriptionColumn: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    readonly cartProductList: String[] | Locator;

    constructor(page: Page){
        super(page);
        this.qtyColumn = page.getByText('QTY');
        this.descriptionColumn = page.getByText('Description');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping'});
        this.checkoutButton = page.getByRole('button', { name: 'Checkout'});
    }
};