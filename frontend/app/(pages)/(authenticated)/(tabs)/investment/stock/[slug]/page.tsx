// import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';
import { StockTabs } from './_components/tabs/buttons';
import { TabContent } from './_components/tabs/tab-content';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: { tab?: string };
}

export default async function StockPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const response = await backend.investment.stockApi.getByTicker({
    ticker: slug,
  });

  const currentTab = searchParams.tab || 'historical';

  return (
    <section className="flex flex-col gap-4">
      <StockTabs />
      <TabContent tab={currentTab} stockData={response} />
    </section>
  );
}
