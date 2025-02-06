'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { FavoriteIcon } from './svg/favorite';

export function FavoriteButton() {
  const [set, setSet] = useState<boolean>(false);

  const handleCLick = () => {
    toast.success('Accion agregada a tu lista de favoritos 🎉');
    setSet(!set);
  };

  return (
    <Button
      data-set={set}
      onClick={handleCLick}
      type='button'
      className='w-fit rounded-lg bg-primary px-6 py-5 focus:bg-[#004AAD33] data-[set=true]:bg-green-300'
    >
      <span className='flex flex-row items-center justify-center gap-2'>
        <FavoriteIcon />
      </span>
    </Button>
  );
}
