import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateInvestmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amountInvested: number;

  @IsOptional()
<<<<<<< HEAD
  @IsString()
  financialInstrumentId?: string;
=======
  @IsNotEmpty()
  @IsString()
  financialInstrumentId: string;
>>>>>>> Martin/back

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
