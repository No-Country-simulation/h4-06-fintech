'use server';

import { backend } from 'client-api/backend';

export async function sendChatMessage(message: string) {
  try {
    const response = await backend.chatbotApi.getMessages(message);
    
    if (!response) {
      throw new Error('No response from server');
    }

    return { success: true, data: response };
  } catch (error) {
    console.error('Error in chat action:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}
