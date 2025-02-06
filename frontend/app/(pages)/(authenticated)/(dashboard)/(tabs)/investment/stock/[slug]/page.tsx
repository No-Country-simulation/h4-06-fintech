// import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';
import { StockTabs } from './_components/tabs/buttons';
import { TabContent } from './_components/tabs/tab-content';
import Buttons from './_components/buttons';
import { CardInformation } from './_components/card-information';
import { Carousel } from './_components/carousel';
import { GoBack } from './_components/goback/go-back';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab: string }>;
}

export default async function StockPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const response = await backend.investment.stockApi.getByTicker({
    ticker: slug,
  });

  const { tab } = await searchParams;

  return (
    <section className='relative flex flex-col'>
      <GoBack />
      <CardInformation
        info={{
          currentPrice: response.price.current,
          changePercent: String(response.price.changePercent.toFixed(2)),
          name: response.name,
          previousClose: response.price.previousClose,
          isUp: response.price.current > response.price.previousClose,
        }}
        slug={slug}
      />
      <Carousel info={response} />
      <section className='flex flex-col gap-4'>
        <StockTabs />
        <TabContent tab={tab} />
        <Buttons />
      </section>
    </section>
  );
}
