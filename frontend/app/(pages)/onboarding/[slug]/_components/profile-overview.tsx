'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import questionsData from '../../_data/data.json';
import { Button } from '@/components/ui/button';

export default function ProfileOverview() {
  const searchParams = useSearchParams();
  const questions = questionsData.questions;
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Resumen de tu perfil</h1>
      
      <div className="space-y-4">
        {questions.map((question) => {
          const answer = searchParams.get(`question_${question.id}`);
          console.log(answer);
          
          if (!answer) return null;
          
          return (
            <div 
              key={question.id}
              className="p-4 bg-secondary rounded-lg"
            >
              <h3 className="font-medium text-sm text-foreground/70">
                {question.question}
              </h3>
              <p className="mt-1 text-base">
                {answer}
              </p>
            </div>
          );
        })}
      </div>
      <Button
        type='button'
        onClick={() => router.push('/')}
        className='mt-3 w-full bg-blue-500 text-base text-white hover:bg-blue-600'
      >
        ir a inicio
      </Button>
    </div>
  );
}