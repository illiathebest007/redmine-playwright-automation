import { type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchHeader: Locator;
  readonly resultsList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#q');
    this.searchHeader = page.getByRole('heading', { name: 'Search', exact: true });
    this.resultsList = page.locator('#search-results dt');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  async searchFor(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
  }
}
