'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter, useSearchParams } from 'next/navigation';

export default function OnboardingCompleted() {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-20'>
      <h1 className='text-center font-poppins-regular text-2xl/[30px]'>
        ¡
        <span className='font-poppins-semibold text-4xl/[54px]'>
          Felicidades
        </span>
        ! Ya analizamos tus respuestas y tu perfil tiene un enfoque{' '}
        <span className='font-poppins-semibold text-4xl/[54px]'>Dinámico</span>
      </h1>
      <div className='mt-10 flex flex-row gap-20'>
        <Card className='flex h-[323px] w-full max-w-[447px] flex-col items-center justify-around bg-[#D8E0F2]'>
          <h2 className='text-center font-poppins-regular text-[25px]/[37.5px]'>
            Si querés revisar tus respuestas, haz click en el botón{' '}
            <span className='font-poppins-medium text-3xl/5'>Resumen</span>
          </h2>
          <Button
            variant='outline'
            size='custom'
            className='border-none hover:bg-gray-100'
            onClick={() => router.push(`/onboarding/sumary/1?${searchParams}`)}
          >
            Resumen

          </Button>
        </Card>
        <Card className='flex h-[323px] w-full max-w-[447px] flex-col items-center justify-around bg-[#D8E0F2]'>
          <h2 className='text-center font-poppins-regular text-[25px]/[37.5px] text-foreground'>
            Si querés revisar tus respuestas, haz click en el botón{' '}
            <span className='font-poppins-medium text-3xl/5'>Mi Perfil</span>
          </h2>
          <Button
            variant='outline'
            size='custom'
            className='border-none hover:bg-gray-100'
            onClick={() => router.push(`/onboarding/sumary/1?${searchParams}`)}
          >
            Mi Perfil
          </Button>


        </Card>
      </div>
      <Button
        className='mt-20 h-[65px] bg-[#D8E0F2] hover:bg-[#D8E0F2]/80 w-full max-w-[360px] rounded-xl font-poppins-medium text-2xl/[30px] text-primary'
        variant='secondary'
        onClick={() => router.push('/home')}
      >

        Comenzar
      </Button>
    </div>
  );
}
