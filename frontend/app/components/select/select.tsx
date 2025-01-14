import {  Select as ShadcnSelect, SelectContent, SelectValue,  SelectTrigger } from '@/components/ui/select';
import { Label } from '../ui/label';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string | string[];
  placeholder: string;
}

export default function Select({ label, error, name, placeholder, ...props }: SelectProps) {
  return (
    <div className='flex flex-col gap-2 mb-4'>
      <Label
        htmlFor={name}
        className='text-sm font-medium text-gray-700'
      >
        {label}
        {props.required && <span className='ml-1 text-red-500'>*</span>}
      </Label>

      <ShadcnSelect
        name={name}
        aria-invalid={!!error}
        aria-describedby={name || undefined}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {props.children}
        </SelectContent>
      </ShadcnSelect>
    
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