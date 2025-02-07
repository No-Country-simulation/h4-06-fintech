import envs from 'config/envs';
import { PortfolioApi } from './interface/api.interface';
import { handleRequest } from 'shared/handleRequest';
import { authRequest } from 'shared/authRequest';
import { AuthError } from 'shared/errors';

const BASE_URL = `${envs.BACKEND_URL}/investment-portfolio`;

const portfolioApi: PortfolioApi = {
  get({ id }) {
    const url = `${BASE_URL}/${id}`;

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError,
    });
  },
};

export { portfolioApi };
