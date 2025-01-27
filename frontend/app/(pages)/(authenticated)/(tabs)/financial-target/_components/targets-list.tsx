import { FinancialTarget } from 'client-api/backend/modules/financial-target/interface/getOne';
import Link from 'next/link';

interface Props {
  targets: FinancialTarget[];
}

export async function TargetsList({ targets }: Props) {
  return (
    <ul className='flex flex-col gap-2 rounded-md border bg-secondary p-2'>
      {targets.map((target) => (
        <Link
          href={`/financial-target/${target.id}`}
          key={target.id}
        >
          <li className='flex w-full items-center justify-between rounded-md border bg-background px-4 py-2 transition-colors'>
            <p>{target.name}</p>
            <div
              data-active={target.isActive}
              className='rounded-full bg-red-200 px-4 py-1 text-xs text-red-600 data-[active=true]:bg-green-200 data-[active=true]:text-green-600'
            >
              {target.isActive ? 'Activo' : 'Inactivo'}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
