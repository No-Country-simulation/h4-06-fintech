'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog';
import { AddFundsForm } from './add-funds-form';
import { FinancialTargetCard } from './financial-target-card';
import { useState } from 'react';

export function AddFundsDialog() {
  const [_, setOpen] = useState<boolean>(false);

  return (
    <Dialog
      onOpenChange={() => setOpen(!_)}
      open={_}
    >
      <DialogTrigger>
        <FinancialTargetCard
          className='transition-opacity hover:opacity-50'
          icon='/svg/money-circle.svg'
          color='green'
        >
          <p className='text-xl font-medium'>Ingresar dinero</p>
        </FinancialTargetCard>
      </DialogTrigger>
      <DialogContent className='gap-8'>
        <DialogHeader>
          <DialogTitle>Agregar dinero a tu objetivo financiero</DialogTitle>
        </DialogHeader>
        <AddFundsForm closeDialog={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
