import {test} from '../customFixtures/customFixtures';
import { readDataFromCSV } from '../helpers/csvUtil';


test('TC001 @smoke - To test the login functionality', async ({ loginPage }) => {
  test.info().annotations.push(
       { type: 'TestCase', description: 'Validating login with valid credentials' },
    );
    const loginData = await readDataFromCSV('./Utils/loginData.csv');
    const tc001 = loginData.find(data => data.testCase === 'TC001');
    await loginPage.login(tc001.username, tc001.password); 
});

test('TC002 @regression - To test the login with invalid password functionality', async ({ loginPage }) => {
  test.info().annotations.push(
       { type: 'TestCase', description: 'Login with invalid password' },
    );
    const loginData = await readDataFromCSV('./Utils/loginData.csv');
    const tc002 = loginData.find(data => data.testCase === 'TC002');
    await loginPage.inValidLogin(tc002.username, tc002.password); 
});

test('TC003 @regression - To test the login with invalid username functionality', async ({ loginPage }) => {
  test.info().annotations.push(
       { type: 'TestCase', description: 'Login with invalid username' },
    );
    const loginData = await readDataFromCSV('./Utils/loginData.csv');
    const tc003 = loginData.find(data => data.testCase === 'TC003');
    await loginPage.inValidLogin(tc003.username, tc003.password); 
});
