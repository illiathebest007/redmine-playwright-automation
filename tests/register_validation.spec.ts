import { test, expect } from '@playwright/test';
import { RegisterPage, type RegistrationData } from '../pages/RegisterPage';

function uniqueUser(): RegistrationData {
  const id = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return {
    login: `qa_user_${id}`,
    email: `qa_user_${id}@example.com`,
    password: 'Password123!',
    firstName: 'Test',
    lastName: 'User',
  };
}

test.describe('Registration Validation Tests', () => {
  test('Case-4: Validate empty login field', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();
    await registerPage.fillRegistrationForm({ ...uniqueUser(), login: '' });
    await registerPage.submit();

    await expect(registerPage.errorItems).toContainText(['Login cannot be blank']);
  });

  test('Case-5: Validate empty email field', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();
    await registerPage.fillRegistrationForm({ ...uniqueUser(), email: '' });
    await registerPage.submit();

    await expect(registerPage.errorItems).toContainText(['Email cannot be blank']);
  });
});
