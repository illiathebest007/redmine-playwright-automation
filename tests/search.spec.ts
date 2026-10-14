import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.describe('Redmine Search Feature Tests', () => {
  test('Case-2: Should successfully search for FAQ', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.navigate();
    await searchPage.searchFor('FAQ');

    await expect(page).toHaveURL(/\/search\?.*q=FAQ/);
    await expect(searchPage.searchHeader).toBeVisible();
    await expect(searchPage.resultsList.first()).toBeVisible();
  });
});
