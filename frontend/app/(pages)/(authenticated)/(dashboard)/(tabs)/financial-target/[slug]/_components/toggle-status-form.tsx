import { toggleStatusAction } from '@/actions/financial-target/toggle-status-action';
import { FinancialTargetCard } from './financial-target-card';

interface Props {
  id: string;
}

export function ToggleStatusForm({ id }: Props) {
  return (
    <form
      action={toggleStatusAction}
      className='w-full max-w-[320px]'
    >
      <input
        defaultValue={id}
        name='id'
        hidden
      />
      <button className='w-full max-w-[320px] transition-opacity hover:opacity-50'>
        <FinancialTargetCard
          icon='/svg/warning-circle.svg'
          color='red'
        >
          <p className='hidden text-xl font-medium group-data-[isactive=true]/root:block'>
            Pausar objetivo
          </p>
          <p className='text-xl font-medium group-data-[isactive=true]/root:hidden'>
            Activar objectivo
          </p>
        </FinancialTargetCard>
      </button>
    </form>
  );
}
