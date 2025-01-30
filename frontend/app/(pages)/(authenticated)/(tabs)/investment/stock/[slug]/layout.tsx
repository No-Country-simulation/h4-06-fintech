import { backend } from '@api';
import { CardInformation } from './_components/card-information';
import { Carousel } from './_components/carousel';


export default async function StockLayout({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
    const { slug } = await params;
    const response = await backend.investment.stockApi.getByTicker({
      ticker: slug,
    });
  
    console.log({ response });
  return <section>
    <CardInformation info={response} slug={slug} />
    <Carousel info={response} />

    {children}</section>;
}
