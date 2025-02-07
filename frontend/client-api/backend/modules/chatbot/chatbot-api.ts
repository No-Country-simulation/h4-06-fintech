import { authRequest } from "shared/authRequest";
import { AuthError } from "shared/errors";
import { handleRequest } from "shared/handleRequest";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const chatbotApi = {
  async getMessages(message: string) {
    const url = `${BASE_URL}/chatbot/message`;
    
    return handleRequest({
      fetcherFn: () => authRequest(url, {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      ErrorClass: AuthError,
    });
  },
};
