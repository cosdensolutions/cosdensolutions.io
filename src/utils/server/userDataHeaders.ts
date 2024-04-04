'use server';

import { headers } from 'next/headers';

export async function getUserDataHeaders() {
  return {
    country: headers().get('X-Next-Geo-Country'),
    ipAddress: headers().get('x-forwarded-for') || '127.0.0.1',
    userAgent: headers().get('user-agent') || '',
  };
}
