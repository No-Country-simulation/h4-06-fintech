import { cookies } from 'next/headers';

export async function setAccessToken(token: string) {
  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes in milliseconds
  const cookieStore = await cookies();

  cookieStore.set('access_token', token, {
    expires,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });
}
