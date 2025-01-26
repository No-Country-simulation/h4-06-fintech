import envs from 'config/envs';
import { authRequest } from 'shared/authRequest';
import { AuthError } from 'shared/errors';
import { handleRequest } from 'shared/handleRequest';
import { AddFundsParams } from './interface/addFunds';
import { FinancialTargetAPI } from './interface/api.interface';
import { CreateParams } from './interface/create';

const BASE_URL = envs.BACKEND_URL + '/target';

const financialTargetApi: FinancialTargetAPI = {
  async getAll() {
    const url = BASE_URL;

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError,
    });
  },
  async getOne({ id }) {
    const url = `${BASE_URL}/${id}`;

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError,
    });
  },
  async toggleStatus({ id }) {
    const url = `${BASE_URL}/toggle-status/${id}`;

    const options: RequestInit = {
      method: 'PATCH',
    };

    return handleRequest({
      fetcherFn: () => authRequest(url, options),
      ErrorClass: AuthError,
    });
  },
  async addFunds({ amount, id }: AddFundsParams) {
    const url = `${BASE_URL}/add-funds/${id}`;

    const payload = JSON.stringify({ amount });

    const options: RequestInit = {
      method: 'PATCH',
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
  async create(params: CreateParams) {
    const url = BASE_URL;

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
  async delete({ id }) {
    const url = `${BASE_URL}/${id}`;

    const options: RequestInit = {
      method: 'DELETE',
    };

    return handleRequest({
      fetcherFn: () => authRequest(url, options),
      ErrorClass: AuthError,
    });
  },
};

export { financialTargetApi };
