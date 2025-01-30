import { Controller, Post, Body } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Post('message')
  async handleMessage(
    @Body('message') message: string,
  ): Promise<{ response: string }> {
    if (!message || message.trim() === '') {
      return { response: 'Por favor, ingresa un mensaje válido.' };
    }

    const response = await this.chatbotService.handleMessage(message);
    return { response };
  }
}
