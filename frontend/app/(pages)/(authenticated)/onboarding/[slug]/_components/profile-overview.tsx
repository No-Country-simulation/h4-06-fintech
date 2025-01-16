'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import questionsData from '../../_data/data.json';

export default function ProfileOverview() {
  const searchParams = useSearchParams();
  const questions = questionsData.questions;

  return (
    <div className='mx-auto max-w-3xl space-y-6 p-6'>
      <h1 className='mb-6 text-2xl font-bold'>Resumen de tu perfil</h1>

      <div className='space-y-4'>
        {questions.map((question) => {
          const answer = searchParams.get(`question_${question.id}`);
          console.log(answer);

          if (!answer) return null;

          return (
            <div
              key={question.id}
              className='rounded-lg bg-secondary p-4'
            >
              <h3 className='text-sm font-medium text-foreground/70'>
                {question.question}
              </h3>
              <p className='mt-1 text-base'>{answer}</p>
            </div>
          );
        })}
      </div>
      <Button
        className='mt-3 w-full bg-blue-500 text-base text-white hover:bg-blue-600'
        asChild
      >
        <Link href={'/home'}>ir a inicio</Link>
      </Button>
    </div>
  );
}
