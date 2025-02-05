import { formatMoney } from '@/lib/money-formatter';
import { StockEvolution } from '../../_components/stock-evolution';
import { calcularCambio } from '@/lib/calcular-cambios';
import { backend } from '@api';

interface Props {
  currentPrice: number;
  symbol: string;
}

export async function InvestEvolution({ currentPrice, symbol }: Props) {
  const { amountInvested, totalAssets } =
    await backend.investment.stockApi.getDetails({ symbol });

  const marketValue = totalAssets * currentPrice;

  const cambios = calcularCambio(amountInvested, currentPrice, totalAssets);

  return (
    <section className='flex flex-col gap-3'>
      <StockEvolution
        text='Activos totales'
        value={totalAssets}
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
