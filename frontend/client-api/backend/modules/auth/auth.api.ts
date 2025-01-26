import { cookies } from 'next/headers';
import envs from '../../../../config/envs';
import { AuthError, InternalError } from '../../../../shared/errors';
import { handleRequest } from '../../../../shared/handleRequest';
import { APIErrorResponse } from '../../interface/generic-response';
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
      fetcherFn: () => fetch(url, options),
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
      fetcherFn: () => fetch(url, options),
      ErrorClass: AuthError,
    });
  },
  async getProfile() {
    const url = BASE_URL + '/auth/me';

    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');

    if (!accessToken) {
      throw new AuthError('Inicia sesion para realizar esta accion');
    }

    const options: ResponseInit = {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorResponse: APIErrorResponse = await response.json();
        if (errorResponse.statusCode >= 500) {
          throw new InternalError();
        }
        console.error({ errorResponse });
        throw new AuthError(errorResponse.message);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }

      throw new InternalError();
    }
  },
};

export { authApi };
