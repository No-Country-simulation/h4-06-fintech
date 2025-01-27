'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const PROFILE_LABELS: Record<string, string> = {
  mainGoal: '¿Cuál es tu objetivo principal?',
  financialSkills: '¿Cómo te describes en cuanto a habilidades financieras?',
  riskTolerance: '¿Cuál es tu tolerancia al riesgo?',
  monthlyInvestment: '¿Cuánto dinero estás dispuesto a invertir mensualmente?',
  savingsOrInvestmentReason: '¿Cuál es el motivo principal por el cual querés ahorrar o invertir?',
  hasInvestedBefore: '¿En qué plazo de inversión estás pensando?',
  investmentHorizon: '¿Alguna vez invertiste?',
  financialGoal: '¿Tenés algún objetivo financiero?'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProfileOverview({ profile }: { profile: any}) {
  
  

  return (
    <div className='mx-auto max-w-3xl space-y-6 p-6'>
      <h1 className='mb-6 text-2xl font-bold'>Resumen de tu perfil</h1>

      <div className='space-y-4'>
        {Object.entries(profile.profile).map(([key, value]) => {
          if(key === 'id' || key === 'userId') return null;
          return (
            <div
              key={key}
              className='rounded-lg bg-gray-200 p-4'
            >
              <h3 className='text-sm font-medium text-foreground/70'>
                  {PROFILE_LABELS[key]}
              </h3>
              <p className='mt-1 text-base'>{`${value}`}</p>
            </div>
          );
        })}
      </div>
      <Button
        variant={'outline'}
        size={'full'}
        asChild
      >
        <Link href={'/home'}>ir a inicio</Link>
      </Button>
    </div>
  );
}
