import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateInvestmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amountInvested: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  financialInstrumentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dateInvestment: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'Investment portfolio id is required' })
  @IsString({ message: 'Investment portfolio id must be a string' })
  portfolioId: string;

  @ApiProperty()
  @IsOptional({ message: 'Stock symbol is optional' })
  @IsString()
  stockSymbol: string;
}
