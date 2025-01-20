import { Input as ShadcnInput } from '../ui/input';
import { Label } from '../ui/label';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
}

export default function Input({ label, error, name, ...props }: InputProps) {
  return (
    <div className='flex flex-col gap-1'>
      <Label
        htmlFor={name}
        className='pl-4 text-sm font-light'
      >
        {label}
        {props.required && <span className='ml-1 text-red-500'>*</span>}
      </Label>

      <ShadcnInput
        name={name}
        aria-invalid={!!error}
        aria-describedby={name || undefined}
        className={`w-full border px-4 py-7 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 ${error ? 'border-red-500' : 'border-foreground'} ${props.className || ''} `.trim()}
        {...props}
      />

      {error && (
        <p
          id={`${name}-error`}
          className='text-sm text-red-500'
          role='alert'
        >
          {error}
        </p>
      )}
    </div>
  );
}
