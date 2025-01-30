import { Module } from '@nestjs/common';
import { InvestmentService } from './investment.service';
import { InvestmentController } from './investment.controller';
import { PrismaModule } from '@/src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InvestmentController],
  providers: [InvestmentService],
})
export class InvestmentModule {}
