import { IsNumber, IsString } from 'class-validator';

export class CreateTargetDto {
  @IsString()
  name: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  durationMonths: number;

  @IsString()
  category: string;
}
