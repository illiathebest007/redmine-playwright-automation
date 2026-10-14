import { type Locator, type Page } from '@playwright/test';

export interface RegistrationData {
  login: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  language?: string;
}

export class RegisterPage {
  readonly page: Page;
  readonly loginInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmationInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly languageSelect: Locator;
  readonly submitButton: Locator;
  readonly errorItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginInput = page.locator('input[name="user[login]"]');
    this.emailInput = page.locator('input[name="user[mail]"]');
    this.passwordInput = page.locator('input[name="user[password]"]');
    this.passwordConfirmationInput = page.locator('input[name="user[password_confirmation]"]');
    this.firstNameInput = page.locator('input[name="user[firstname]"]');
    this.lastNameInput = page.locator('input[name="user[lastname]"]');
    this.languageSelect = page.locator('select[name="user[language]"]');
    this.submitButton = page.locator('input[name="commit"]');
    this.errorItems = page.locator('#errorExplanation li');
  }

  async navigate(): Promise<void> {
    await this.page.goto('/account/register');
  }

  async fillRegistrationForm({ login, email, password, firstName, lastName, language = 'en' }: RegistrationData): Promise<void> {
    await this.loginInput.fill(login);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.passwordConfirmationInput.fill(password);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.languageSelect.selectOption(language);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }
}
