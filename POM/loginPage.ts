import { Page, BrowserContext, expect } from "@playwright/test";
import { URLConstants } from "../constants/urlConstants";
import {selectors} from '../selectors/LoginPageSelectors';
import { PlaywrightWrapper } from "../helpers/PlaywrightWrapper";

export class LoginPage extends PlaywrightWrapper {

  constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }
   
    
public async login(username: string, password: string) {
    await this.loadApplication(URLConstants.URL);

    await this.interactWithElement(
        selectors.Login.username.type as "PLACEHOLDER", selectors.Login.username.value,"fill",username);

    await this.interactWithElement(
        selectors.Login.password.type as "PLACEHOLDER",selectors.Login.password.value,"fill",password);

    await this.click(selectors.Login.loginButton, "Login Button", "button");
    await this.validateElementVisibility(selectors.orangehrmImg, "OrangeHRM Image");
}

public async inValidLogin(username: string, password: string) {

    await this.loadApplication(URLConstants.URL);
    
    await this.interactWithElement(
        selectors.Login.username.type as "PLACEHOLDER", selectors.Login.username.value,"fill",username);

    await this.interactWithElement(
        selectors.Login.password.type as "PLACEHOLDER",selectors.Login.password.value,"fill",password);
        await this.click(selectors.Login.loginButton, "Login Button", "button");
        await this.validateElementVisibility(selectors.Login.errorMessage, "Error Message");
}

}