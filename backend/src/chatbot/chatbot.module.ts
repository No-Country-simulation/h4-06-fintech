import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { AIService } from '../config/ai.config';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [ChatbotController],
  providers: [ChatbotService, AIService],
  exports: [ChatbotService],
})
export class ChatbotModule {}
