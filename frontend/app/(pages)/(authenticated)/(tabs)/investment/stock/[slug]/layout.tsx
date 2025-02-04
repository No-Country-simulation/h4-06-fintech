import { backend } from '@api';
import { CardInformation } from './_components/card-information';
import { Carousel } from './_components/carousel';
import { GoBack } from './_components/goback/go-back';

export default async function StockLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await backend.investment.stockApi.getByTicker({
    ticker: slug,
  });

  return (
    <section className='relative'>
      <GoBack />
      <CardInformation
        info={response}
        slug={slug}
      />
      <Carousel info={response} />

      {children}
    </section>
  );
}
