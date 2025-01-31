// middleware.ts

import { setAccessToken } from 'lib/setAccessToken';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/login', '/signup', '/start', '/'];

/**
 * Middleware to check authentication based on a token stored in cookies.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse} - The response object to allow or redirect.
 */
export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname, searchParams } = req.nextUrl;

  // Allow public routes to be accessible by everyone
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  if (pathname === '/onboarding') {
    const urlToken = searchParams.get('token');
    console.log({ urlToken });

    if (urlToken) {
      await setAccessToken(urlToken);
      // Remove token from URL and redirect to clean onboarding URL
      const cleanUrl = new URL('/onboarding', req.url);
      return NextResponse.redirect(cleanUrl);
    }
  }

  // Get the token from cookies
  const token = req.cookies.get('access_token');
  console.log('TOKEN DESDE EL FRONT');
  console.log({ token });

  // If token is missing, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If token exists, allow access to the requested route
  return NextResponse.next();
}

/**
 * Match all routes except API and static files.
 */
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
