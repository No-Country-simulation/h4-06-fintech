'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { sendChatMessage } from '@/actions/chatbot/chat-action';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase environment variables are not configured');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const useChat = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    console.log('Setting up Supabase real-time subscription...');
    
    const channel = supabase
      .channel('chat_messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        },
        (payload) => {
          console.log('Received new message:', payload);
          if (payload.new.role === 'assistant') {
            const newMessage: Message = {
              sender: 'bot',
              text: payload.new.content
            };
            setMessages((prev) => [...prev, newMessage]);
            setIsTyping(false);
          }
        }
      )
      .subscribe();

    return () => {
      console.log('Cleaning up Supabase subscription');
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      setIsTyping(true);
      const messageToSend = inputMessage.trim();
      setInputMessage('');
      
      try {
        // Add error monitoring
        try {
          const userMessage: Message = {
            sender: 'user',
            text: messageToSend
          };
          setMessages(prev => [...prev, userMessage]);
          
          const result = await sendChatMessage(messageToSend);
          
          if (!result.success) {
            throw new Error(`Failed to send message: ${result.error}`);
          }
        } catch (error) {
          // Log to your error monitoring service
          console.error('Chat Error:', error);
          throw error;
        }
      } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: Message = {
          sender: 'bot',
          text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.'
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }
    }
  };

  return {
    message: inputMessage,
    setMessage: setInputMessage,
    messages,
    sendMessage: handleSendMessage,
    isTyping
  };
};
