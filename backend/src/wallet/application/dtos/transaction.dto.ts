import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import {
  CurrencyType,
  TransactionType,
} from '../../../../prisma/generated/client';

export class TransactionDto {
  @ApiProperty({
    example: '12345',
    description: 'ID de la billetera asociada a la transacción',
  })
  @IsString()
  walletId: string;

  @ApiProperty({
    example: 100.5,
    description: 'Monto de la transacción',
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    enum: CurrencyType,
    example: 'USD',
    description: 'Moneda utilizada en la transacción',
  })
  @IsString()
  currency: CurrencyType;

  @ApiProperty({
    enum: TransactionType,
    example: 'DEPOSIT',
    description: 'Tipo de transacción (p. ej., DEPÓSITO o RETIRO)',
  })
  @IsString()
  type: TransactionType;

  @ApiProperty({
    example: 'Depósito inicial en la cuenta',
    description: 'Descripción opcional de la transacción',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
