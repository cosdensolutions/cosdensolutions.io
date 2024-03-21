import { type NextRequest, NextResponse } from 'next/server';

import { ratelimit } from '@/utils/ratelimit';

export const config = {
  matcher: ['/', '/contact', '/project-react'],
};

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/project-react') {
    const country = request.geo?.country;
    if (country) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('X-Next-Geo-Country', country);
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  }

  if (request.method === 'POST') {
    const ip = request.ip ?? '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 },
      );
    }
  }
}
