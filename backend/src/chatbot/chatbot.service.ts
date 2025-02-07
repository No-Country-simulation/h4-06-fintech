import { Injectable } from '@nestjs/common';
import { AIService } from '../config/ai.config';
import { SupabaseService } from '../supabase/supabase.service';

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  created_at: string;
  user_id: string;
}

@Injectable()
export class ChatbotService {
  constructor(
    private readonly aiService: AIService,
    private readonly supabaseService: SupabaseService
  ) {}

  public async handleMessage(messageContent: string, userId: string): Promise<ChatMessage> {
    const supabase = this.supabaseService.getClient();

    try {
      // 1. Save user message
      const { data: userMessage, error: userError } = await supabase
        .from('chat_messages')
        .insert({
          content: messageContent,
          role: 'user',
          user_id: userId  // Now accepts string ID from NestJS auth
        })
        .select()
        .single();

      if (userError) {
        console.error('Error saving user message:', userError);
        throw new Error(`Failed to save user message: ${userError.message}`);
      }

      // 2. Generate and save AI response
      try {
        const prompt = this.createPrompt(messageContent);
        const aiResponse = await this.aiService.generateResponse(prompt);

        const { data: botMessage, error: botError } = await supabase
          .from('chat_messages')
          .insert({
            content: aiResponse,
            role: 'assistant',
            user_id: userId
          })
          .select()
          .single();

        if (botError) {
          console.error('Error saving bot message:', botError);
          throw new Error(`Failed to save bot response: ${botError.message}`);
        }

        return botMessage;
      } catch (aiError) {
        console.error('AI or bot message error:', aiError);
        // Save error message
        const { error: errorMsgError } = await supabase
          .from('chat_messages')
          .insert({
            content: 'Lo siento, hubo un error al procesar tu mensaje.',
            role: 'assistant',
            user_id: userId
          });
          
        if (errorMsgError) {
          console.error('Error saving error message:', errorMsgError);
        }
        
        throw aiError;
      }
    } catch (error) {
      console.error('Error in handleMessage:', error);
      throw error;
    }
  }

  public async getMessageHistory(userId: string): Promise<ChatMessage[]> {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching message history:', error);
      throw error;
    }
    return data || [];
  }

  private createPrompt(messageContent: string): string {
    return `Mensaje del usuario: ${messageContent}\nResponde en español.`;
  }
}
