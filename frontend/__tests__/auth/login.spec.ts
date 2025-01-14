import { expect, test } from '@playwright/test';
import { LoginPOM } from '../pom/login-page.pom';

test.describe('Login flow', () => {
  let loginPage: LoginPOM;

  // Time to wait before the assertion
  const timeout = 1000;

  // Before each test, go to /signup and initiliaze POM
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    loginPage = new LoginPOM(page);
  });

  test('Should succesfully login user and redirect to dashboard', async ({
    page,
  }) => {
    const validInputs = {
      email: 'test@gmail.com',
      password: 'Password1',
    };

    await loginPage.login(validInputs);

    await expect(page).toHaveURL('/', { timeout });
  });

  test('Should throw error invalid input', async () => {
    const emptyInput = {
      email: '',
      password: '',
    };

    await loginPage.login(emptyInput);

    await expect(loginPage.getEmailErrorMessage()).toBeVisible({
      timeout,
    });
    await expect(loginPage.getPasswordErrorMessage()).toBeVisible({
      timeout,
    });
  });
});
