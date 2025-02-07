import { LoaderCircleIcon } from 'lucide-react';

export function Loader() {
  return (
    <div className='flex h-full items-center justify-center'>
      <LoaderCircleIcon className='animate-spin' />
    </div>
  );
}
