import { Locator, Page, expect } from '@playwright/test'
export class loginPage {
    readonly page: Page
    element: Locator
    constructor (page: Page) {
      this.page = page
    }
    async setUsername (param) {
        await this.page.locator('#userName').fill(param);
    }
    async setPassword (param) {
        await this.page.locator('#password').fill(param);
    }
    async clickLoginButton () {
        await this.page.locator('#login').click();
    }
    async expectErrorMessage () {
        const errorMessageElement = await this.page.locator('#name');
        await expect(errorMessageElement).toHaveText('Invalid username or password!');
        await expect(this.page).toHaveURL("https://demoqa.com/login");
    }
    async expectEmptyControl (id:string) {
        const element = await this.page.locator('#'+id);
        await expect(element).toHaveClass(/is-invalid/);
        await expect(this.page).toHaveURL("https://demoqa.com/login");
    }
    async logOut (userName:string , password:string) {
        await expect(this.page).toHaveURL("https://demoqa.com/login");
        await this.page.locator('#userName').fill(userName);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#login').click();
        await expect(this.page).toHaveURL("https://demoqa.com/profile");
        await this.page.locator('button:has-text("Log out")').click();
        await expect(this.page).toHaveURL("https://demoqa.com/login");
    }

}
    