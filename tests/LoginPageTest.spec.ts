import { test, expect } from '@playwright/test';
import LoginPage from "../pages/LoginPage";
import loginData from "../test-data/login-data.json";
import pageUrl from '../utils/constants/page-url-constants.json';
import dotenv from 'dotenv';
dotenv.config();

test.describe.parallel('Login Page', () => {
    
    test.beforeEach(async ({page}, testInfo) => {
        console.log(` Test Started ${testInfo.title} `);
        await page.goto(pageUrl.login_page);
    });

    test('successful login redirects to secure area', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login(process.env.LOGIN_USERNAME as string, process.env.LOGIN_PASSWORD as string);
        await loginPage.assertFlashMessageContains('You logged into a secure area!');
    });

    test('login with invalid credentials shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login(loginData.invalid_username, loginData.invalid_password);
        await loginPage.assertFlashMessageContains('Your username is invalid!');
    });

})