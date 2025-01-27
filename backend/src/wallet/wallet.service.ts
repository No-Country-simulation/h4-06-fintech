import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWalletDto } from './application/dtos/create.wallet.dto';
import { UpdateWalletDto } from './application/dtos/update.wallet.dto';
import { PrismaClientKnownRequestError } from '@/prisma/generated/client/runtime/library';
import { TransactionDto } from './application/dtos/transaction.dto';

@Injectable()
export class WalletService {
  constructor(private readonly prisma: PrismaService) {}
  async createWallet(dto: CreateWalletDto) {
    try {
      return await this.prisma.wallet.create({
        data: {
          user: { connect: { id: dto.userId } },
          balancePesos: dto.initialBalancePesos,
          balanceDollars: dto.initialBalanceDollars,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new Error('Wallet already exists for this user');
        }
      }
      throw error;
    }
  }

  getWalletById(id: string) {
    return this.prisma.wallet.findUnique({ where: { id } });
  }

  updateWallet(id: string, dto: UpdateWalletDto) {
    return this.prisma.wallet.update({
      where: { id },
      data: { ...dto },
    });
  }

  deleteWallet(id: string) {
    return this.prisma.wallet.delete({ where: { id } });
  }
  /* Transacciones Depositos  */
  async makeTransaction(dto: TransactionDto) {
    return this.prisma
      .$transaction(async (prisma) => {
        // Buscar la wallet
        const wallet = await prisma.wallet.findUnique({
          where: { id: dto.walletId },
        });

        if (!wallet) {
          throw new BadRequestException('Wallet not found');
        }

        // Validar que los fondos sean suficientes (para retiros)
        if (dto.type === 'WITHDRAWAL') {
          if (
            (dto.currency === 'PESOS' && wallet.balancePesos < dto.amount) ||
            (dto.currency === 'DOLLARS' && wallet.balanceDollars < dto.amount)
          ) {
            throw new BadRequestException('Insufficient funds');
          }
        }

        // Actualizar balances
        const updatedWallet = await prisma.wallet.update({
          where: { id: dto.walletId },
          data: {
            balancePesos:
              dto.currency === 'PESOS'
                ? wallet.balancePesos +
                  (dto.type === 'DEPOSIT' ? dto.amount : -dto.amount)
                : wallet.balancePesos,
            balanceDollars:
              dto.currency === 'DOLLARS'
                ? wallet.balanceDollars +
                  (dto.type === 'DEPOSIT' ? dto.amount : -dto.amount)
                : wallet.balanceDollars,
          },
        });

        // Crear la transacción
        await prisma.walletTransaction.create({
          data: {
            walletId: wallet.id,
            type: dto.type,
            amount: dto.amount,
            currency: dto.currency,
            description: dto.description || null,
          },
        });

        return updatedWallet; // Puedes devolver la wallet actualizada si lo necesitas
      })
      .catch((error) => {
        if (error instanceof PrismaClientKnownRequestError) {
          // Manejo de errores específicos de Prisma
          throw new BadRequestException(error.message);
        }
        throw error; // Propagar otros errores
      });
  }
}
