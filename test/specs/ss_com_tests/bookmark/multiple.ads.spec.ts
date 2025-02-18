import categoryPage from "../../../pageobjects/category.page";
import categories from "../../../pageobjects/categories.page";

describe('Multiple ads', () => {
    before(async () => {
        await categories.navigateToCategory('Cats, kittens');
    });

    it('should be bookmarked', async () => {
        const favouritesBefore: number = await categoryPage.getMemorizedAmount();
        await categoryPage.selectRandomAds(5);
        await categoryPage.bookmarkAds();
        await expect(await categoryPage.isAttentionPopUpVisible()).toBe(true);
        await expect(await categoryPage.getMemorizedAmount()).toEqual(favouritesBefore + await categoryPage.getSelectedAds());
    });
});
