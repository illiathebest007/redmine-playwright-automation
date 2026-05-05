const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');

test.describe('Registration Validation Tests', () => {

    async function getErrorsList(page) {
        const errors = [];
        const errorItems = await page.locator('#errorExplanation li').all();
        for (const item of errorItems) {
            const text = await item.textContent();
            errors.push(text.trim());
        }
        return errors;
    }

    test('Case-4: Validate empty login field', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.navigate();
        await registerPage.fillRegistrationForm({
            login: '',
            email: 'test@example.com',
            password: 'Password123!',
            firstName: 'Test',
            lastName: 'User',
            language: 'en'
        });
        
        await registerPage.submit();
        await page.waitForTimeout(2000);
        const errors = await getErrorsList(page);
        console.log('Validation errors:', errors);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(e => e.includes('Login'))).toBeTruthy();
    });

    test('Case-5: Validate empty email field', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.navigate();
        await registerPage.fillRegistrationForm({
            login: 'testuser123',
            email: '',
            password: 'Password123!',
            firstName: 'Test',
            lastName: 'User',
            language: 'en'
        });
        
        await registerPage.submit();
        await page.waitForTimeout(2000);
        const errors = await getErrorsList(page);
        console.log('Validation errors:', errors);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(e => e.includes('Email'))).toBeTruthy();
    });
});