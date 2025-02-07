'use client';

import { useState } from 'react';
import Image from 'next/image';
import ChatBox from './chat-box';

const HelpButtonWithIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Chat bubble animation */}
      {!isChatOpen && (
        <div
          className='fixed bottom-24 right-5 flex cursor-pointer items-center gap-4 transition-all duration-300 hover:scale-105 hover:transform'
          onClick={toggleChat}
        >
          <div className='animate-bounce'>
            <span className='text-md poppins-bold rounded-lg bg-primary/80 p-3 text-white'>
              ¿Necesitas ayuda?
            </span>
          </div>
        </div>
      )}

      {/* Bot icon with pulse effect */}
      <div
        className='fixed bottom-5 right-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary/80 shadow-lg transition-all duration-300 hover:bg-primary/90'
        onClick={toggleChat}
      >
        <div className={`${!isChatOpen && 'animate-pulse'}`}>
          <Image
            src={
              isChatOpen
                ? '/images/chat/icon-close.svg'
                : '/images/chat/icon-bot.png'
            }
            alt='Bot Icon'
            width={28}
            height={28}
            className='p-1'
          />
        </div>
      </div>

      {/* Chat box with slide animation */}
      <div
        className={`transition-all duration-300 ${
          isChatOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-10 opacity-0'
        }`}
      >
        {isChatOpen && <ChatBox toggleChat={toggleChat} />}
      </div>
    </>
  );
};

export default HelpButtonWithIcon;
