import { test, expect } from '@playwright/test';
import { DownloadPage } from '../pages/DownloadPage';

test.describe('Redmine Download Feature Tests', () => {
  test('Case-3: Navigate to Download page', async ({ page }) => {
    const downloadPage = new DownloadPage(page);
    await downloadPage.navigate();
    await downloadPage.clickDownloadTab();
    await expect(page).toHaveURL('/projects/redmine/wiki/Download');
    await expect(downloadPage.downloadHeader).toBeVisible();
  });
});
