import envs from '../../../config/envs';
import { AuthError } from '../../../shared/errors';
import { handleRequest } from '../../../shared/handleRequest';
import { AuthAPI } from './interface/api.interface';

const BASE_URL = envs.BACKEND_URL;

const authApi: AuthAPI = {
  async signup(params) {
    const url = BASE_URL + '/users';

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };

    return handleRequest({
      url,
      options,
      ErrorClass: AuthError,
    });
  },
  async loginWithPassword(params) {
    const url = BASE_URL + '/auth/login';

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };

    return handleRequest({
      url,
      options,
      ErrorClass: AuthError,
    });
  },
};

export { authApi };
