import { cookies } from 'next/headers';
import { AuthError } from './errors';

export async function authRequest(url: string, options?: RequestInit) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token');

  if (!accessToken) {
    throw new AuthError('Inicia sesion para realizar esta accion');
  }

  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
}
