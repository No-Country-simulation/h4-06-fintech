import { SignUpSchema } from '@/actions/signup/signup-action';
import { Locator, Page } from '@playwright/test';

export class SignUpPOM {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.getByTestId('email');
    this.passwordInput = this.page.getByTestId('password');
    this.confirmPasswordInput = this.page.getByTestId('confirm-password');
    this.button = this.page.getByTestId('submit-button');
  }

  async signup({ email, password, confirmPassword }: SignUpSchema) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
    await this.button.click();
  }

  getEmailErrorMessage() {
    return this.page.locator('[id=email-error]');
  }

  getPasswordErrorMessage() {
    return this.page.locator('[id=password-error]');
  }

  getConfirmPasswordErrorMessage() {
    return this.page.locator('[id=confirmPassword-error]');
  }
}
