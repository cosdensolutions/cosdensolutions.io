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
    const utms: Record<string, string> = {
      ytd: '?utm_source=youtube&utm_medium=description',
      ytc: '?utm_source=youtube&utm_medium=pinnedcomment',
      lt: '?utm_source=linktree',
    };

    const utmCampaigns: Record<string, string> = {
      brcw: '&utm_campaign=The Best React Code I Wrote (Code Review)',
      hocr: '&utm_campaign=HOC Pattern in React',
      mdfr: '&utm_campaign=Modern Data Fetching in React (Complete Guide)',
      midp: '&utm_campaign=designpatterns',
      rbar: '&utm_campaign=Role-Based Authentication in React (Complete Tutorial)',
      rockt:
        '&utm_campaign=React Owner Components (and why you need to know them)',
      rtkq: '&utm_campaign=RTK Query in React (Complete Tutorial)',
      uqsr: '&utm_campaign=URL Params as State in React (Complete Tutorial)',
      w11r: '&utm_campaign=Windows 11 Clone Built in React (Code Review)',
      zvir: '&utm_campaign=Zod Validation in React (Complete Tutorial)',
    };

    const params = new URLSearchParams(request.nextUrl.search);
    const source = params.get('s');

    if (source) {
      const [utmSource, utmCampaign] = source.split('-');
      const utm = utms[utmSource];
      const campaign = utmCampaigns[utmCampaign];

      if (utm) {
        const redirectUrl = `https://importreact.beehiiv.com/subscribe${utm}${
          campaign || ''
        }`;
        return NextResponse.redirect(redirectUrl);
      }
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
