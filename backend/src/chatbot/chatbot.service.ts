import { Injectable } from '@nestjs/common';
import { AIService } from '../config/ai.config';

@Injectable()
export class ChatbotService {
  constructor(private readonly aiService: AIService) {}

  public async handleMessage(messageContent: string): Promise<string> {
    if (!this.isValidMessage(messageContent)) {
      return 'Por favor, ingresa un mensaje válido.';
    }

    try {
      const prompt = this.createPrompt(messageContent);
      const aiResponse: string = await this.aiService.generateResponse(prompt);

      return aiResponse;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error procesando el mensaje:', error.message);
        return 'Lo siento, ha ocurrido un error. Intenta nuevamente más tarde.';
      }

      console.error('Error desconocido:', error);
      return 'Lo siento, ha ocurrido un error inesperado. Intenta nuevamente más tarde.';
    }
  }

  private isValidMessage(messageContent: string): boolean {
    return !!messageContent && messageContent.trim() !== '';
  }

  private createPrompt(messageContent: string): string {
    return `Mensaje del usuario: ${messageContent}\nResponde en español.`;
  }
}
