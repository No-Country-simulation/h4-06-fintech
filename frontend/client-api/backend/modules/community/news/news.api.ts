import { NewsApi } from "./interface/api.interface";
import envs from "config/envs";
import { handleRequest } from "shared/handleRequest";
import { authRequest } from "shared/authRequest";
import { AuthError } from "shared/errors";

const BASE_URL = `${envs.BACKEND_URL}/news`

const newsApi: NewsApi = {
  async getAll() {
    const url = BASE_URL

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError
    })
  },
  async getOne({ id }) {
    const url = `${BASE_URL}/${id}`

    return handleRequest({
      fetcherFn: () => authRequest(url),
      ErrorClass: AuthError
    })
  }
}

export { newsApi }