import categoryPage from "../../../pageobjects/category.page";
import categories from "../../../pageobjects/categories.page";
import steps from "../../steps";

describe('Add single ad to memo as a favorite -', () => {
    before(() => {
        categories.navigateToCategory('Baby food');
    });

    it('Open random ad', () => {
        expect(categoryPage.openRandomAd()).toBe(true);
    });

    steps.addAdToMemo();
});