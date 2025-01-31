import { CohereClient } from 'cohere-ai';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.COHEREAI_API_KEY) {
  throw new Error('La variable de entorno COHEREAI_API_KEY no está definida');
}

const cohere = new CohereClient({
  token: process.env.COHEREAI_API_KEY,
});

export class AIService {
  public async generateResponse(
    prompt: string,
    temperature = 0.6,
  ): Promise<string> {
    try {
      const response = await cohere.generate({
        model: 'command',
        prompt: `Responde en español: ${prompt}`,
        temperature,
      });

      console.log('Respuesta de la API:', response);

      if (!response?.generations?.length) {
        throw new Error('No se recibió respuesta válida de la API de Cohere.');
      }

      return response.generations[0].text.trim();
    } catch (error: any) {
      console.error('Error en la API de Cohere:', error.stack || error.message);
      throw new Error('Error al generar la respuesta con IA');
    }
  }
}
