import Image from 'next/image';

export function CarIcon() {
  return (
    <div className='w-fit rounded-md bg-[#0697F2]/70 p-1 shadow-lg'>
      <Image
        width={48}
        height={48}
        src='/svg/financial-target.svg'
        alt='Financial target icon'
      />
    </div>
  );
}
