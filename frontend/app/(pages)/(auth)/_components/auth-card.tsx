import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export function AuthCard({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section
      className={cn(
        'mx-auto flex max-w-96 flex-col gap-4 rounded-md bg-secondary p-6 shadow-lg',
        className,
      )}
      {...props}
    />
  );
}

export function AuthCardHeader({ className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('font-semibold', className)}
      {...props}
    />
  );
}

export function AuthCardFooter({
  className,
  ...props
}: ComponentProps<'footer'>) {
  return (
    <footer
      className={cn(className, 'flex justify-center gap-1')}
      {...props}
    />
  );
}
