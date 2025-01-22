import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-xl border border-border bg-card p-4',
        className,
      )}
      {...props}
    />
  );
}
