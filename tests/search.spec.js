const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
test.describe('Redmine Search Feature Tests', () => {
    test('Case-2: Should successfully search for FAQ', async ({ page }) => {
        const searchPage = new SearchPage(page);
        await searchPage.navigate();
        const query = 'FAQ';
        await searchPage.searchFor(query);
        await expect(page).toHaveURL(/\/search/);
        await expect(searchPage.searchHeader).toContainText('Search');
        //await page.locator('#search-results dt').first().waitFor({ state: 'visible', timeout: 5000 });
        await searchPage.resultsList.first().waitFor({ state: 'visible', timeout: 5000 });
        const resultsCount = await searchPage.resultsList.count();
        console.log(resultsCount);
    });
});