exports.IssuesPage = class IssuesPage {
    constructor(page) {
        this.page = page;
        this.issuesTab = page.locator('a.issues');
        this.issueSubject = page.locator('.subject a').first();
        this.issueDetailsHeader = page.locator('h2');
    }

    async navigate() {
        await this.page.goto('https://www.redmine.org/');
    }

    async clickIssuesTab() {
        await this.issuesTab.click();
    }

    async clickFirstIssue() {
        await this.issueSubject.click();
    }
}