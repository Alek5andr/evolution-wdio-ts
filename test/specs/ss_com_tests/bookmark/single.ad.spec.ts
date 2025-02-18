import categoryPage from '../../../pageobjects/category.page'
import categories from '../../../pageobjects/categories.page'
import { adShouldBeBookmarked } from '../../steps'
import categoriesPage from '../../../pageobjects/categories.page.ts'
import searchPage from '../../../pageobjects/search.page.ts'

describe('single ad', () => {
    it('should be bookmarked', async () => {
        await categories.navigateToCategory('Baby food')
        await categoryPage.openRandomAd()
        await adShouldBeBookmarked()
    })

    it('should open randomly & be bookmarked', async () => {
        await browser.url(browser.options.baseUrl || '')
        await categoriesPage.clickAnchorContainingText('Search')
        await searchPage.searchByWordOrPhrase('sokolad')
        await categoryPage.openFirstAd()
        await adShouldBeBookmarked()
    })
})
