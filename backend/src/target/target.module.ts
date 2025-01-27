import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TargetController } from './target.controller';
import { TargetService } from './target.service';

@Module({
  controllers: [TargetController],
  providers: [TargetService],
  imports: [PrismaModule],
})
export class TargetModule {}
