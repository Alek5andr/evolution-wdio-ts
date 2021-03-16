/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import errorThrower from "../services/error.thrower";
import helper from "../services/helper";
import logger from "../services/logger";

export default class Page {
    // DOM shared tags
    private anchor: string = 'a';
    private input: string = 'input';

    // Page selectors
    private favouriteButtonSelector: string = 'a[id^="a_fav"]';
    private memorizedAmountSelector: string = '#mnu_fav_id';
    private attentionPopUp: string = '#alert_dv';
   
    clickElement(element: WebdriverIO.Element): boolean {
        const isExisting = element.isExisting();
        const elementsText = element.getText();
        
        logger.info(' Clicking on element with selector: ' + element.selector);

        if (isExisting) {
            element.scrollIntoView();
            element.click();
            logger.debug('  Element (with text) clicked: ' + elementsText);
        }
        
        return isExisting;
    }

    clickElementBySelector(selector: string, parentElement: WebdriverIO.Element): boolean {
        const element = (parentElement || browser).$(selector);
        return this.clickElement(element);
    }

    clickAnchorContainingText(text: string): boolean {
        const element = $(`${this.anchor}*=${text}`);
        return this.clickElement(element);
    }
    
    clickRandomElementFrom0ToExcludingN(elements: Array<WebdriverIO.Element>, n: number) {
        logger.info('Clicking on random element with range 0 - ' + (n - 1));
        return this.clickElement(elements[helper.generateRandomIntegerFrom0ToExcludingN(n)]);
    }

    open (path: string) {
        browser.url(`${browser.config.baseUrl}${path}`)
    }

    memorizeAds(): boolean {
        logger.info('Adding ad to favourites');
        return this.clickElement($(this.favouriteButtonSelector));
    }

    getMemorizedAmount(): number {
        const element = $(this.memorizedAmountSelector);
        const itemsInFavourites: string = element.getText();
        if (itemsInFavourites == "") return 0;

        const amountOfItemsAsString: any = itemsInFavourites.match(/\d+/);
        const amountOfItemsAsInteger: number = parseInt(amountOfItemsAsString[0], 10);
        logger.info('Items in Memo: ' + amountOfItemsAsInteger);
        return amountOfItemsAsString != null ? amountOfItemsAsInteger: 0;
    }

    setValueToInputFieldByParentElementLabel(elements: Array<WebdriverIO.Element>, value: string, label: string): boolean {
        let element = null;

        if (label != null) {
            logger.info(`Setting value "${value}" to input field of element found by label "${label}"`);
            element = this.findElementByLabel(elements, label).$(this.input);
            const isExisting = element.isExisting();
            element.setValue(value);
            return isExisting;
        }

        logger.info(`Setting value "${value}" to input field`);
        element = $(this.input);
        const isExisting = element.isExisting();
        element.setValue(value);
        return isExisting;
    }

    private findElementByLabel(elements: Array<WebdriverIO.Element>, label: string): WebdriverIO.Element {
        for (let element of elements) {
            logger.debug(element.getText());
            if (element.getText().includes(label)) {
                logger.debug(` Returning found by label "${label}" element. Its selector is "${element.selector}"`);
                return element;
            }
        }
        throw new Error('Element is not found with such label: ' + label);
    }

    isAttentionPopUpVisible(): boolean {
        return $(this.attentionPopUp).waitForDisplayed({timeout: 1000, timeoutMsg: "Attention pop-up did not appear"});
    }
}
