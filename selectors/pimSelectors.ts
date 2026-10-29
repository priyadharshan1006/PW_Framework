export const selectors = {
    PIMText : "//h6[text()='PIM']",

   addEmployee: {
        add: "//button[normalize-space()='Add']",
        firstName: {type: "PLACEHOLDER",value: "First Name"},
        middleName: {type: "PLACEHOLDER",value: "Middle Name"},
        lastName: {type: "PLACEHOLDER",value: "Last Name"},
        save: 'button[type="submit"]'
    },

  PersonalDetails
: {
  
    DriversLicenseNumber: '//label[contains(text(), "Driver")]/following::input[1]',
    LicenseExpiryDate: '//label[contains(text(),"License Expiry Date")]/following::input[1]',
    Nationality: '//label[text()="Nationality"]/ancestor::div[contains(@class,"oxd-input-group")]//div[@class="oxd-select-text-input"]',
    MaritalStatus: '//label[text()="Marital Status"]/ancestor::div[contains(@class,"oxd-input-group")]//div[@class="oxd-select-text-input"]',
    DateofBirth: '//label[contains(text(),"Date of Birth")]/following::input[1]',
    GenderMale: "//label[contains(., 'Male')]",
    GenderFemale: "//label[contains(., 'Female')]",
    EmployeeID:'//label[text()="Employee Id"]/ancestor::div[2]//input[@class="oxd-input oxd-input--active"]',
    Requiredsave: '(//button[@type="submit"])[1]'
}
}as const;