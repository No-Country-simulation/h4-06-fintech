import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';
import { ChatbotService } from '../chatbot/chatbot.service';
import { AIService } from '../config/ai.config';

const aiService = new AIService();
const chatbotService = new ChatbotService(aiService);

export const configureSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: '*', // Asegúrate de configurar correctamente tu CORS
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado', socket.id);

    // Emitir mensaje de bienvenida cuando el cliente se conecta
    socket.emit('welcome', '¡Bienvenido a IUPI!');

    // Manejar mensajes entrantes del cliente
    socket.on('message', async (msg) => {
      console.log('Mensaje recibido del cliente:', msg);

      // Llamar a tu servicio de chatbot con Cohere
      try {
        const aiResponse = await chatbotService.handleMessage(msg); // Aquí llamas a tu bot con Cohere
        console.log('Respuesta del bot:', aiResponse);

        // Enviar la respuesta del chatbot al cliente
        socket.emit('response', aiResponse);
      } catch (error) {
        console.error('Error generando la respuesta del bot:', error);
        socket.emit(
          'response',
          'Lo siento, ha ocurrido un error procesando tu mensaje.',
        );
      }
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado', socket.id);
    });
  });

  return io;
};
