import envs from 'config/envs';
import { authRequest } from 'shared/authRequest';
import { AuthError } from 'shared/errors';
import { handleRequest } from 'shared/handleRequest';
import { AddFundsParams } from './interface/addFunds';
import { FinancialTargetAPI } from './interface/api.interface';
import { CreateParams } from './interface/create';
import { ToggleStatusParams } from './interface/toggleStatus';

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
  toggleStatus: function (params: ToggleStatusParams): Promise<void> {
    console.log({ params });
    throw new Error('Function not implemented.');
  },
  addFunds: function (params: AddFundsParams): Promise<void> {
    console.log({ params });
    throw new Error('Function not implemented.');
  },
  create: function (params: CreateParams): Promise<void> {
    console.log({ params });
    throw new Error('Function not implemented.');
  },
};

export { financialTargetApi };
