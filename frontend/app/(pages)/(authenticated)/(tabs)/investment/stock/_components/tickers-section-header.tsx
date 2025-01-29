import Image from 'next/image';
import {
  HORIZONTE_TEMPORAL_OPTIONS,
  NIVEL_DE_RIESGO_OPTIONS,
  RENDIMIENTO_ESPERADO_OPTIONS,
} from '../_data/filters-options';
import { FilterSelect } from './filter-select';

export function TickersSectionHeader() {
  return (
    <header className='flex items-center justify-between rounded-md bg-primary/10 p-4'>
      <section className='flex flex-col items-center gap-2'>
        <section className='flex gap-2'>
          <Image
            src='/svg/profile.svg'
            alt='Filter icon'
            width={24}
            height={24}
          />
          <p className='text-2xl font-medium'>Filtros</p>
        </section>
        <p className='text-center font-light'>¡Personaliza tu búsqueda!</p>
      </section>
      <section className='flex flex-wrap items-center justify-end gap-4'>
        <FilterSelect
          label='Nivel de riesgo'
          options={NIVEL_DE_RIESGO_OPTIONS}
          queryKey='riskLevel'
        />
        <FilterSelect
          label='Horizonte temporal'
          options={HORIZONTE_TEMPORAL_OPTIONS}
          queryKey='timeHorizon'
        />
        <FilterSelect
          label='Rendimiento esperado'
          options={RENDIMIENTO_ESPERADO_OPTIONS}
          queryKey='expectedReturn'
        />
      </section>
    </header>
  );
}
