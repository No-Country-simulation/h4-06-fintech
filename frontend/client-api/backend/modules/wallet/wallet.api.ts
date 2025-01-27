import envs from 'config/envs';
import { authRequest } from 'shared/authRequest';
import { AuthError } from 'shared/errors';
import { handleRequest } from 'shared/handleRequest';
import { WalletApi } from './interface/api.interface';
import { MakeResponseParams } from './interface/makeTransaction';

const BASE_URL = `${envs.BACKEND_URL}/wallet`;

const walletApi: WalletApi = {
  async makeTransaction(params: MakeResponseParams) {
    const url = `${BASE_URL}/transactions`;

    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'Application/json',
      },
    };

    return handleRequest({
      fetcherFn: () => authRequest(url, options),
      ErrorClass: AuthError,
    });
  },
};

export { walletApi };
