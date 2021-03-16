
import helper from "../services/helper";
import logger from "../services/logger";
import table from "./elements/table";
import Page from "./page";

class CategoryPage extends Page {
    private adCheckboxElementSelector: string = 'input[type="checkbox"]';
    private adTitleAnchorElementSelector: string = 'a[class="am"]';

    get adCheckboxElements() {
        return table.tableElement.$$(this.adCheckboxElementSelector);
    }

    selectRandomAds(amount: number = 0): boolean {
        const elements: Array<WebdriverIO.Element> = this.adCheckboxElements;
        const totalElements: number = elements.length;

        logger.info('Selecting random ad');
        for (let i = 1; i < amount; i++) {
            super.clickRandomElementFrom0ToExcludingN(elements, totalElements);
        }

        return super.clickRandomElementFrom0ToExcludingN(elements, totalElements);
    }

    getSelectedAds(): number {
        const elements: Array<WebdriverIO.Element> = this.adCheckboxElements;
        let counter: number = 0;

        elements.forEach(element => {
            if (element.isSelected()) counter++;
        });
        return counter;
    }

    openRandomAd(): boolean {
        const elements = table.tableElement.$$(this.adTitleAnchorElementSelector);
        const totalElements = elements.length;

        return super.clickRandomElementFrom0ToExcludingN(elements, totalElements);
    }

    openFirstAd(): boolean {
        return super.clickElement($(this.adTitleAnchorElementSelector));
    }

}

export default new CategoryPage();