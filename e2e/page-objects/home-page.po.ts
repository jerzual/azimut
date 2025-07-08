import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Page Object Model for the Home page
 * Contains all the selectors and methods for interacting with the home page
 */
export class HomePage {
  readonly page: Page;
  readonly appTitle: Locator;
  readonly menuContainer: Locator;
  readonly menuItems: Locator;
  readonly newGameLink: Locator;
  readonly loadGameLink: Locator;
  readonly adminLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.appTitle = page.locator('h1.home-title');
    this.menuContainer = page.locator('ul.menu.widget');
    this.menuItems = page.locator('li.menu-item');
    this.newGameLink = page.locator('a.menu-item-link', { hasText: 'New Game' });
    this.loadGameLink = page.locator('a.menu-item-link', { hasText: 'Load Game' });
    this.adminLink = page.locator('a.menu-item-link', { hasText: 'Admin' });
  }

  /**
   * Navigate to the home page
   */
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Check if the home page title is visible and contains expected text
   */
  async expectTitleToBeVisible() {
    await expect(this.appTitle).toBeVisible();
    await expect(this.appTitle).toHaveText('AZIMUT');
  }

  /**
   * Check if the main menu is visible
   */
  async expectMenuToBeVisible() {
    await expect(this.menuContainer).toBeVisible();
  }

  /**
   * Check if all menu items are visible
   */
  async expectAllMenuItemsToBeVisible() {
    await expect(this.newGameLink).toBeVisible();
    await expect(this.loadGameLink).toBeVisible();
    await expect(this.adminLink).toBeVisible();
  }

  /**
   * Get the count of menu items
   */
  async getMenuItemCount() {
    return await this.menuItems.count();
  }

  /**
   * Click on New Game link
   */
  async clickNewGame() {
    await this.newGameLink.click();
  }

  /**
   * Click on Load Game link
   */
  async clickLoadGame() {
    await this.loadGameLink.click();
  }

  /**
   * Click on Admin link
   */
  async clickAdmin() {
    await this.adminLink.click();
  }

  /**
   * Get the href attribute of a menu link
   */
  async getNewGameHref() {
    return await this.newGameLink.getAttribute('href');
  }

  async getLoadGameHref() {
    return await this.loadGameLink.getAttribute('href');
  }

  async getAdminHref() {
    return await this.adminLink.getAttribute('href');
  }

  /**
   * Check if all menu items have the correct text
   */
  async expectMenuItemsToHaveCorrectText() {
    await expect(this.newGameLink).toHaveText('New Game');
    await expect(this.loadGameLink).toHaveText('Load Game');
    await expect(this.adminLink).toHaveText('Admin');
  }
}