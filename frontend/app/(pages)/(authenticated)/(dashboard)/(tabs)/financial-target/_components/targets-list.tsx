import { backend } from '@api';
import { TargetItem } from './target-item';
import { TargetsEmpty } from './targets-empty';

export async function TargetsList() {
  // await new Promise((resolve) => setTimeout(() => resolve(true), 2000));

  const { target: targets } = await backend.authApi.getProfile();

  if (!targets.length) {
    return <TargetsEmpty />;
  }

  return (
    <ul className='flex flex-col gap-2'>
      {targets.map((target) => (
        <TargetItem
          key={target.id}
          target={target}
        />
      ))}
    </ul>
  );
}
