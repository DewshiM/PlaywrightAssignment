import {test,expect} from "@playwright/test";
import CheckboxesPage from "../pages/CheckBoxesPage";
import pageUrl from '../utils/constants/page-url-constants.json';

test.describe.parallel('Checkboxes page', () => {

    test.beforeEach(async ({page}, testInfo) => {
        console.log(` Test Started ${testInfo.title} `);
        await page.goto(pageUrl.checkboxes_page);    
    });

    test("both checkboxes should be checked at the end", async ({ page }) => {
        const checkboxesPage = new CheckboxesPage(page);
        await checkboxesPage.wait_till_checkboxes_page_load();
        await checkboxesPage.verify_navigated_to_checkboxes_page();
        await checkboxesPage.selectAllCheckboxesIfNotChecked();
        await checkboxesPage.verifyAllCheckboxesAreChecked();    
    });

})