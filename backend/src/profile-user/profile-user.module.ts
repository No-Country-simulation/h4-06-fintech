import { Module } from '@nestjs/common';
import { ProfileUserService } from './profile-user.service';
import { ProfileUserController } from './profile-user.controller';
import {PrismaModule} from "../prisma/prisma.module";



@Module({
  imports: [PrismaModule],
  exports: [ProfileUserService],
  providers: [ProfileUserService],
  controllers: [ProfileUserController]
})
export class ProfileUserModule {}
