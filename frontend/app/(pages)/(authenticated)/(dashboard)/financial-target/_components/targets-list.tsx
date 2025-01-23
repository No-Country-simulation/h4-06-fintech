'use client';

import { getFinancialTargets } from '@/lib/local-financial-targets';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function TargetsList() {
  const targets = getFinancialTargets();
  const path = usePathname();

  // De esta forma obtenemos el id del objetivo financiero, no puedo pasarlo por el slug
  // porque la pagina que tiene el mensaje de  "Selecciona uno de tus objectivos financieros para conocer el estado de tu progreso"
  // No esta bajo la carpeta [slug]
  const pathSegments = path.split('/');

  let id: string;
  if (pathSegments.length >= 3) {
    id = pathSegments[2];
  }

  return (
    <ul className='flex flex-col gap-2 rounded-md border bg-secondary p-2'>
      {targets.map((target) => (
        <Link
          href={`/financial-target/${target.id}`}
          key={target.id}
        >
          <li
            data-active={id === target.id}
            className='rounded-md border bg-background px-4 py-2 transition-colors data-[active=true]:bg-primary'
          >
            {target.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
