import { Module } from "@nestjs/common";
import { LoginMailsService } from "./login-mails.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { join } from "path";

@Module({
	imports: [
		MailerModule.forRootAsync({
			useFactory: async (config: ConfigService) => ({
				transport: {
					host: config.get("MAIL_HOST"),
					secure: false,
					auth: {
						user: config.get("MAIL_USER"),
						pass: config.get("MAIL_PASSWORD"),
					},
				},
				defaults: {
					from: `"No Reply" <${config.get("MAIL_FROM")}>`,
				},
				template: {
					dir: join(__dirname, "templades"),
					adapter: new HandlebarsAdapter(),
					options: {
						strict: true,
					},
				},
			}),
			inject: [ConfigService],
		}),
	],
	providers: [LoginMailsService],
	exports: [LoginMailsService],
})
export class LoginMailsModule {}
