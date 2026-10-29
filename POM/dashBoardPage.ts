import { Page, BrowserContext, expect } from "@playwright/test";
import {selectors} from '../selectors/dashBoardSelectors';
import { PlaywrightWrapper } from "../helpers/PlaywrightWrapper";

export class DashBoardPage extends PlaywrightWrapper {

constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }
async clickPIM() {
    await this.click(selectors.dashboard.pim,"PIM Menu","button");
}


}