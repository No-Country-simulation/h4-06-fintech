import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class LoginMailsService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmationEmail(user: string, email: string) {
    const url = 'https://www.youtube.com/watch?v=YjzWhuCxwek';
    await this.mailerService.sendMail({
      to: email,
      subject: 'User Confirmation',
      template: './welcome',
      context: {
        name: user,
        url,
      },
    });
  }
}
