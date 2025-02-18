import logger from "../services/logger";
import table from "./elements/table";
import Page from "./page";

class CategoryPage extends Page {
    private readonly adTitleAnchorElementSelector: string = 'a[class="am"]';

    get adCheckboxes(): Promise<Array<WebdriverIO.Element>> {
        return table.tableElement.$$('input[type="checkbox"]');
    }

    async selectRandomAds(amount: number = 0): Promise<void> {
        const elements: Array<WebdriverIO.Element> = await this.adCheckboxes;
        const totalElements: number = elements.length;

        logger.info('Selecting random ad');
        for (let i: number = 1; i <= amount; i++) {
            await super.clickRandomElementFrom0ToExcludingN(elements, totalElements);
        }
    }

    async getSelectedAds(): Promise<number> {
        const elements: Array<WebdriverIO.Element> = await this.adCheckboxes;
        let counter: number = 0;

        for(const element of elements) if (await element.isSelected()) counter++;
        return counter;
    }

    async openRandomAd(): Promise<void> {
        const elements: ChainablePromiseArray = await (await table.tableElement).$$(this.adTitleAnchorElementSelector);
        const totalElements: number = elements.length;
        await super.clickRandomElementFrom0ToExcludingN(elements, totalElements);
    }

    async openFirstAd(): Promise<void> {
        logger.info('Opening the most top first ad');
        await super.clickElement(await $(this.adTitleAnchorElementSelector));
    }

}

export default new CategoryPage();
