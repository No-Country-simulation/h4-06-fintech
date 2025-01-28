import { Text } from '@/components/ui/text';
import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function StockPage({ params }: Props) {
  const { slug } = await params;
  const { name, price } = await backend.investment.stockApi.getByTicker({
    ticker: slug,
  });

  return (
    <section>
      <header>
        <Text>{name}</Text>
      </header>
      <section className='flex gap-2'>
        <Text>Precio:</Text>
        <p className='text-green-600'>{formatMoney(price.current)}</p>
      </section>
    </section>
  );
}
