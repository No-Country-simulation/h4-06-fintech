'use client';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
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
      className='h-[43px] w-full max-w-[218px] rounded-lg bg-[#E9EDF6] focus:bg-[#004AAD33] data-[set=true]:bg-green-300'
    >
      <span className='flex flex-row items-center justify-center gap-2'>
        <FavoriteIcon />
        <Text>Favorito</Text>
      </span>
    </Button>
  );
}
