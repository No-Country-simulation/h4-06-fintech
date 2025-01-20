import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';

export async function HeaderNav() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token');

  return (
    <nav className='flex gap-2'>
      {accessToken ? (
        <Link href={'/home'}>
          <Button>
            <HomeIcon />
            Acceder
          </Button>
        </Link>
      ) : (
        <>
          <Link href={'/login'}>
            <Button>Iniciar sesión</Button>
          </Link>
          <Link href={'/start'}>
            <Button variant={'outline'}>Crear cuenta</Button>
          </Link>
        </>
      )}
    </nav>
  );
}
