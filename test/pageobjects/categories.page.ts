
import errorThrower from "../services/error.thrower";
import logger from "../services/logger";
import Page from "./page";

class Categories extends Page {
    private categoryElementSelector: string = 'div[class="main_category"]';

    get categoryElement() { return $(this.categoryElementSelector); }

    clickCategoryByLabel(label: string): boolean {
        logger.info('Clicking on category with label: ' + label);
        return super.clickAnchorContainingText(label);
    }

    navigateToCategory(category: string): void {
        logger.info('Navigating to category: ' + category);

        switch (category) {
            case 'Baby food':
                super.open('/for-children/a-feed/baby-food/');
                break;
            case 'Cats, kittens':
                super.open('/animals/cats/');
                break;
            default:
                errorThrower.throwIllegalArgumentException(category);
        }

        logger.info(' Current URL is open: ' + browser.getUrl());
    }
}

export default new Categories();