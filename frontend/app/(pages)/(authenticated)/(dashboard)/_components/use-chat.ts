import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}
const BASE_URL = 'http://localhost:3000';
console.log({ BASE_URL });

const socket: Socket = io(BASE_URL, {
  transports: ['websocket'],
  autoConnect: true,
  withCredentials: true,
});



// socket.on('connect_error', (error) => {
//   console.error('Socket Connection Error:', error);
// });


export const useChat = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isTyping, setIsTyping] = useState(false); 


  useEffect(() => {
    setIsConnected(socket.connected);

    function onConnect() {
      console.log('Socket Connected with ID:', socket.id);
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log('Socket Disconnected');
      setIsConnected(false);
    }

    function onWelcomeMessage(message: string) {
      console.log('Welcome message received:', message);
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: message }]);
    }

    function onBotResponse(message: string) {
      console.log('Bot response received:', message);
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: message }]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('welcome', onWelcomeMessage);
    socket.on('response', onBotResponse);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('welcome', onWelcomeMessage);
      socket.off('response', onBotResponse);
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && socket.connected) {
      console.log('Sending message:', message);
      socket.emit('message', message);
      setMessages(prev => [...prev, { sender: 'user', text: message }]);
      setMessage('');
      setIsTyping(true); 
    }
  };

  return {
    message,
    setMessage,
    messages,
    sendMessage,
    isConnected,
    isTyping
  };
};