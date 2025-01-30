import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotController } from './chatbot.controller';
import { AIService } from '../config/ai.config';
import { ChatbotGateway } from './chatbot.gateway';

@Module({
  controllers: [ChatbotController],
  providers: [ChatbotService, AIService, ChatbotGateway], // Registra ambos como proveedores
  exports: [ChatbotService], // Exporta el servicio si es necesario en otros módulos
})
export class ChatbotModule {}
