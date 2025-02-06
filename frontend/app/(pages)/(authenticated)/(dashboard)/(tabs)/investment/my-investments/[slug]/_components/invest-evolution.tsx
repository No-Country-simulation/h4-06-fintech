import { formatMoney } from '@/lib/money-formatter';
import { StockEvolution } from '../../_components/stock-evolution';
import { calcularCambio } from '@/lib/calcular-cambios';

interface Props {
  amountInvested: number;
  currentPrice: number;
  symbol: string;
}

export async function InvestEvolution({ currentPrice, amountInvested }: Props) {
  const totalAssets = amountInvested / currentPrice;

  const marketValue = totalAssets * currentPrice;

  const cambios = calcularCambio(amountInvested, currentPrice, totalAssets);

  return (
    <section className='flex flex-col gap-3'>
      <StockEvolution
        text='Activos totales'
        value={totalAssets.toFixed(2)}
      />
      <StockEvolution
        text='Valor del mercado'
        value={formatMoney(marketValue)}
      />
      <StockEvolution
        text='Costo promedio'
        value={formatMoney(currentPrice)}
      />
      <StockEvolution
        text='Monto invertido'
        value={formatMoney(amountInvested)}
      />
      <StockEvolution
        text='Retorno total'
        value={`${formatMoney(cambios.amount)} (${cambios.percent})`}
        isUp={cambios.isUp}
      />
    </section>
  );
}
