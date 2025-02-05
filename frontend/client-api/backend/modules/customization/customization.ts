import { AuthError } from "shared/errors";
import envs from "config/envs";
import { Customization } from "./interface/customization";
import { handleRequest } from "shared/handleRequest";
import { authRequest } from "shared/authRequest";

const url = `${envs.BACKEND_URL}/customization`;
export const customizationApi = {
  async create(data: Customization) {
    const baseUrl = url

    const payload = JSON.stringify(data);


    const options: RequestInit = {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return handleRequest({
      fetcherFn: () => authRequest(baseUrl, options),
      ErrorClass: AuthError,
    });
  },
  async update({ id, data }: { id: string; data: Customization }) {
    const baseUrl = `${url}/${id}`;
    const payload = JSON.stringify(data);


    const options: RequestInit = {
      method: 'PATCH',
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      },
    };


    return handleRequest({
      fetcherFn: () => authRequest(baseUrl, options),
      ErrorClass: AuthError,
    });
  },
  async getOne() {
    const baseUrl = url;

    return handleRequest({
      fetcherFn: () => authRequest(baseUrl),
      ErrorClass: AuthError,
    });
  },
};
