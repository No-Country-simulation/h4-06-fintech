'use client';

import ChatHeader from './chat-header';

import { useChat } from './use-chat';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const ChatBox = ({ toggleChat }: { toggleChat: () => void }) => {
  const { message, setMessage, messages, sendMessage, isTyping } =
    useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className='fixed bottom-20 right-4 flex h-[500px] w-96 flex-col rounded-lg bg-white shadow-lg'>
      <ChatHeader toggleChat={toggleChat} />


      <div className='flex-1 overflow-y-auto p-4'>
        <div className='flex flex-col space-y-4'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className='mb-1 flex items-center'>
                    <Image
                      src='/images/chat/icon-bot.png'
                      alt='Bot'
                      width={20}
                      height={20}
                      className='mr-2'
                    />
                    <span className='text-xs font-semibold'>iUpi</span>
                  </div>
                )}
                <p className='text-sm'>{msg.text}</p>
              </div>
            </div>
          ))}
          {/* Typing indicator */}
          {isTyping && (
            <div className='flex justify-start'>
              <div className='max-w-[80%] rounded-lg bg-gray-100 p-3'>
                <div className='mb-1 flex items-center'>
                  <Image
                    src='/images/chat/icon-bot.png'
                    alt='Bot'
                    width={20}
                    height={20}
                    className='mr-2'
                  />
                  <span className='text-xs font-semibold'>iUpi</span>
                </div>
                <div className='mt-2 flex space-x-2'>
                  <div
                    className='h-2 w-2 animate-bounce rounded-full bg-gray-400'
                    style={{ animationDelay: '0ms' }}
                  ></div>

                  <div
                    className='h-2 w-2 animate-bounce rounded-full bg-gray-400'
                    style={{ animationDelay: '200ms' }}
                  ></div>
                  <div
                    className='h-2 w-2 animate-bounce rounded-full bg-gray-400'
                    style={{ animationDelay: '400ms' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className='border-t p-4'>
        <div className='flex items-center space-x-2'>
          <input
            type='text'
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder='Escribe un mensaje...'
            className='flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-primary/50 focus:outline-none'
          />
          <button
            onClick={() => sendMessage()}
            disabled={!message.trim()}
            className='rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary/80 disabled:opacity-50'
          >
            <Image
              src='/images/chat/button-send.svg'
              alt='Send'
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
