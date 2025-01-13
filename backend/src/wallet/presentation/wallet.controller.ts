import { Controller, Post, Body } from '@nestjs/common';
import { CreateWalletDto } from '../application/dtos/create.wallet.dto';
import { CreateWalletUseCase } from '../application/usecases/create.wallet.use-case';

@Controller('wallet')
export class WalletController {
  constructor(private readonly createWalletUseCase: CreateWalletUseCase) {}

  @Post('create')
  async createWallet(@Body() createWalletDto: CreateWalletDto): Promise<void> {
    await this.createWalletUseCase.execute(createWalletDto.userId);
  }
}
