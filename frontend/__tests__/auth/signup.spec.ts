import { expect, test } from '@playwright/test';
import { SignUpPOM } from '../pom/signup-page.pom';

test.describe('Signup flow', () => {
  let signUpPage: SignUpPOM;

  // Time to wait before the assertion
  const timeout = 1000;

  // Before each test, go to /signup and initiliaze POM
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
    signUpPage = new SignUpPOM(page);
  });

  test('Should succesfully create a new user & redirect to login page', async ({
    page,
  }) => {
    const validInputs = {
      email: 'test@gmail.com',
      password: 'Password1',
      confirmPassword: 'Password1',
    };

    await signUpPage.signup(validInputs);

    await expect(page).toHaveURL('/login', { timeout });
  });

  test('Should throw error invalid input', async () => {
    const emptyInput = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    await signUpPage.signup(emptyInput);

    await expect(signUpPage.getEmailErrorMessage()).toBeVisible({
      timeout,
    });
    await expect(signUpPage.getPasswordErrorMessage()).toBeVisible({
      timeout,
    });
    await expect(signUpPage.getConfirmPasswordErrorMessage()).toBeVisible({
      timeout,
    });
  });

  test('Should throw error when confirm password doesnt match', async () => {
    const invalidInput = {
      email: 'test@gmail.com',
      password: 'Password1',
      confirmPassword: 'Password2',
    };

    await signUpPage.signup(invalidInput);

    await expect(signUpPage.getConfirmPasswordErrorMessage()).toBeVisible({
      timeout,
    });
  });
});
