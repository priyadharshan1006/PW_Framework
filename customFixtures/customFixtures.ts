import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../POM/loginPage';
import { DashBoardPage } from "../POM/dashBoardPage";
import { PIMPage } from "../POM/pimPage";

type PageFixture = {
    loginPage: LoginPage;
    dashBoardPage: DashBoardPage;
    pimPage: PIMPage; // Lowercase variable convention
};

export const test = baseTest.extend<PageFixture>({
    loginPage: async ({ page, context }, use) => {
        const loginPage = new LoginPage(page, context); 
        await use(loginPage);
    },
    dashBoardPage: async ({ page, context }, use) => {
        const dashBoardPage = new DashBoardPage(page, context); 
        await use(dashBoardPage);
    },
    pimPage: async ({ page, context }, use) => {
        const pimPageInstance = new PIMPage(page, context); // Renamed instance variable
        await use(pimPageInstance);
    }
});