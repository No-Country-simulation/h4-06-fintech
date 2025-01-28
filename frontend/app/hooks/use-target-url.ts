import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

export function useTargetUrl() {
  const [target, setTarget] = useQueryStates(
    {
      name: parseAsString,
      durationMonths: parseAsInteger,
      amount: parseAsInteger,
    },
    {
      history: 'push',
    },
  );

  const reset = () => {
    setTarget(null);
  };

  return { ...target, reset };
}
