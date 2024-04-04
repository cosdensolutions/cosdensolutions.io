'use server';

import { headers } from 'next/headers';

export async function getUserDataHeaders() {
  return {
    country: headers().get('X-Next-Geo-Country'),
    ipAddress: headers().get('x-forwarded-for') || '127.0.0.1',
    path: headers().get('next-url') || '',
    userAgent: headers().get('user-agent') || '',
  };
}
