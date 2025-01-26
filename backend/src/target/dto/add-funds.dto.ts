import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class AddFundsDto {
  @IsPositive()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
