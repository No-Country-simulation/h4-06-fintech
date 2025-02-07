import { Button, ButtonProps } from '../ui/button';

interface SubmitButtonProps extends ButtonProps {
  label: string;
  pending: boolean;
}

export default function SubmitButton({
  label,
  pending,
  className,
  variant,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      variant={variant ?? 'secondary'}
      size='custom'
      type='submit'
      disabled={pending}
      className={`${className}`}
      {...props}
    >
      {pending ? 'Submitting...' : label}
    </Button>
  );
}
