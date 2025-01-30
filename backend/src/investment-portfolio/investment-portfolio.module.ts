import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { InvestmentPortfolioController } from './investment-portfolio.controller';
import { InvestmentPortfolioService } from './investment-portfolio.service';

@Module({
  imports: [PrismaModule],
  controllers: [InvestmentPortfolioController],
  providers: [InvestmentPortfolioService],
})
export class InvestmentPortfolioModule {}
