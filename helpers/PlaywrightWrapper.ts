import { Page, test, expect, BrowserContext, Locator } from "@playwright/test";
import * as path from 'path';
import * as fs from 'fs';

export abstract class PlaywrightWrapper {

    page: Page;
    readonly context: BrowserContext;
    private static newPage: Page | null = null;

    protected getNewPage(): Page {
        if (!PlaywrightWrapper.newPage) {
            throw new Error('New tab is not initialized. Did you forget to call childTab()?');
        }
        return PlaywrightWrapper.newPage;
    }
    constructor(page: Page, context: BrowserContext,) {
        this.page = page;
        this.context = context;
    }
        /**
   * Types into the specified textbox after clearing any existing text.
   * 
   * @param {string} locator - The locator for the textbox element.
   * @param {string} name - The name of the textbox element.
   * @param {string} data - The data to be typed into the textbox.
   */
    async type(locator: string, name: string, data: string) {
        await test.step(`Textbox ${name} filled with data: ${data}`, async () => {


            await this.page.locator(locator).clear();
            await this.page.locator(locator).fill(data);

        }
        )
    }

      /**
     * Clicks on the specified textbox element.
     * @param {string} locator - The locator for the element.
     * @param {string} name - The name of the element.
     * @param {string} type - The type of the element
     */
    async click(locator: string, name: string, type: string) {
        await test.step(`The ${name} ${type} clicked`, async () => {
            await this.page.waitForSelector(locator, { state: 'visible' });
            await this.page.locator(locator).click();
        });
    }

        async validateElementVisibility(locator: any, elementName: string) {
        try {
            const element = this.page.locator(locator);
            await this.page.waitForSelector(locator, { state: 'attached', timeout: 30000, strict: true });
            if (await element.isVisible()) {
                console.log(`${elementName} is visible as expected.`);
            } else {
                console.error(`${elementName} is not visible.`);
            }
        } catch (error) {
            console.error(`Error validating visibility of ${elementName}: ${error}`);
        }
    }
     public async loadApplication(url: string) {
        try {
            await this.page.goto(url); // Increased timeout for 60 seconds
            console.log(`Successfully loaded the URL: ${url}`);
        } catch (error) {
            console.log(`Error loading the page at ${url}:`);
            throw new Error(`Failed to load the page at ${url}`);
        }
    }

      async radioButton(locator: string, name: string) {
        await test.step(`Checkbox ${name} is selected`, async () => {

            if (!await this.page.isChecked(locator)) {
                await this.page.focus(locator)
                await this.page.check(locator, { force: true });
            } else {
                console.log("The button is already checked")
            }
        })
    }
    


    async interactWithElement(
        attribute: "LABEL" | "PLACEHOLDER" | "TEXT" | "TITLE" | "ALTTEXT" | "ID" | "CLASS",
        locator: string,
        action: "click" | "fill",
        data: string = ""
    ): Promise<void> {
        if (!locator) {
            throw new Error("Locator must be provided.");
        }

        if (action === "fill" && !data) {
            throw new Error("Data must be provided for the 'fill' action.");
        }

        switch (attribute) {
            case "LABEL":
                if (action === "click") {
                    await this.page.getByLabel(locator).click();
                } else {
                    await this.page.getByLabel(locator).fill(data);
                }
                break;

            case "PLACEHOLDER":
                if (action === "click") {
                    await this.page.getByPlaceholder(locator).click();
                } else {
                    await this.page.getByPlaceholder(locator).fill(data);
                }
                break;

            case "TEXT":
                if (action === "click") {
                    await this.page.getByText(locator).click();
                } else {
                    throw new Error("The 'fill' action is not supported for 'TEXT' attributes.");
                }
                break;

            case "TITLE":
                if (action === "click") {
                    await this.page.getByTitle(locator).click();
                } else {
                    throw new Error("The 'fill' action is not supported for 'TITLE' attributes.");
                }
                break;

            case "ALTTEXT":
                if (action === "click") {
                    await this.page.getByAltText(locator).click();
                } else {
                    throw new Error("The 'fill' action is not supported for 'ALTTEXT' attributes.");
                }
                break;

            case "ID":
                const idSelector = `#${locator}`;
                if (action === "click") {
                    await this.page.locator(idSelector).click();
                } else {
                    await this.page.locator(idSelector).fill(data);
                }
                break;

            case "CLASS":
                const classSelector = `.${locator}`;
                if (action === "click") {
                    await this.page.locator(classSelector).click();
                } else {
                    await this.page.locator(classSelector).fill(data);
                }
                break;

            default:
                throw new Error(`Unsupported attribute: ${attribute}`);
        }
    }
}