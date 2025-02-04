import { Module } from '@nestjs/common';
import { CustomizationService } from './customization.service';
import { CustomizationController } from './customization.controller';
import { PrismaModule } from '@/src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CustomizationController],
  providers: [CustomizationService],
})
export class CustomizationModule {}
