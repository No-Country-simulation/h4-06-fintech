import { ApiProperty } from '@nestjs/swagger';
import { CurrencyType, TransactionType } from '@prisma/client';

export class TransactionDto {
  @ApiProperty({
    example: '12345',
    description: 'ID de la billetera asociada a la transacción',
  })
  walletId: string;

  @ApiProperty({
    example: 100.5,
    description: 'Monto de la transacción',
  })
  amount: number;

  @ApiProperty({
    enum: CurrencyType,
    example: 'USD',
    description: 'Moneda utilizada en la transacción',
  })
  currency: CurrencyType;

  @ApiProperty({
    enum: TransactionType,
    example: 'DEPOSIT',
    description: 'Tipo de transacción (p. ej., DEPÓSITO o RETIRO)',
  })
  type: TransactionType;

  @ApiProperty({
    example: 'Depósito inicial en la cuenta',
    description: 'Descripción opcional de la transacción',
    required: false,
  })
  description?: string;
}
