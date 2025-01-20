// middleware.ts

import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/login', '/signup', '/start', '/'];

/**
 * Middleware to check authentication based on a token stored in cookies.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse} - The response object to allow or redirect.
 */
export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;

  // Allow public routes to be accessible by everyone
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Get the token from cookies
  const token = req.cookies.get('access_token');

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
