import { APIErrorResponse } from '../client-api/backend/interface/generic-response';
import { InternalError } from './errors';

/**
 * Handles API requests with centralized error handling.
 *
 * @template E - A type extending the `Error` class for custom error handling.
 * @param {string} url - The endpoint URL to send the request to.
 * @param {RequestInit} options - The options for the fetch request (e.g., method, headers, body).
 * @param {new (message: string) => E} ErrorClass - The custom error class to throw for client-side errors.
 * @returns {Promise<any>} - Resolves with the parsed JSON response on success.
 * @throws {E} - Throws the provided custom error class for client-side errors (4xx status codes).
 * @throws {InternalError} - Throws an `InternalError` for server-side errors (5xx status codes) or unexpected issues.
 */

interface Options<E> {
  fetcherFn: () => Promise<Response>;
  ErrorClass: new (message: string) => E;
}

export async function handleRequest<E extends Error, ApiResponse>({
  ErrorClass,
  fetcherFn,
}: Options<E>): Promise<ApiResponse> {
  try {
    const response = await fetcherFn();

    if (!response.ok) {
      const errorResponse: APIErrorResponse = await response.json();
      if (errorResponse.statusCode >= 500) {
        console.log({ errorResponse });

        throw new InternalError();
      }
      throw new ErrorClass(errorResponse.message);
    }

    return await response.json();
  } catch (error) {
    console.log(error);

    if (error instanceof ErrorClass) {
      throw error;
    }

    throw new InternalError();
  }
}
