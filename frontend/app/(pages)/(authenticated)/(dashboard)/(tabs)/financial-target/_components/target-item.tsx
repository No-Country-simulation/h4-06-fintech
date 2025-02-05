import { getFinancialTargetPercentage } from '@/lib/get-financial-target-percentage';
import { FinancialTarget } from 'client-api/backend/modules/financial-target/interface/getOne';
import Link from 'next/link';

interface Props {
  target: FinancialTarget;
}

export function TargetItem({ target }: Props) {
  const percentaje = getFinancialTargetPercentage(
    target.amount,
    target.progress,
  );

  return (
    <Link
      href={`/financial-target/${target.id}`}
      key={target.id}
      className='group'
    >
      <li className='flex w-full items-center justify-between rounded-md bg-background p-2 shadow-md shadow-foreground/30 transition-colors group-hover:bg-primary/10'>
        <section className='flex items-center gap-2'>
          <p className='px-2 text-2xl font-bold text-primary'>{percentaje}</p>
          <p>{target.name}</p>
        </section>
      </li>
    </Link>
  );
}
