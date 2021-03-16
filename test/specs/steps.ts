import categoryPage from "../pageobjects/category.page";

class Steps {
    addAdToMemo() {
        it('Add ad to memo as a favorite', () => {
            const favouritesBefore: number = categoryPage.getMemorizedAmount();
            expect(categoryPage.memorizeAds()).toBe(true);
            expect(categoryPage.isAttentionPopUpVisible()).toBe(true);
            expect(categoryPage.getMemorizedAmount()).toEqual(favouritesBefore + 1);
        });
    }
}

export default new Steps();