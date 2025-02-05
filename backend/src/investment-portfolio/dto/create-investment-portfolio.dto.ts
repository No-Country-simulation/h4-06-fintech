import { CreateInvestmentDto } from '../../investment/dto/create-investment.dto';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class Investment extends OmitType(CreateInvestmentDto, [
  'portfolioId',
]) {}

export class CreateInvestmentPortfolioDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ type: Investment })
  @ValidateNested({ each: true })
  @Type(() => Investment)
  investment?: Investment;
}
