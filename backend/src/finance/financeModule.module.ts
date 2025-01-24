import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';


@Module({
  imports: [],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}
