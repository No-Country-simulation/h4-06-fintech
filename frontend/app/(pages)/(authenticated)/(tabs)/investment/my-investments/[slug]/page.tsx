import { PageHeader } from '@/components/common/page/page-header';
import { Ticker } from '@/components/ticker/ticker';
import { TickerEvolutionicon } from '@/components/ticker/ticker-evolution-icon';
import { Button } from '@/components/ui/button';
import { calcularCambio } from '@/lib/calcular-cambios';
import { getPriceInfo } from '@/lib/get-price-info';
import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const { name, price } = await backend.investment.stockApi.getByTicker({
    ticker: slug,
  });

  const { amountInvested, totalAssets } =
    await backend.investment.stockApi.getDetails({ symbol: slug });

  const { changeAmount, changePercent, isUp } = getPriceInfo({
    current: price.current,
    previousClose: price.previousClose,
  });

  const marketValue = totalAssets * price.current;

  const cambios = calcularCambio(amountInvested, price.current, totalAssets);

  return (
    <PageHeader title='Mis inversiones'>
      <section className='flex rounded-md bg-primary/10 px-4 py-8'>
        <section className='flex items-center gap-12'>
          <section className='flex flex-col items-center justify-center'>
            <Ticker.Image src='/svg/brands/apple.svg' />
            <p className='text-lg font-light'>{name}</p>
          </section>
          <section className='flex items-center'>
            <TickerEvolutionicon isUp={isUp} />
            <section className='flex flex-col gap-1'>
              <p className='text-2xl font-medium'>
                {formatMoney(price.current)}
              </p>
              <div
                data-isup={isUp}
                className='flex gap-2 text-red-600 data-[isup=true]:text-green-600'
              >
                <p>{formatMoney(changeAmount)}</p>
                <p>({changePercent}%)</p>
              </div>
              <p className=''></p>
              <p className='text-lg text-gray-500'>
                {formatMoney(price.previousClose)}
              </p>
            </section>
          </section>
        </section>
      </section>
      <section>GRAFICOS</section>
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
          value={formatMoney(price.current)}
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
