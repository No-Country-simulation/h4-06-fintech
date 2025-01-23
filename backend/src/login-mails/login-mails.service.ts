import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginMailsService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmationEmail(email: string, link: string) {
    await this.mailerService.sendMail({
      from: 'zapatacamilo86@gmail.com',
      to: email,
      subject: 'User Confirmation',
      template: './welcome',
      context: {
        link,
      },
    });
  }
}
