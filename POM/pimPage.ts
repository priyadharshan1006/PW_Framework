import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from '../selectors/pimSelectors';
import { PlaywrightWrapper } from "../helpers/PlaywrightWrapper";

export class PIMPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    async verifyPimPage() {
        await this.validateElementVisibility(selectors.PIMText, "PIM");
    }

    async toClickAddEmployeebutton() {
        await this.click(selectors.addEmployee.add, "add button", "button");
    }

    async enterEmployeeName(firstName: string, middleName: string, lastName: string) {
        await this.interactWithElement(selectors.addEmployee.firstName.type, selectors.addEmployee.firstName.value, "fill", firstName);
        await this.interactWithElement(selectors.addEmployee.middleName.type, selectors.addEmployee.middleName.value, "fill", middleName);
        await this.interactWithElement(selectors.addEmployee.lastName.type, selectors.addEmployee.lastName.value, "fill", lastName);
        await this.click(selectors.addEmployee.save, "Save Button", "button");
    }
async enterPersonalInfo(
    licenseNumber: string,
    expiryDate: string,
    nationality: string,
    maritalStatus: string,
    dateOfBirth: string,
    gender: "Male" | "Female"
) {
    // 1. Driver's License Number
    const licenseInput = this.page.locator(selectors.PersonalDetails.DriversLicenseNumber);
    await licenseInput.waitFor({ state: 'visible' });
    await licenseInput.fill(licenseNumber);

    // 2. License Expiry Date
    const expiryInput = this.page.locator(selectors.PersonalDetails.LicenseExpiryDate);
    await expiryInput.fill(expiryDate);
    await expiryInput.press('Escape'); // Close calendar overlay

    // 3. Nationality Dropdown
    await this.click(selectors.PersonalDetails.Nationality, "Nationality", "button");
    await this.click(`//div[@role="option"]//span[normalize-space()="${nationality}"]`, nationality, "option");

    // 4. Marital Status Dropdown
    await this.click(selectors.PersonalDetails.MaritalStatus, "Marital Status", "button");
    await this.click(`//div[@role="option"]//span[normalize-space()="${maritalStatus}"]`, maritalStatus, "option");

    // 5. Date of Birth
    const dobInput = this.page.locator(selectors.PersonalDetails.DateofBirth);
    await dobInput.fill(dateOfBirth);
    await dobInput.press('Escape'); // Close calendar overlay

    // 6. Select Gender (Targeting label with force click to bypass wrapper intercepts)
    const genderSelector = gender === "Male"
        ? selectors.PersonalDetails.GenderMale
        : selectors.PersonalDetails.GenderFemale;

    const genderLabel = this.page.locator(genderSelector);
    await genderLabel.scrollIntoViewIfNeeded();
    await genderLabel.click({ force: true });
}

    async savePersonalDetails() {
        await this.click(selectors.PersonalDetails.Requiredsave, "Save Personal Details", "button");
    }
}