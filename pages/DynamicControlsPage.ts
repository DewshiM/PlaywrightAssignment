import { Locator , Page , expect } from "@playwright/test";

export default class DynamicControlsPage {
    readonly page: Page;
    readonly pageHeader: Locator;
    readonly checkbox: Locator;
    readonly toggleCheckboxBtn: Locator;
    readonly inputField: Locator;
    readonly toggleInputBtn: Locator;
    readonly message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.locator("(//div[@class='example']/h4)[1]");
        this.checkbox = page.locator('#checkbox');
        this.toggleCheckboxBtn = page.locator('#checkbox-example button');
        this.inputField = page.locator('#input-example input');
        this.toggleInputBtn = page.locator('#input-example button');
        this.message = page.locator('#message');
    }

    async wait_till_dynamic_controls_page_load() {
        await this.page.waitForSelector("(//div[@class='example']/h4)[1]");
    }

    async verify_navigated_to_dynamic_controls_page() {
        await expect(this.pageHeader).toContainText("Dynamic Controls");
    }

    async removeCheckbox() {
    await this.toggleCheckboxBtn.click();
    await expect(this.checkbox).toBeHidden();
    await expect(this.message).toHaveText("It's gone!");
  }

  async addCheckbox() {
    await this.toggleCheckboxBtn.click();
    await expect(this.checkbox).toBeVisible();
    await expect(this.message).toHaveText("It's back!");
  }

  async enableInput() {
    await this.toggleInputBtn.click();
    await expect(this.inputField).toBeEnabled();
    await expect(this.message).toHaveText("It's enabled!");
  }

  async disableInput() {
    await this.toggleInputBtn.click();
    await expect(this.inputField).toBeDisabled();
    await expect(this.message).toHaveText("It's disabled!");
  }
}

