import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginMailsService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmationEmail(email: string, link: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'User Confirmation',
      template: './welcome',
      context: {
        link,
      },
    });
  }
}
