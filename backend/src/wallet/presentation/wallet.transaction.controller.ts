import { Body, Controller, Post } from '@nestjs/common';
import { TransactionDto } from '../application/dtos/transaction.dto';
import { MakeTransactionUseCase } from '../application/usecases/make.transaction.use-case';

@Controller('wallet/transactions')
export class WalletTransactionController {
  constructor(
    private readonly makeTransactionUseCase: MakeTransactionUseCase,
  ) {}

  @Post()
  async makeTransaction(@Body() dto: TransactionDto) {
    return await this.makeTransactionUseCase.execute(dto);
  }
}
