import { type NextRequest, NextResponse } from 'next/server';

import { ratelimit } from '@/utils/ratelimit';

import { env } from './utils/env';

export const config = {
  matcher: ['/', '/contact', '/project-react', '/project-react/success'],
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

  if (request.nextUrl.pathname === '/project-react/success') {
    const { searchParams } = request.nextUrl;
    if (!searchParams.has('teachable_token')) {
      return NextResponse.redirect(`${env.BASE_URL}/project-react`);
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
