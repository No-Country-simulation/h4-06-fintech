import { Button } from '../ui/button';

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  pending: boolean;
}

export default function SubmitButton({
  label,
  pending,
  className,
  ...props
}: SubmitButtonProps) {
  const baseStyles = 'mx-auto';

  return (
    <Button
      variant='secondary'
      size='custom'
      type='submit'
      disabled={pending}
      className={`${baseStyles} ${className}`}
      {...props}
    >
      {pending ? 'Submitting...' : label}
    </Button>
  );
}
