const { test, expect } = require('@playwright/test');
const { IssuesPage } = require('../pages/IssuesPage');
test.describe('Redmine Issues Feature Tests', () => {
    test('Case-1: Navigate to Issues and view task details', async ({ page }) => {
        const issuesPage = new IssuesPage(page);
        await issuesPage.navigate();
        await issuesPage.clickIssuesTab();
        await expect(page).toHaveURL('/projects/redmine/issues');
        await expect(issuesPage.issueSubject).toBeVisible();
        await issuesPage.clickFirstIssue();
        await expect(issuesPage.issueDetailsHeader).toBeVisible();
    });
});