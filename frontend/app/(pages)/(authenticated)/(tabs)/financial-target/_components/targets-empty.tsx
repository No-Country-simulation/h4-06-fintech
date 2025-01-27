import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function TargetsEmpty() {
  return (
    <section className='flex flex-col items-center gap-40'>
      <section className='flex flex-col items-center justify-center gap-6'>
        <div className='w-fit rounded-md bg-[#0697F2]/70 p-1 shadow-lg'>
          <Image
            width={48}
            height={48}
            src='/svg/financial-target.svg'
            alt='Financial target icon'
          />
        </div>
        <section className='flex flex-col items-center gap-2'>
          <p className='text-3xl'>Tu lista de objetivos está vacía.</p>
          <p className='font-light'>
            Haz clic en{' '}
            <span className='font-normal italic'>Añadir nuevo objetivo</span> y
            ¡Comienza a alcanzar tus metas!
          </p>
        </section>
      </section>
      <footer>
        <Button
          variant='outline'
          size='custom'
        >
          Añadir nuevo objetivo
        </Button>
      </footer>
    </section>
  );
}
