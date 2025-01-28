import envs from 'config/envs';
import { authRequest } from 'shared/authRequest';
import { AuthError } from 'shared/errors';
import { handleRequest } from 'shared/handleRequest';
import { StockApi } from './interface/api.interface';

const BASE_URL = `${envs.BACKEND_URL}/finance/stock`;

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
    return [
      {
        companyName: 'Microsoft Corporation Common Stock',
        symbol: 'MSFT',
      },
      {
        companyName: 'Apple Inc. Common Stock',
        symbol: 'APPL',
      },
      {
        companyName: 'NVIDIA Corporation Common Stock',
        symbol: 'NVDA',
      },
      {
        companyName: 'Amazon.com, Inc. Common Stock',
        symbol: 'AMZN',
      },
      {
        companyName: 'Alphabet Inc. Class C Capital Stock',
        symbol: 'GOOG',
      },
    ];
  },
};

export { stockApi };
