import { FinancialTarget } from 'client-api/backend/modules/financial-target/interface/getOne';
import Link from 'next/link';

interface Props {
  target: FinancialTarget;
}

export function TargetItem({ target }: Props) {
  const percentaje =
    Number(target.progress) > 0
      ? `${(Number(target.progress) / Number(target.amount)) * 100}%`
      : '0%';

  return (
    <Link
      href={`/financial-target/${target.id}`}
      key={target.id}
      className='group'
    >
      <li className='flex w-full items-center justify-between rounded-md border border-foreground bg-background p-2 transition-colors group-hover:bg-primary/10'>
        <section className='flex items-center gap-2'>
          <div className='flex aspect-square items-center justify-center rounded-full bg-accent/50 p-2 text-xs'>
            {percentaje}
          </div>
          <p>{target.name}</p>
        </section>
        {/* <div
          data-active={target.isActive}
          className='rounded-full bg-red-200 px-4 py-1 text-xs text-red-600 data-[active=true]:bg-green-200 data-[active=true]:text-green-600'
        >
          {target.isActive ? 'Activo' : 'Inactivo'}
        </div> */}
      </li>
    </Link>
  );
}
