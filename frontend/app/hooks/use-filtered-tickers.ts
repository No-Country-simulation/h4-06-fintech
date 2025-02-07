'use client';

import { Ticker } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import { parseAsString, useQueryStates } from 'nuqs';
import { useMemo } from 'react';

export const useFilteredTickers = (tickers: Ticker[]) => {
  const [filters] = useQueryStates(
    {
      riskLevel: parseAsString,
      timeHorizon: parseAsString,
      expectedReturn: parseAsString,
    },
    {
      history: 'push',
    },
  );

  const filteredTickers = useMemo(() => {
    return tickers.filter((ticker) => {
      return (
        (!filters.riskLevel || ticker.riskLevel === filters.riskLevel) &&
        (!filters.timeHorizon || ticker.timeHorizon === filters.timeHorizon) &&
        (!filters.expectedReturn ||
          ticker.expectedReturn === filters.expectedReturn)
      );
    });
  }, [tickers, filters]);

  return filteredTickers;
};
