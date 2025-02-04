import { PageHeader } from '@/components/common/page/page-header';
import { Ticker } from '@/components/ticker/ticker';
import { Button } from '@/components/ui/button';
import { EmptySection } from '@/components/ui/empty-section';
import { backend } from '@api';
import Image from 'next/image';
import Link from 'next/link';

export default async function FavoritePage() {
  const tickers = await (
    await backend.investment.stockApi.getTickers()
  ).slice(0, 3);

  return (
    <PageHeader title='Favoritos'>
      <section className='flex flex-col gap-3'>
        {tickers.length ? (
          tickers.map((ticker) => (
            <Ticker.Root
              key={ticker.symbol}
              image={ticker.image}
              name={ticker.companyName}
              symbol={ticker.symbol}
            >
              <Ticker.Content>
                <Button className='rounded-md bg-secondary/50 p-2 shadow-none transition-colors hover:bg-secondary'>
                  <Image
                    src='/svg/heart-fill.svg'
                    alt='favorite icon'
                    width={24}
                    height={24}
                  />
                </Button>
                <Link
                  className='rounded-md bg-secondary/50 px-10 py-2 text-center font-medium transition-colors hover:bg-secondary'
                  href={`/investment/my-investments/${ticker.symbol}`}
                >
                  Ver
                </Link>
              </Ticker.Content>
            </Ticker.Root>
          ))
        ) : (
          <EmptySection
            header='Tu lista de favoritos está vacía.'
            icon='/svg/heart.svg'
            subtitle='Para añadir un elemento a la lista haz clic en el botón de Favoritos. '
          />
        )}
      </section>
    </PageHeader>
  );
}
