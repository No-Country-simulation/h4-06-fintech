import { Module } from '@nestjs/common';
import { InvestmentPortfolioService } from './investment-portfolio.service';
import { InvestmentPortfolioController } from './investment-portfolio.controller';
import { PrismaModule } from '@/src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InvestmentPortfolioController],
  providers: [InvestmentPortfolioService],
})
export class InvestmentPortfolioModule {}
