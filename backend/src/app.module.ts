import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WalletModule } from './wallet/infrastructure/wallet.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoginMailsModule } from './login-mails/login-mails.module';
import { ConfigModule } from '@nestjs/config';
import { SupportModule } from './support/support.module';
import { NewsModule } from './news/news.module';
import { CommentModule } from './comment/comment.module';
import { FinanceModule } from './finance/financeModule.module';
import { TargetModule } from './target/target.module';

@Module({
  imports: [
    PrismaModule,
    WalletModule,
    AuthModule,
    UsersModule,
    LoginMailsModule,
    SupportModule,
    FinanceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NewsModule,
    CommentModule,
    TargetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded');
  }
}
