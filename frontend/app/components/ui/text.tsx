import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

const textStyles = cva('text-foreground', {
  variants: {
    variant: {
      default: 'text-base',
      title: 'font-bold text-xl tracking-wide capitalize',
      detail: 'font-semibold text-sm',
      small: 'text-xs font-extralight',
      header: 'text-2xl font-poppins-semibold font-semibold',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Props = ComponentProps<'p'> & VariantProps<typeof textStyles>;

export function Text({ className, variant, ...props }: Props) {
  return (
    <p
      className={textStyles({ variant, className })}
      {...props}
    />
  );
}
