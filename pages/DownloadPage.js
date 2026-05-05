exports.DownloadPage = class DownloadPage {
    constructor(page) {
        this.page = page;
        this.downloadTab = page.locator('a.download');
        this.downloadHeader = page.getByRole('heading', { name: 'Download' });
    }
    async navigate() {
        await this.page.goto('https://www.redmine.org/');
    }
    async clickDownloadTab() {
        await this.downloadTab.click();
    }
}