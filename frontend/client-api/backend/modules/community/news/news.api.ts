import { NewsApi } from './interface/api.interface';
import envs from 'config/envs';
import { handleRequest } from 'shared/handleRequest';
import { authRequest } from 'shared/authRequest';
import { AuthError } from 'shared/errors';
import { newsData } from './data/news';

const BASE_URL = `${envs.BACKEND_URL}/news`;

const newsApi: NewsApi = {
  async getAll() {
    const url = BASE_URL;

    if (process.env.NODE_ENV === 'development') {
      return newsData;
    }

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError,
    });

    // return newsData;
  },
  async getOne({ id }) {
    if (process.env.NODE_ENV === 'development') {
      return newsData.find((n) => n.id === Number(id))!;
    }

    const url = `${BASE_URL}/${id}`;

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError,
    });
  },
};

export { newsApi };
