import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiProperty({ description: 'ID del usuario asociado a la wallet' })
  userId: string;

  @ApiProperty({ description: 'Balance inicial en pesos', example: 1000 })
  initialBalancePesos: number;

  @ApiProperty({ description: 'Balance inicial en dólares', example: 100 })
  initialBalanceDollars: number;
}
