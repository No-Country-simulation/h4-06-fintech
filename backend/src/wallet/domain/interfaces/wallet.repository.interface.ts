import { CurrencyType } from '../../../../prisma/generated/client';
import { TransactionDto } from '../../application/dtos/transaction.dto';
import { Wallet } from '../entities/wallet.entity';
import { WalletTransaction } from '../entities/wallet.transaction.entity';

export interface IWalletRepository {
  createWallet(userId: string): Promise<Wallet>;
  getWalletById(walletId: string): Promise<Wallet | null>;

  /**
   * Actualiza el balance de la billetera en base al tipo de moneda y monto.
   * @param walletId - ID de la billetera
   * @param currency - Moneda ('pesos' o 'dollars')
   * @param amount - Monto a incrementar o decrementar
   */
  updateWalletBalances(
    walletId: string,
    currency: CurrencyType,
    amount: number,
  ): Promise<Wallet>;

  /**
   * Registra una transacción en la base de datos.
   * @param transaction - DTO con los detalles de la transacción
   */
  logTransaction(transaction: TransactionDto): Promise<WalletTransaction>;

  /**
   * Obtiene las transacciones asociadas a una billetera.
   * @param walletId - ID de la billetera
   */
  getTransactions(walletId: string): Promise<WalletTransaction[]>;
}
