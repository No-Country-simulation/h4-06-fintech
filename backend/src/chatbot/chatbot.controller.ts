import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ChatMessage } from './chatbot.service';

@Controller('chatbot')
@UseGuards(JwtAuthGuard)
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('message')
  async handleMessage(
    @Body('message') message: string,
    @Req() req,
  ): Promise<ChatMessage> {
    if (!message || message.trim() === '') {
      throw new Error('Por favor, ingresa un mensaje válido.');
    }

    const userId = req.user.id;
    return this.chatbotService.handleMessage(message, userId);
  }

  @Get('history')
  async getHistory(@Req() req): Promise<ChatMessage[]> {
    const userId = req.user.id;
    return this.chatbotService.getMessageHistory(userId);
  }
}
