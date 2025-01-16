interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
  pending: boolean;
}

export default function SubmitButton({
  label,
  variant = 'primary',
  pending,
  className,
  ...props
}: SubmitButtonProps) {
  const baseStyles = `
    w-full py-2 px-4 rounded-md
    font-medium transition-colors
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  return (
    <button
      type='submit'
      disabled={pending}
      className={` ${baseStyles} ${variantStyles[variant]} ${className || ''} `.trim()}
      {...props}
    >
      {pending ? 'Submitting...' : label}
    </button>
  );
}
