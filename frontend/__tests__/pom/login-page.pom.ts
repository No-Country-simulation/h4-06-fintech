import { LoginSchema } from '@/actions/login/login-action';
import { Locator, Page } from '@playwright/test';

export class LoginPOM {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.getByTestId('email');
    this.passwordInput = this.page.getByTestId('password');
    this.button = this.page.getByTestId('submit-button');
  }

  async login({ email, password }: LoginSchema) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.button.click();
  }

  getEmailErrorMessage() {
    return this.page.locator('[id=email-error]');
  }

  getPasswordErrorMessage() {
    return this.page.locator('[id=password-error]');
  }
}
