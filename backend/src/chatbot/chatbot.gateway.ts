import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatbotService } from './chatbot.service';

@WebSocketGateway({
  cors: {
    origin: '*', // Ajusta según tu configuración
  },
})
export class ChatbotGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatbotService: ChatbotService) {}

  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
    client.emit('welcome', '¡Bienvenido al chatbot!');
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Mensaje recibido: ${message}`);

    if (!message || message.trim() === '') {
      client.emit('response', 'Por favor, ingresa un mensaje válido.');
      return;
    }

    try {
      const response = await this.chatbotService.handleMessage(message);
      client.emit('response', response);
    } catch (error) {
      console.error('Error generando la respuesta del bot:', error);
      client.emit('response', 'Lo siento, ha ocurrido un error.');
    }
  }
}
