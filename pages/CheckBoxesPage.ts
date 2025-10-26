import {Page, Locator, expect} from "@playwright/test";

export default class CheckBoxPage{
    readonly page:Page;
    readonly pageHeader: Locator;
    readonly firstCheckbox: Locator;
    readonly secondCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.locator("//div[@class='example']/h3");
        this.firstCheckbox = page.locator("//form[@id='checkboxes']/input[1]");
        this.secondCheckbox = page.locator("//form[@id='checkboxes']/input[2]");
    }

    async wait_till_checkboxes_page_load() {
        await this.page.waitForSelector("//div[@class='example']/h3");
    }

    async verify_navigated_to_checkboxes_page() {
        await expect(this.pageHeader).toContainText("Checkboxes");
    }

    async checkIfNotSelected(checkbox: Locator) {
    const isAlreadyChecked = await checkbox.isChecked();
        if (!isAlreadyChecked) {
            await checkbox.check(); 
        }
    }

    async selectAllCheckboxesIfNotChecked() {
        await this.checkIfNotSelected(this.firstCheckbox);
        await this.checkIfNotSelected(this.secondCheckbox);
    }

    async verifyAllCheckboxesAreChecked() {
        const checkboxes = [this.firstCheckbox, this.secondCheckbox];
        for (const checkbox of checkboxes) {
            await expect(checkbox).toBeChecked();
        }
    }

}