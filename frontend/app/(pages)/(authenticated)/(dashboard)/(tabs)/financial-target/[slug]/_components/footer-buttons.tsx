import { FinancialTargetCard } from './financial-target-card';
import { AddFundsDialog } from './add-funds-dialog';
import { ToggleStatusForm } from './toggle-status-form';

interface Props {
  id: string;
}

export function FooterButtons({ id }: Props) {
  return (
    <footer className='flex flex-wrap justify-between'>
      <ToggleStatusForm id={id} />
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
