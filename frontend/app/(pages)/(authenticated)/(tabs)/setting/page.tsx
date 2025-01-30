import { PageHeader } from '@/components/common/page/page-header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LINKS = [
  {
    href: '/setting/security',
    value: 'Contraseña y seguridad',
  },
  {
    href: '/setting/privacy',
    value: 'Privacidad',
  },
  {
    href: '/setting/change-email',
    value: 'Cambiar correo electrónico',
  },
  {
    href: '/setting/me',
    value: 'Datos personales',
  },
  {
    href: '/setting/support',
    value: 'Tuve un problema con mi cuenta',
  },
];

export default function SettingPage() {
  return (
    <PageHeader title='Configuración'>
      <section className='flex flex-col gap-3'>
        {LINKS.map((link) => (
          <Link
            className='rounded-lg bg-primary/10 px-6 py-2 transition-colors hover:bg-primary/50'
            key={link.href}
            href={link.href}
          >
            <p className='text-xl font-medium'>{link.value}</p>
          </Link>
        ))}
      </section>
      <footer className='flex justify-center gap-4'>
        <Button
          className='rounded-[20px] border border-red-500 text-red-500'
          variant='ghost'
          size='custom'
        >
          Eliminar cuenta
        </Button>
        <Button
          variant='secondary'
          size='custom'
        >
          Cerrar sesión
        </Button>
      </footer>
    </PageHeader>
  );
}
