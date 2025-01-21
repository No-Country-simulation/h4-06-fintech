import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class LoginMailsService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmationEmail(email: string) {
    const url = 'http://localhost:3000/api#/Users/UsersController_create';
    await this.mailerService.sendMail({
      from: 'zapatacamilo86@gmail.com',
      to: email,
      subject: 'User Confirmation',
      template: './welcome',
      context: {
        url,
      },
    });
  }
}
