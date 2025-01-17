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
  return (
    <Button
      variant='secondary'
      size='full'
      type='submit'
      disabled={pending}
      className={className}
      {...props}
    >
      {pending ? 'Submitting...' : label}
    </Button>
  );
}
