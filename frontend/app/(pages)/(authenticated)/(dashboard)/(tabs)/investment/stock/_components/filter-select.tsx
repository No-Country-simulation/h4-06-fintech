'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FilterKeys = 'riskLevel' | 'timeHorizon' | 'expectedReturn';

interface Props {
  options: {
    text: string;
    value: string;
  }[];
  queryKey: FilterKeys;
  label: string;
  value: string;
  onChange: (queryKey: FilterKeys, value: string) => void;
}

export function FilterSelect({
  options,
  queryKey,
  label,
  onChange,
  value,
}: Props) {
  return (
    <Select
      onValueChange={(value) => onChange(queryKey, value)}
      value={value ?? ''}
    >
      <SelectTrigger className='w-full border-foreground sm:w-[180px]'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
