import Image from 'next/image';

const ChatHeader = ({ toggleChat }: { toggleChat: () => void }) => {
  return (
    <div className="flex h-16 items-center justify-between rounded-t-lg bg-primary px-4">
      <div className="flex items-center space-x-3">
        <Image
          src="/images/chat/icon-bot.png"
          alt="Bot Icon"
          width={32}
          height={32}
          className="rounded-full bg-white p-1"
        />
        <div>
          <h6 className="text-lg font-semibold text-white">iUpi</h6>
          <p className="text-xs text-purple-200">Asistente Virtual</p>
        </div>
      </div>


      <button
        onClick={toggleChat}
        className="rounded-full p-2 text-white transition-colors hover:bg-primary"
      >
        <Image
          src="/images/chat/icon-close.svg"
          alt="Close Icon"
          width={24}
          height={24}

        />
      </button>
    </div>
  );
};

export default ChatHeader;
