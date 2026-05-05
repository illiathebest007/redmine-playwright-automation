exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.loginInput = page.locator('input[name="user[login]"]');
        this.emailInput = page.locator('input[name="user[mail]"]');
        this.passwordInput = page.locator('input[name="user[password]"]');
        this.passwordConfirmationInput = page.locator('input[name="user[password_confirmation]"]');
        this.firstNameInput = page.locator('input[name="user[firstname]"]');
        this.lastNameInput = page.locator('input[name="user[lastname]"]');
        this.languageSelect = page.locator('select[name="user[language]"]');
        this.submitButton = page.locator('input[name="commit"]');
        this.body = page.locator('body');
    }

    async navigate() {
        await this.page.goto('/account/register');
    }

    async fillRegistrationForm({ login, email, password, firstName, lastName, language = 'en' }) {
        await this.loginInput.fill(login);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.passwordConfirmationInput.fill(password);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.languageSelect.selectOption(language);
    }

    async submit() {
        await this.submitButton.click();
    }

    async getBodyText() {
        return this.body.textContent();
    }
};