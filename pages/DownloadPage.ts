import { type Locator, type Page } from '@playwright/test';

export class DownloadPage {
  readonly page: Page;
  readonly downloadTab: Locator;
  readonly downloadHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadTab = page.locator('a.download');
    this.downloadHeader = page.getByRole('heading', { name: 'Download' });
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async clickDownloadTab(): Promise<void> {
    await this.downloadTab.click();
  }
}
