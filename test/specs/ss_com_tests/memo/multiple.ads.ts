import categoryPage from "../../../pageobjects/category.page";
import categories from "../../../pageobjects/categories.page";

describe('Add multiple ads to memo as favorites -', () => {
    let favouritesBefore: number = 0;

    before(() => {
        categories.navigateToCategory('Cats, kittens');
    });

    it('Select multiple ads', () => {
        favouritesBefore = categoryPage.getMemorizedAmount();
        expect(categoryPage.selectRandomAds(5)).toBe(true);
    });

    it('Add ads to memo as favorites', () => {
        expect(categoryPage.memorizeAds()).toBe(true);
        expect(categoryPage.isAttentionPopUpVisible()).toBe(true);
        expect(categoryPage.getMemorizedAmount()).toEqual(favouritesBefore + categoryPage.getSelectedAds());
    });
});