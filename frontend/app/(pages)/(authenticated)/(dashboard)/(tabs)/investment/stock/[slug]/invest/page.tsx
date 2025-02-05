import { PageHeader } from '@/components/common/page/page-header';
import InvestStockForm from './_components/invest-stock-form';
import { backend } from '@api';

export default async function InvestStockPage() {
  const { investmentPortfolio } = await backend.authApi.getProfile();

  return (
    <PageHeader
      title='Comprar'
      className='mt-12'
    >
      <InvestStockForm portfolioId={investmentPortfolio.id} />
    </PageHeader>
  );
}
