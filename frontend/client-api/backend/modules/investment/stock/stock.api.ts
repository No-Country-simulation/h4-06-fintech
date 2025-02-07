import {
  HORIZONTE_TEMPORAL_OPTIONS,
  NIVEL_DE_RIESGO_OPTIONS,
  RENDIMIENTO_ESPERADO_OPTIONS,
} from '@/(pages)/(authenticated)/(dashboard)/(tabs)/investment/stock/_data/filters-options';
import { getRandomOption } from '@/lib/get-random-option';
import envs from 'config/envs';
import { authRequest } from 'shared/authRequest';
import { AuthError } from 'shared/errors';
import { handleRequest } from 'shared/handleRequest';
import { StockApi } from './interface/api.interface';
import { tickers } from './tickers';

const BASE_URL = `${envs.BACKEND_URL}/finance/stocks`;

const stockApi: StockApi = {
  async getByTicker({ ticker }) {
    const url = `${BASE_URL}/${ticker}`;

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError,
    });
  },
  async getTickers() {
    // TODO - Usar un endpoint para obtener todos los tickers
    // de momento devuelvo un array estatico

    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            tickers.map((ticker) => ({
              ...ticker,
              riskLevel: getRandomOption(NIVEL_DE_RIESGO_OPTIONS),
              timeHorizon: getRandomOption(HORIZONTE_TEMPORAL_OPTIONS),
              expectedReturn: getRandomOption(RENDIMIENTO_ESPERADO_OPTIONS),
            })),
          ),
        1000,
      ),
    );
  },
  async getDetails({ symbol }) {
    console.log({ symbol });

    // TODO - Usar un endpoint para obtener la informacion de mi inversion
    return new Promise(async (resolve) =>
      resolve({ totalAssets: 0.5, amountInvested: 200 }),
    );
  },
  async invest(params) {
    const url = `${envs.BACKEND_URL}/investment`;

    const payload = JSON.stringify(params);

    const options: RequestInit = {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return handleRequest({
      fetcherFn: () => authRequest(url, options),
      ErrorClass: AuthError,
    });
  },
  getInvest(params) {
    const url = `${envs.BACKEND_URL}/investment/${params.id}`;

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError,
    });
  },
};

export { stockApi };
