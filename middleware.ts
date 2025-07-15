// middleware.ts or middleware.js
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: you can log requests or apply custom headers here
  return NextResponse.next();
}

// Match only the routes you care about, or remove to apply globally
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/
     * - static files (.js, .css, images, etc.)
     */
    '/((?!_next|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|css|js)).*)',
    '/(api|trpc)(.*)', // Keep this if you want middleware on API routes
  ],
};
