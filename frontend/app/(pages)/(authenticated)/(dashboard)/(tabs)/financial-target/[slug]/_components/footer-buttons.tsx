import { toggleStatusAction } from '@/actions/financial-target/toggle-status-action';
import { FinancialTargetCard } from './financial-target-card';
import { AddFundsDialog } from './add-funds-dialog';

interface Props {
  id: string;
  isActive: boolean;
}

export function FooterButtons({ id, isActive }: Props) {
  return (
    <footer className='flex flex-wrap justify-between'>
      <form
        action={toggleStatusAction}
        className='w-full max-w-[320px]'
      >
        <input
          defaultValue={id}
          name='id'
          hidden
        />
        <button className='w-full max-w-[320px]'>
          <FinancialTargetCard
            icon='/svg/warning-circle.svg'
            color='red'
          >
            <p className='text-xl font-medium'>
              {isActive ? 'Pausar objetivo' : 'Activar objectivo'}
            </p>
          </FinancialTargetCard>
        </button>
      </form>
      <AddFundsDialog />
      <FinancialTargetCard
        icon='/svg/wallet.svg'
        color='yellow'
      >
        <p className='text-xl font-medium'>Cambiar plan</p>
      </FinancialTargetCard>
    </footer>
  );
}
