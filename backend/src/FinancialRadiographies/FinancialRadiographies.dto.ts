import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Decimal } from '../../prisma/generated/client/runtime/library';

export class CreateFinancialRadiographyDto {
  @ApiProperty({ example: 5000, description: 'Ingreso mensual del usuario' })
  @IsNumber()
  @IsOptional()
  monthlyIncome: Decimal;

  @ApiProperty({ example: 3000, description: 'Gastos mensuales del usuario' })
  @IsNumber()
  @IsOptional()
  monthlyExpenses: Decimal;

  @ApiProperty({
    example: 1000,
    description: 'Capacidad de ahorro mensual del usuario',
  })
  @IsNumber()
  @IsOptional()
  savingCapacity: Decimal;

  @ApiProperty({ example: 2000, description: 'Deudas actuales del usuario' })
  @IsNumber()
  @IsOptional()
  debts: Decimal;

  @ApiProperty({ example: 10000, description: 'Ahorros actuales del usuario' })
  @IsNumber()
  @IsOptional()
  savings: Decimal;

  @ApiProperty({
    example: '12345',
    description: 'ID del usuario relacionado (autogenerado)',
  })
  @IsString()
  userId: string;
}
