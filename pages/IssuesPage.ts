import { type Locator, type Page } from '@playwright/test';

export class IssuesPage {
  readonly page: Page;
  readonly issuesTab: Locator;
  readonly firstIssueLink: Locator;
  readonly issueSubject: Locator;

  constructor(page: Page) {
    this.page = page;
    this.issuesTab = page.locator('a.issues');
    this.firstIssueLink = page.locator('td.subject a').first();
    this.issueSubject = page.locator('.issue .subject h3');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async clickIssuesTab(): Promise<void> {
    await this.issuesTab.click();
  }

  async openFirstIssue(): Promise<string> {
    const subject = (await this.firstIssueLink.textContent())?.trim() ?? '';
    await this.firstIssueLink.click();
    return subject;
  }
}
