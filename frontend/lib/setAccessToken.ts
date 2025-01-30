import { cookies } from 'next/headers';

export async function setAccessToken(token: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  const cookieStore = await cookies();

  cookieStore.set('access_token', token, {
    expires,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });
}
