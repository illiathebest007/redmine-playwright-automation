exports.ActivationPage = class ActivationPage {
    constructor(page) {
        this.page = page;
        this.body = page.locator('body');
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async getBodyText() {
        return this.body.textContent();
    }
};