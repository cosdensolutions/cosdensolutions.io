import { NextRequest, NextResponse } from 'next/server';

import { ratelimit } from '@/utils/ratelimit';

import { env } from './utils/env';

export const config = {
  matcher: [
    '/',
    '/contact',
    '/newsletter',
    '/project-react',
    '/project-react/success',
    '/project-react/preview/success',
  ],
};

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/newsletter') {
    const params = new URLSearchParams(request.nextUrl.search);
    const source = params.get('s');

    if (source === 'ytd') {
      return NextResponse.redirect(
        'https://importreact.beehiiv.com/subscribe?utm_source=youtube&utm_medium=description',
      );
    } else if (source === 'ytc') {
      return NextResponse.redirect(
        'https://importreact.beehiiv.com/subscribe?utm_source=youtube&utm_medium=pinnedcomment',
      );
    } else if (source === 'lt') {
      return NextResponse.redirect(
        'https://importreact.beehiiv.com/subscribe?utm_source=linktree',
      );
    }
  }

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

  // Checks for `teachable_token` query parameter in the URL
  if (
    ['/project-react/success', '/project-react/preview/success'].includes(
      request.nextUrl.pathname,
    )
  ) {
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
