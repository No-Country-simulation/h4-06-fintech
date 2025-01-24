import { Inject, Injectable } from '@nestjs/common';
import { IWalletRepository } from '../../domain/interfaces/wallet.repository.interface';

@Injectable()
export class CreateWalletUseCase {
  constructor(
    @Inject('IWalletRepository')
    private readonly walletRepository: IWalletRepository,
  ) {}

  async execute(userId: string): Promise<void> {
    await this.walletRepository.createWallet(userId);
  }
}
