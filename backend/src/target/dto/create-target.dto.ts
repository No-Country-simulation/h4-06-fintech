import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateTargetDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNumber()
  @IsPositive()
  durationMonths: number;

  @IsString()
  category: string;
}
