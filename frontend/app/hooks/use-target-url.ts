import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

export function useTargetUrl() {
  const [target] = useQueryStates(
    {
      name: parseAsString,
      durationMonths: parseAsInteger,
      amount: parseAsInteger,
    },
    {
      history: 'push',
    },
  );

  return target;
}
