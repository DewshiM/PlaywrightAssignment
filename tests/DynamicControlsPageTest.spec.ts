import { test, expect } from '@playwright/test';
import DynamicControlsPage from "../pages/DynamicControlsPage";
import pageUrl from '../utils/constants/page-url-constants.json';

test.describe.parallel('Dynamic Controls Page', () => {
    
    test.beforeEach(async ({page}, testInfo) => {
        console.log(` Test Started ${testInfo.title} `);
        await page.goto(pageUrl.dynamic_controls_page);
    });

    test('should remove and add the checkbox successfully', async ({ page }) => {
        const dynamicControlsPage = new DynamicControlsPage(page);
        await dynamicControlsPage.removeCheckbox();
        await dynamicControlsPage.addCheckbox();
    });

    test('should enable and disable the input field', async ({ page }) => {
        const dynamicControlsPage = new DynamicControlsPage(page);
        await dynamicControlsPage.enableInput();
        await dynamicControlsPage.disableInput();
    });

})