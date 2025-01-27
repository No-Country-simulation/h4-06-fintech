'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import questionsData from '../../_data/data.json';
import { ProfileData } from '../interface/profile';

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

export default function ProfileOverview({ profile }: { profile: ProfileData}) {
  // const searchParams = useSearchParams();
  // const questions = questionsData.questions;
  console.log(profile);

  return (
    <div className='mx-auto max-w-3xl space-y-6 p-6'>
      <h1 className='mb-6 text-2xl font-bold'>Resumen de tu perfil</h1>

      <div className='space-y-4'>
        {Object.entries(profile.profile).map(([key, value]) => {
          if(key === 'id' || key === 'userId') return null;
          return (
            <div
              key={key}
              className='rounded-lg bg-secondary p-4'
            >
              <h3 className='text-sm font-medium text-foreground/70'>
                  {PROFILE_LABELS[key]}
              </h3>
              <p className='mt-1 text-base'>{value}</p>
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
