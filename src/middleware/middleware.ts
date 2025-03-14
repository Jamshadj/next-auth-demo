import { auth } from '@/lib/user';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  if (!session && !pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (session && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/login', '/signup'],
};