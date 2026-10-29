import { test } from '../customFixtures/customFixtures';
import { readDataFromCSV } from '../helpers/csvUtil';
import { FakerData } from "../helpers/fakerUtils";

test("TC004 @smoke - Add employee and update personal details", async ({ loginPage, dashBoardPage, pimPage }) => {
    test.info().annotations.push({
        type: 'TestCase',
        description: 'Validating login and adding employee with personal details'
    });

    // Step 1: Login
    const loginData = await readDataFromCSV('./Utils/loginData.csv');
    const tc001 = loginData.find((data: any) => data.testCase === 'TC001');
    await loginPage.login(tc001.username, tc001.password); 

    // Step 2: Navigate to PIM
    await dashBoardPage.clickPIM();
    await pimPage.verifyPimPage();

    // Step 3: Click Add Employee
    await pimPage.toClickAddEmployeebutton();

    // Step 4: Generate employee details
    const firstName = FakerData.getFirstName();
    const middleName = FakerData.getMiddleName();
    const lastName = FakerData.getLastName();

    // Step 5: Enter employee name and save (save button is called inside enterEmployeeName)
    await pimPage.enterEmployeeName(firstName, middleName, lastName);

    // Step 6: Generate personal details
    const licenseNumber = FakerData.getCertificationNumber();
    const expiryDate = FakerData.getFutureDate();
    const dob = FakerData.getPastDate();
    const gender: "Male" | "Female" = Math.random() < 0.5 ? "Male" : "Female";

    // Step 7: Update personal details using your combined helper method
    await pimPage.enterPersonalInfo(
        licenseNumber,
        expiryDate,
        "Indian",
        "Single",
        dob,
        gender
    );

    // Step 8: Save personal details
    await pimPage.savePersonalDetails();

    console.log("Employee created successfully");
    console.log("Employee Name:", firstName, middleName, lastName);
    console.log("License Number:", licenseNumber);
    console.log("License Expiry Date:", expiryDate);
    console.log("Date of Birth:", dob);
    console.log("Gender selected:", gender);
});