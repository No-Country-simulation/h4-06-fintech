import { FinancialTarget } from 'client-api/backend/modules/financial-target/interface/getOne';
import { TargetItem } from './target-item';

interface Props {
  targets: FinancialTarget[];
}

export async function TargetsList({ targets }: Props) {
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
