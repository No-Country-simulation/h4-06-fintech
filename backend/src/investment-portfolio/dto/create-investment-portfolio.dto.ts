import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvestmentPortfolioDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  profileRisk: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  performanceCurrent: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  coin: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;
}
