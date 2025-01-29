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
        price: {
          current: 234.2,
          previousClose: 220.2,
        },
      },
      {
        companyName: 'Apple Inc. Common Stock',
        symbol: 'AAPL',
        price: {
          current: 234.4,
          previousClose: 250.2,
        },
      },
      {
        companyName: 'NVIDIA Corporation Common Stock',
        symbol: 'NVDA',
        price: {
          current: 234.4,
          previousClose: 281.2,
        },
      },
      {
        companyName: 'Amazon.com, Inc. Common Stock',
        symbol: 'AMZN',
        price: {
          current: 234.4,
          previousClose: 232.2,
        },
      },
      {
        companyName: 'Alphabet Inc. Class C Capital Stock',
        symbol: 'GOOG',
        price: {
          current: 234.4,
          previousClose: 209.2,
        },
      },
    ];
  },
};

export { stockApi };
