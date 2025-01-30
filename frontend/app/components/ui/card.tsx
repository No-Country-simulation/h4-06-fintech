import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const cardStyles = cva('flex flex-col gap-4 rounded-xl p-4', {
  variants: {
    variant: {
      default: 'border border-border bg-card',
      secondary: 'bg-secondary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type CardProps = VariantProps<typeof cardStyles> & ComponentProps<'div'>;

export function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      className={cardStyles({ className, variant })}
      {...props}
    />
  );
}
