import { backend } from '@api';
import AddFundsForm from './_components/add-funds-form';
import { PageHeader } from '@/components/common/page/page-header';

export default async function AddFundsPage() {
  const { wallet } = await backend.authApi.getProfile();

  return (
    <PageHeader title='Ingresar dinero a tu billetera'>
      <AddFundsForm wallets={wallet} />
    </PageHeader>
  );
}
