'use client';

import Image from 'next/image';
import {
  HORIZONTE_TEMPORAL_OPTIONS,
  NIVEL_DE_RIESGO_OPTIONS,
  RENDIMIENTO_ESPERADO_OPTIONS,
} from '../_data/filters-options';
import { FilterSelect } from './filter-select';
import { useQueryStates, parseAsString } from 'nuqs';
import { Button } from '@/components/ui/button';

export function TickersSectionHeader() {
  const [filter, setFilters] = useQueryStates(
    {
      riskLevel: parseAsString,
      timeHorizon: parseAsString,
      expectedReturn: parseAsString,
    },
    {
      history: 'push',
    },
  );

  const handleFilterChange = (
    queryKey: 'riskLevel' | 'timeHorizon' | 'expectedReturn',
    value: string,
  ) => {
    setFilters((prevState) => ({
      ...prevState,
      [queryKey]: value,
    }));
  };

  return (
    <header className='flex items-center justify-between rounded-md bg-primary/10 p-4'>
      <section className='flex flex-col items-center gap-2'>
        <section className='flex gap-2'>
          <Image
            src='/svg/customize.svg'
            alt='Filter icon'
            width={24}
            height={24}
          />
          <p className='text-2xl font-medium'>Filtros</p>
        </section>
        <p className='text-center font-light'>¡Personaliza tu búsqueda!</p>
      </section>
      <section className='flex flex-wrap items-center justify-end gap-4'>
        <Button
          variant='secondary'
          onClick={() => setFilters(null)}
        >
          Borrar filtros
        </Button>
        <FilterSelect
          value={filter.riskLevel!}
          onChange={handleFilterChange}
          label='Nivel de riesgo'
          options={NIVEL_DE_RIESGO_OPTIONS}
          queryKey='riskLevel'
        />
        <FilterSelect
          value={filter.timeHorizon!}
          onChange={handleFilterChange}
          label='Horizonte temporal'
          options={HORIZONTE_TEMPORAL_OPTIONS}
          queryKey='timeHorizon'
        />
        <FilterSelect
          value={filter.expectedReturn!}
          onChange={handleFilterChange}
          label='Rendimiento esperado'
          options={RENDIMIENTO_ESPERADO_OPTIONS}
          queryKey='expectedReturn'
        />
      </section>
    </header>
  );
}
