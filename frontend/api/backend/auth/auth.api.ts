import envs from '../../../config/envs';
import { AuthAPI } from './interface/api.interface';

const BASE_URL = envs.BACKEND_URL + '/auth';

const authApi: AuthAPI = {
  async signup(params) {
    const url = BASE_URL + '/signup';

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((response) => {
            throw new Error(response.message);
          });
        }
        return response.json();
      })
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((response) => {
            throw new Error(response.message);
          });
        }
        return response.json();
      })
      .catch((err) => {
        if (err instanceof Error) {
          throw new Error(err.message);
        }

        // Fallback for unexpected errors
        throw new Error(
          'Algo salió mal al procesar tu solicitud. Por favor, intenta de nuevo en unos minutos.',
        );
      });
  },
};

export { authApi };
