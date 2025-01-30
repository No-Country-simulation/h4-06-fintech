import { PageHeader } from '@/components/common/page/page-header';
import { Button } from '@/components/ui/button';
import { calcularCambio } from '@/lib/calcular-cambios';
import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';
import { CardInformation } from '../../stock/[slug]/_components/card-information';
import ComparativeTab from '../../stock/[slug]/_components/tabs/comparative-tab/comparative-tab';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const ticker = await backend.investment.stockApi.getByTicker({
    ticker: slug,
  });

  const { amountInvested, totalAssets } =
    await backend.investment.stockApi.getDetails({ symbol: slug });

  const marketValue = totalAssets * ticker.price.current;

  const cambios = calcularCambio(
    amountInvested,
    ticker.price.current,
    totalAssets,
  );

  return (
    <PageHeader title='Mis inversiones'>
      <CardInformation
        slug={slug}
        info={ticker}
      />

      <ComparativeTab />
      <section className='flex flex-col gap-3'>
        <AuxItem
          text='Activos totales'
          value={totalAssets}
        />
        <AuxItem
          text='Valor del mercado'
          value={formatMoney(marketValue)}
        />
        <AuxItem
          text='Costo promedio'
          value={formatMoney(ticker.price.current)}
        />
        <AuxItem
          text='Monto invertido'
          value={formatMoney(amountInvested)}
        />
        <AuxItem
          text='Retorno total'
          value={`${formatMoney(cambios.amount)} (${cambios.percent})`}
          isUp={cambios.isUp}
        />
      </section>
      <footer className='mt-12 flex items-center justify-end gap-12'>
        <Button
          className='w-full max-w-[220px] border border-green-600 text-lg text-green-600'
          variant='ghost'
        >
          Vender
        </Button>
        <Button
          className='w-full max-w-[220px] rounded-xl text-lg'
          variant='secondary'
        >
          Invertir más
        </Button>
      </footer>
    </PageHeader>
  );
}

interface AuxProps {
  text: string;
  value: string | number;
  isUp?: boolean;
}

export function AuxItem({ value, text, isUp }: AuxProps) {
  const style =
    isUp !== undefined
      ? isUp
        ? 'bg-green-300 text-green-700'
        : 'bg-red-400 text-red-700'
      : 'bg-secondary';

  return (
    <div className='flex items-center rounded-md bg-primary/10 px-4 py-2'>
      <p className='w-full max-w-[350px] text-xl font-medium'>{text}</p>
      <p
        className={`w-full max-w-[200px] rounded-md py-1 text-center ${style}`}
      >
        {value}
      </p>
    </div>
  );
}
