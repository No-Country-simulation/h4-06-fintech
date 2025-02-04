import { FavoriteButton } from './favorite-button/favorite';
import { InvestmentButton } from './invesment-button/investment';

export default function Buttons() {
  return (
    <section className='flex flex-row items-center justify-end gap-2 mt-5'>
      <FavoriteButton />
      <InvestmentButton />
    </section>
  );
}
