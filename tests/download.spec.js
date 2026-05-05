const { test, expect } = require('@playwright/test');
const { DownloadPage } = require('../pages/DownloadPage');

test.describe('Redmine Download Feature Tests', () => {

    test('Case-3: Navigate to Download page', async ({ page }) => {
        const downloadPage = new DownloadPage(page);
        await downloadPage.navigate();
        await downloadPage.clickDownloadTab();
        await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Download');
        await expect(downloadPage.downloadHeader).toContainText('Download');
    });
});