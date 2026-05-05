exports.SearchPage = class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('#q');
        this.searchButton = page.locator('input[value="Search"]');
        this.searchHeader = page.locator('h2:has-text("Search")');
        this.resultsList = page.locator('#search-results dt');
    }

    async navigate() {
        await this.page.goto('https://www.redmine.org/');
    }

    async searchFor(query) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }
}
