// import { formatMoney } from '@/lib/money-formatter';
// import { backend } from '@api';
import { StockTabs } from './_components/tabs/buttons';
import { TabContent } from './_components/tabs/tab-content';
import Buttons from './_components/buttons';


interface Props {
  // params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab: string }>;
}

export default async function StockPage({ searchParams }: Props) {
  // const { slug } = await params;
  // const response = await backend.investment.stockApi.getByTicker({
  //   ticker: slug,
  // });
  // console.log(response);

    const { tab } = await searchParams;

  return (
    <section className="flex flex-col gap-4">
        <StockTabs />
        <TabContent tab={tab}  />
        <Buttons /> 
    </section>
  );
}
