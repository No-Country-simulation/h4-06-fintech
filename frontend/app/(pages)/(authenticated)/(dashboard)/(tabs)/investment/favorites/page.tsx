import { PageHeader } from '@/components/common/page/page-header';
import { EmptySection } from '@/components/ui/empty-section';
import { backend } from '@api';
import { FavoriteItem } from './_components/favorite-item';
import { MItem } from '@/components/motion/motion-item';
import { MList } from '@/components/motion/motion-list';

export default async function FavoritePage() {
  const tickers = await (
    await backend.investment.stockApi.getTickers()
  ).slice(0, 3);

  return (
    <PageHeader title='Favoritos'>
      <MList className='flex flex-col gap-3'>
        {tickers.length ? (
          tickers.map((ticker) => (
            <MItem key={ticker.symbol}>
              <FavoriteItem ticker={ticker} />
            </MItem>
          ))
        ) : (
          <EmptySection
            header='Tu lista de favoritos está vacía.'
            icon='/svg/heart.svg'
            subtitle='Para añadir un elemento a la lista haz clic en el botón de Favoritos. '
          />
        )}
      </MList>
    </PageHeader>
  );
}
