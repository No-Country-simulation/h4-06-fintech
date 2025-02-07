import Link from 'next/link';

export function OnboradingHeader() {
  return (
    <header className='flex justify-between gap-12'>
      <section className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>
          Hola! bienvenido a <span className='text-blue-600'>IUPI</span>
        </h1>
        <p className='mt-2 text-sm text-gray-500'>
          Para comenzar, por favor completa el siguiente formulario para
          personalizar tu experiencia de inversión.
        </p>
      </section>
      <Link
        href={'/home'}
        className='text-blue-500 underline'
      >
        Omitir
      </Link>
    </header>
  );
}
