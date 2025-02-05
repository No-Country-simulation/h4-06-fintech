import envs from "config/envs";
import { CommentApi } from "./interface/api.interface";
import { handleRequest } from "shared/handleRequest";
import { authRequest } from "shared/authRequest";
import { AuthError } from "shared/errors";

const BASE_URL = `${envs.BACKEND_URL}/comment`

const commentApi: CommentApi = {
  create(params) {
    const url = BASE_URL

    const options: RequestInit = {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "Application/json"
      }
    }

    return handleRequest({
      fetcherFn: () => authRequest(url, options),
      ErrorClass: AuthError
    })
  },
}

export { commentApi }