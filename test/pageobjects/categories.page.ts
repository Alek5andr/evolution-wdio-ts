import errorThrower from "../services/error.thrower";
import logger from "../services/logger";
import Page from "./page";

class Categories extends Page {
    async navigateToCategory(category: string): Promise<void> {
        logger.info('Navigating to category: ' + category);

        switch (category) {
            case 'Baby food':
                await super.open('/for-children/a-feed/baby-food/');
                break;
            case 'Cats, kittens':
                await super.open('/animals/cats/');
                break;
            default:
                errorThrower.throwIllegalArgumentException(category);
        }

        logger.info(' Current URL is open: ' + await browser.getUrl());
    }
}

export default new Categories();
