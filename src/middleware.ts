import { type NextRequest, NextResponse } from 'next/server';

import { ratelimit } from '@/utils/ratelimit';

export const config = {
  matcher: ['/', '/project-react'],
};

export default async function middleware(request: NextRequest) {
  if (request.method === 'POST') {
    const ip = request.ip ?? '127.0.0.1';
    const { success } = await ratelimit.limit(ip);

    if (success) {
      return NextResponse.next();
    } else {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 },
      );
    }
  }
}
