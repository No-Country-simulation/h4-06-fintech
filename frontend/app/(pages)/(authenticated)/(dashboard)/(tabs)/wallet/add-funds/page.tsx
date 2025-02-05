import { backend } from '@api';
import AddFundsForm from './_components/add-funds-form';

export default async function AddFundsPage() {
  const { wallet } = await backend.authApi.getProfile();

  return <AddFundsForm wallets={wallet} />;
}
