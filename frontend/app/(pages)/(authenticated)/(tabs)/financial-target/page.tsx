import { Text } from '@/components/ui/text';
import { backend } from '@api';
import { TargetsEmpty } from './_components/targets-empty';
import { TargetsList } from './_components/targets-list';

export default async function page() {
  const { target: targets } = await backend.authApi.getProfile();

  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>Mis objetivos</Text>
      </header>
      {targets.length ? <TargetsList targets={targets} /> : <TargetsEmpty />}
    </section>
  );
}
