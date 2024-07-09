import { Locator, Page } from "@playwright/test";
import { ProductsPage } from "./ProductsPage";

export class ProductPage extends ProductsPage{
    
    readonly productName: Locator;
    readonly productPricture: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly addProductToCartButton: Locator;
    
    constructor(page:Page){
        super(page);
        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.productPricture = page.locator('.inventory_details_img');
        this.productDescription = page.locator('[data-test="inventory-item-desc"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
        this.addProductToCartButton = page.locator('[data-test="add-to-cart"]');
    }


}