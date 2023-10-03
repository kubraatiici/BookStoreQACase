import { test, expect } from '@playwright/test';
import { loginPage } from '../utils/login_logout';


test.describe('Main Description tests', () => {
    let login_Page: loginPage;

    test.beforeEach(async ({ page }) => {
        login_Page = new loginPage(page);
    })

    test('has title', async ({ page }) => {
        await page.goto('https://demoqa.com');
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/DEMOQA/);
    });

    test('login success', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await login_Page.setUsername("kubra.atıcı");
        await login_Page.setPassword("Test123*");
        await login_Page.clickLoginButton();
        await expect(page).toHaveURL("https://demoqa.com/profile");
    });
    test('login fail with incorrect email', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await login_Page.setUsername("kubra.atıcı2");
        await login_Page.setPassword("Test123*");
        await login_Page.clickLoginButton();
        await login_Page.expectErrorMessage();
    });
    test('login fail with incorrect password', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await login_Page.setUsername("kubra.atıcı");
        await login_Page.setPassword("Test123*vcscvd");
        await login_Page.clickLoginButton();
        await login_Page.expectErrorMessage();
    });
    test('login fail with empty username', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await login_Page.setUsername("");
        await login_Page.setPassword("Test123*");
        await login_Page.clickLoginButton();
        await login_Page.expectEmptyControl('userName');
    });
    test('login fail with empty password', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await login_Page.setUsername("kubra.atıcı");
        await login_Page.setPassword("");
        await login_Page.clickLoginButton();
        await login_Page.expectEmptyControl('password');
    });
    test('login fail with empty password and username', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await login_Page.setUsername("");
        await login_Page.setPassword("");
        await login_Page.clickLoginButton();
        await login_Page.expectEmptyControl('userName');
        await login_Page.expectEmptyControl('password');
    });
    test('logout success', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await login_Page.logOut('kubra.atıcı', 'Test123*' );
    });
});


