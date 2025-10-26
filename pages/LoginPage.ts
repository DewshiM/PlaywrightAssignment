import { Locator , Page , expect } from "@playwright/test";

export default class LoginPage {
    readonly page: Page;
    readonly pageHeader: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly flashMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.locator("//div[@class='example']/h2");
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.flashMessage = page.locator('#flash');
    }

    async wait_till_login_page_load() {
        await this.page.waitForSelector("//div[@class='example']/h2");
    }

    async verify_navigated_to_login_page() {
        await expect(this.pageHeader).toContainText("Login Page");
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertFlashMessageContains(text: string) {
        await expect(this.flashMessage).toContainText(text);
    }
}

