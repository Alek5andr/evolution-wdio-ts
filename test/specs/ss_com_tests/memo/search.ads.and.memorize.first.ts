import categoriesPage from "../../../pageobjects/categories.page";
import categoryPage from "../../../pageobjects/category.page";
import searchPage from "../../../pageobjects/search.page";
import steps from "../../steps";

describe('Search ads and add first ad as a favourite', () => {
    const searchPageLabel: string = 'Search';
    const searchValue: string = 'sokolad';

    it(`Navigate to "${searchPageLabel}" page`, () => {
        expect(categoriesPage.clickAnchorContainingText(searchPageLabel)).toBe(true);
    });

    it(`Search for ads containing "${searchValue}" word`, () => {
        searchPage.searchByWordOrPhrase(searchValue);
    });

    it('Open random ad', () => {
        expect(categoryPage.openFirstAd()).toBe(true);
    });

    steps.addAdToMemo();
});