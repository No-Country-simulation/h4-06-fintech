import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { TransactionDto } from '../application/dtos/transaction.dto';
import { MakeTransactionUseCase } from '../application/usecases/make.transaction.use-case';

@ApiTags('Wallet Transactions')
@Controller('wallet/transactions')
export class WalletTransactionController {
  constructor(
    private readonly makeTransactionUseCase: MakeTransactionUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Realizar una transacción' })
  @ApiBody({
    type: TransactionDto,
    description: 'Datos necesarios para realizar una transacción',
  })
  @ApiResponse({ status: 201, description: 'Transacción realizada con éxito' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  @ApiResponse({ status: 500, description: 'Error en el servidor' })
  async makeTransaction(@Body() dto: TransactionDto) {
    // Llama al caso de uso para manejar la lógica
    const transaction = await this.makeTransactionUseCase.execute(dto);

    // Devuelve una respuesta clara y estructurada
    return {
      message: 'Transacción realizada con éxito',
      data: transaction,
    };
  }
}
