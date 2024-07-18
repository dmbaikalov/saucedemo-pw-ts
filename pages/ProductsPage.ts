import { Page, expect, Locator } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class ProductsPage extends LoginPage {
    readonly cartIcon: Locator;
    readonly burgerMenu: Locator;
    readonly logoutButton: Locator;
    readonly addItemToCart: Locator[];
    readonly itemsOnPage: Locator[];
    readonly cartButton: Locator;
    readonly cartWithProducts: Locator;

        
    constructor(page: Page){
        super(page);
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.cartWithProducts = page.locator('[data-test="shopping-cart-badge"]');
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
        this.addItemToCart = [
            page.locator(".btn_inventory").nth(0),
            page.locator(".btn_inventory").nth(1),
            page.locator(".btn_inventory").nth(2),
            page.locator(".btn_inventory").nth(3),
            page.locator(".btn_inventory").nth(4),
            page.locator(".btn_inventory").nth(5),
        ];
        this.itemsOnPage = [
            page.locator('div.inventory_item_name').nth(0),
            page.locator('div.inventory_item_name').nth(1),
            page.locator('div.inventory_item_name').nth(2),
            page.locator('div.inventory_item_name').nth(3),
            page.locator('div.inventory_item_name').nth(4),
            page.locator('div.inventory_item_name').nth(5),
        ];
    }
    
    async cartIconIsVisible(){
        await expect(this.cartIcon).toBeVisible();
    }

    
}