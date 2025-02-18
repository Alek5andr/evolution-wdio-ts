/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import helper from "../services/helper";
import logger from "../services/logger";

export default class Page {
    // DOM shared tags
    private readonly anchor: string = 'a';

    // Page selectors
    private readonly memorizedAmountSelector: string = '#mnu_fav_id';

    async clickElement(element: WebdriverIO.Element): Promise<boolean> {
        const isExisting = await element.isExisting();
        const elementsText = await element.getText();

        logger.info(' Clicking on element with selector: ' + element.selector);

        if (isExisting) {
            await element.scrollIntoView();
            await element.click();
            logger.debug('  Element (with text) clicked: ' + elementsText);
        }

        return isExisting;
    }

    async clickAnchorContainingText(text: string): Promise<void> {
        const element: ChainablePromiseElement = $(`${this.anchor}*=${text}`);
        await this.clickElement(element);
    }

    async clickRandomElementFrom0ToExcludingN(elements: Array<WebdriverIO.Element>, n: number): Promise<void> {
        logger.info('Clicking on random element with range 0 -', n--);
        await this.clickElement(elements[helper.generateRandomIntegerFrom0ToExcludingN(n)]);
    }

    async open (path: string) {
        await browser.url(`${browser.options.baseUrl}${path}`)
    }

    async bookmarkAd(): Promise<void> {
        logger.info('Adding ad to favourites');
        await this.clickElement(await $('#add-to-favorites-lnk'));
    }

    async bookmarkAds(): Promise<void> {
        logger.info('Adding ads to favourites');
        await this.clickElement(await $('#a_fav_sel'));
    }

    async getMemorizedAmount(): Promise<number> {
        const element: ChainablePromiseElement = $(this.memorizedAmountSelector);
        const itemsInFavourites: string = await element.getText();
        if (itemsInFavourites == "") return 0;

        const amountOfItemsAsString: any = RegExp(/\d+/).exec(itemsInFavourites);
        const amountOfItemsAsInteger: number = parseInt(amountOfItemsAsString[0], 10);
        logger.info('Items bookmarked: ' + amountOfItemsAsInteger);
        return amountOfItemsAsString != null ? amountOfItemsAsInteger: 0;
    }

    async isAttentionPopUpVisible(): Promise<boolean> {
        return await (await $('#alert_dv')).waitForDisplayed({timeout: 1000, timeoutMsg: "Attention pop-up did not appear"});
    }
}
