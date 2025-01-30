import { cookies } from 'next/headers';

export async function setAccessToken(token: string) {
  const isProduction = process.env.NODE_ENV === 'production';
  
  // 24 hours in dev/local, 10 minutes in production
  const expirationTime = isProduction 
    ? 10 * 60 * 1000 // 10 minutes in milliseconds
    : 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
  const expires = new Date(Date.now() + expirationTime);
  const cookieStore = await cookies();

  cookieStore.set('access_token', token, {
    expires,
    httpOnly: true,
    path: '/',
    secure: isProduction,
  });
}
