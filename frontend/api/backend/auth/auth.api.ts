import envs from '../../../config/envs';
import { GenericResponse } from '../interface/generic-response';
import { AuthAPI } from './interface/api.interface';
import { LoginWithPasswordResponse } from './interface/loginWithPassword';
import { SignUpResponse } from './interface/signup';

const BASE_URL = envs.BACKEND_URL + '/auth';

const authApi: AuthAPI = {
  async signup(params) {
    const url = BASE_URL + '/signup';

    const options: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
    };

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Internal server error');
        }
        return response.json();
      })
      .then((response: GenericResponse<SignUpResponse>) => response.data)
      .catch(() => {
        throw new Error(
          'Algo salió mal al procesar tu solicitud. Por favor, intenta de nuevo en unos minutos.',
        );
      });
  },
  async loginWithPassword(params) {
    const url = BASE_URL + '/login';

    const options: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(params),
    };

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Internal server error');
        }
        return response.json();
      })
      .then(
        (response: GenericResponse<LoginWithPasswordResponse>) => response.data,
      )
      .catch(() => {
        throw new Error(
          'Algo salió mal al procesar tu solicitud. Por favor, intenta de nuevo en unos minutos.',
        );
      });
  },
};

export { authApi };
