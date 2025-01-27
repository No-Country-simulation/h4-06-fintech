import { backend } from '../../../client-api/backend';

export async function DevIsland() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const isBackendWorking = await backend.isActive();

  return (
    <section className='fixed bottom-0 right-0 m-6 flex flex-col gap-2 rounded-lg border bg-background p-6'>
      <h1 className='text-sm'>Estado del sistema</h1>
      <article className='flex items-center gap-2'>
        <div
          data-active={isBackendWorking}
          className='size-2 animate-ping rounded-full bg-red-400 data-[active=true]:bg-green-400'
        />
        <p className='text-xs text-primary/60'>Backend status</p>
      </article>
    </section>
  );
}
