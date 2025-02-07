import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  CurrencyType,
  TransactionType,
} from '../../../../prisma/generated/client';

export class TransactionDto {
  @ApiProperty({
    example: '12345',
    description: 'ID de la billetera asociada a la transacción',
  })
  @IsNotEmpty({ message: 'El campo walletId es obligatorio' })
  @IsString({ message: 'El campo walletId debe ser una cadena' })
  walletId: string;

  @ApiProperty({
    example: 100.5,
    description: 'Monto de la transacción',
  })
  @IsNotEmpty({ message: 'El campo amount es obligatorio' })
  @IsNumber({}, { message: 'El campo amount debe ser un número' })
  amount: number;

  @ApiProperty({
    enum: CurrencyType,
    example: 'USD',
    description: 'Moneda utilizada en la transacción',
  })
  @IsNotEmpty({ message: 'El campo currency es obligatorio' })
  @IsEnum(CurrencyType, {
    message: 'El campo currency debe ser una moneda válida (PESOS o USD)',
  })
  currency: CurrencyType;

  @ApiProperty({
    enum: TransactionType,
    example: 'DEPOSIT',
    description: 'Tipo de transacción (p. ej., DEPÓSITO o RETIRO)',
  })
  @IsNotEmpty({ message: 'El campo type es obligatorio' })
  @IsEnum(TransactionType, {
    message: 'El campo type debe ser DEPOSIT o WITHDRAW',
  })
  type: TransactionType;

  @ApiProperty({
    example: 'Depósito inicial en la cuenta',
    description: 'Descripción opcional de la transacción',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'El campo description debe ser una cadena de texto' })
  description?: string;
}
