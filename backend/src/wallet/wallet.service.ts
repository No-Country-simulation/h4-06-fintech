// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateWalletDto } from './application/dtos/create.wallet.dto';
// import { UpdateWalletDto } from './application/dtos/update.wallet.dto';
//
// @Injectable()
// export class WalletService {
//   constructor(private readonly prisma: PrismaService) {}
//
//   createWallet(dto: CreateWalletDto) {
//     return this.prisma.wallet.create({
//       data: {
//         user: {
//           connect: { id: dto.userId },
//         },
//         balancePesos: dto.initialBalancePesos,
//         balanceDollars: dto.initialBalanceDollars,
//       },
//     });
//   }
//
//   getWalletById(id: string) {
//     return this.prisma.wallet.findUnique({ where: { id } });
//   }
//
//   updateWallet(id: string, dto: UpdateWalletDto) {
//     return this.prisma.wallet.update({
//       where: { id },
//       data: { ...dto },
//     });
//   }
//
//   deleteWallet(id: string) {
//     return this.prisma.wallet.delete({ where: { id } });
//   }
// }
