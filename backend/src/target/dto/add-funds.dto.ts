import { IsNumber, Min } from 'class-validator';

export class AddFundsDto {
  @IsNumber()
  @Min(1)
  amount: number;
}
