import categoryPage from "../pageobjects/category.page";

export async function adShouldBeBookmarked(): Promise<void> {
    const favouritesBefore: number = await categoryPage.getMemorizedAmount();
    await categoryPage.bookmarkAd();
    await expect(await categoryPage.isAttentionPopUpVisible()).toBe(true);
    await expect(await categoryPage.getMemorizedAmount()).toEqual(favouritesBefore + 1);
}
