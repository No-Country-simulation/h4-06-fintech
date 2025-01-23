import { Module } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportController } from './support.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:  [PrismaModule],
  controllers: [SupportController],
  providers: [SupportService],
})
export class SupportModule { }
