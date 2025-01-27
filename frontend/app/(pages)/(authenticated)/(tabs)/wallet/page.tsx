import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';

export default async function WalletPage() {
  const { wallet } = await backend.authApi.getProfile();

  const firstWallet = wallet[0];

  return (
    <section className='grid grid-cols-2 gap-4'>
      <Card>
        <Text variant='detail'>USD</Text>
        <p>{formatMoney(firstWallet.balanceDollars)}</p>
      </Card>
      <Card>
        <Text variant='detail'>Pesos</Text>
        <p>{formatMoney(firstWallet.balancePesos)}</p>
      </Card>
    </section>
  );
}
