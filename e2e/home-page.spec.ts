import { test, expect } from '@playwright/test';

import { HomePage } from './page-objects/home-page.po';

test.describe('Home Page', () => {
	let homePage: HomePage;

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page);
		await homePage.goto();
	});

	test('should display the main title', async () => {
		await homePage.expectTitleToBeVisible();
	});

	test('should display the main menu', async () => {
		await homePage.expectMenuToBeVisible();
	});

	test('should display all menu items', async () => {
		await homePage.expectAllMenuItemsToBeVisible();
	});

	test('should have exactly 3 menu items', async () => {
		const menuItemCount = await homePage.getMenuItemCount();
		expect(menuItemCount).toBe(3);
	});

	test('should have correct menu item texts', async () => {
		await homePage.expectMenuItemsToHaveCorrectText();
	});

	test('should have correct menu item links', async () => {
		const loadGameHref = await homePage.getLoadGameHref();
		const adminHref = await homePage.getAdminHref();

		expect(loadGameHref).toBe('/games');
		expect(adminHref).toBe('/admin');
	});

	test('should have dynamic new game link', async () => {
		const newGameHref = await homePage.getNewGameHref();

		// New game link should start with /games/ and have a dynamic ID
		expect(newGameHref).toMatch(/^\/games\/[a-zA-Z0-9_-]+$/);
	});

	test('should navigate to games list when clicking Load Game', async ({
		page,
	}) => {
		await homePage.clickLoadGame();

		await expect(page).toHaveURL('/games');
		await expect(page.locator('h1')).toHaveText('Games List');
	});

	test('should navigate to admin when clicking Admin', async ({ page }) => {
		await homePage.clickAdmin();

		await expect(page).toHaveURL('/admin');
		await expect(page.locator('p')).toHaveText('admin-root works!');
	});

	test('should navigate to new game when clicking New Game', async ({
		page,
	}) => {
		const newGameHref = await homePage.getNewGameHref();
		if (!newGameHref) throw 'not found';
		await homePage.clickNewGame();

		await expect(page).toHaveURL(newGameHref);
		// The game page should be loaded (checking for game container or similar)
		await expect(page.locator('body')).toBeVisible();
	});

	test('should have accessible menu items', async () => {
		// Check that menu items are keyboard accessible
		await homePage.newGameLink.focus();
		await expect(homePage.newGameLink).toBeFocused();

		await homePage.loadGameLink.focus();
		await expect(homePage.loadGameLink).toBeFocused();

		await homePage.adminLink.focus();
		await expect(homePage.adminLink).toBeFocused();
	});
});

