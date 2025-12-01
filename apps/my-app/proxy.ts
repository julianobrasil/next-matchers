import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequestWithAuth } from 'next-auth/middleware';

export default withAuth(
  async function proxy(request: NextRequestWithAuth) {
    console.log('Hit: ', request.nextUrl.pathname);
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: async ({ req: { nextUrl: { pathname } }, token }) => {
        console.log('Pathname: ', pathname);
        // if (['/api/auth', 'auth'].some(path => pathname.startsWith(path))) {
        //   return true;
        // }

        // Return true if user is authenticated, false otherwise
        return !!token;
      },
    },
  }
);

// export const config = {
//   matcher: [
//     '/route-1(.*)',
//   ],
// };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - /api/auth (authentication routes) - MUST be excluded to prevent redirect loops
     * - /auth (custom auth pages like /auth/signin) - MUST be excluded to prevent redirect loops
     * - /_next (Next.js internal routes)
     * - static files
     * - route-2 through route-9 (excluded routes)
     */
    '/((?!api/auth|auth|_next|favicon.ico|robots.txt|route-[2-9]).*)',
  ],
};
