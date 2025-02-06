import { FavoriteButton } from './favorite-button/favorite';
import { InvestmentButton } from './invesment-button/investment';

export default function Buttons() {
  return (
    <section className='mt-5 flex flex-row items-center justify-end gap-2'>
      <FavoriteButton />
      <InvestmentButton />
    </section>
  );
}
