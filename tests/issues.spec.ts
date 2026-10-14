import { test, expect } from '@playwright/test';
import { IssuesPage } from '../pages/IssuesPage';

test.describe('Redmine Issues Feature Tests', () => {
  test('Case-1: Navigate to Issues and view task details', async ({ page }) => {
    const issuesPage = new IssuesPage(page);
    await issuesPage.navigate();
    await issuesPage.clickIssuesTab();
    await expect(page).toHaveURL('/projects/redmine/issues');
    await expect(issuesPage.firstIssueLink).toBeVisible();

    const subject = await issuesPage.openFirstIssue();
    await expect(page).toHaveURL(/\/issues\/\d+$/);
    await expect(issuesPage.issueSubject).toHaveText(subject);
  });
});
