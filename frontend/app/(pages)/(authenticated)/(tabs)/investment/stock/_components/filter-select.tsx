'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { parseAsString, useQueryStates } from 'nuqs';

type FilterKeys = 'riskLevel' | 'timeHorizon' | 'expectedReturn';

interface Props {
  options: {
    text: string;
    value: string;
  }[];
  queryKey: FilterKeys;
  label: string;
}

export function FilterSelect({ options, queryKey, label }: Props) {
  const [filter, setFilters] = useQueryStates(
    {
      riskLevel: parseAsString,
      timeHorizon: parseAsString,
      expectedReturn: parseAsString,
    },
    {
      history: 'push',
    },
  );

  const handleChange = (value: string) => {
    setFilters((prevState) => {
      const newState = { ...prevState };
      newState[queryKey] = value;
      return newState;
    });
  };

  return (
    <Select
      onValueChange={handleChange}
      value={filter[queryKey] ?? ''}
    >
      <SelectTrigger className='w-[180px] border-foreground'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className='gap-0 divide-foreground bg-[#E9EDF6] p-0'>
        <SelectGroup className='m-0 p-0'>
          {options.map((option) => (
            <SelectItem
              className='focus:bg-primary/20'
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
