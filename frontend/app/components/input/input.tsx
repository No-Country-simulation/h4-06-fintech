import { CircleAlertIcon } from 'lucide-react';
import { Input as ShadcnInput } from '../ui/input';
import { Label } from '../ui/label';
import { PasswordInput } from './password-input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
  password?: boolean;
  variant?: 'default' | 'secondary';
}

export default function Input({
  label,
  error,
  name,
  password = false,
  variant = 'default',
  className,
  ...props
}: InputProps) {
  const inputStyles =
    variant === 'default'
      ? `max-w-[530px] w-full border px-4 py-7 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 ${error ? 'border-red-500' : 'border-foreground'} ${className || ''} `.trim()
      : 'rounded-xl shadow-md';

  return (
    <div className='flex flex-col gap-1'>
      <Label
        htmlFor={name}
        className='pl-4 text-sm font-light'
      >
        {label}
        {props.required && <span className='ml-1 text-red-500'>*</span>}
      </Label>

      {password ? (
        <PasswordInput
          name={name}
          aria-invalid={!!error}
          aria-describedby={name || undefined}
          className={inputStyles}
          {...props}
        />
      ) : (
        <ShadcnInput
          name={name}
          aria-invalid={!!error}
          aria-describedby={name || undefined}
          className={inputStyles}
          {...props}
        />
      )}

      {error && (
        <footer className='flex items-start gap-1 px-4 pt-4 text-red-500'>
          <CircleAlertIcon className='size-8' />
          <p
            id={`${name}-error`}
            className='text-sm'
            role='alert'
          >
            {error === 'AuthError' ? (
              <>
                La contraseña ingresada es incorrecta. Vuelve a intentarlo o haz
                clic en <strong>Recuperar contraseña</strong> para cambiarla.
              </>
            ) : (
              error
            )}
            {/* error === 'AuthError */}
          </p>
        </footer>
      )}
    </div>
  );
}
