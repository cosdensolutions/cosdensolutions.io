import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/utils/env';

// Stores the ConvertKit subscriber ID in a cookie and redirects to the Project React page
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const convertKitSubscriberId = searchParams.get('ck_subscriber_id');
  if (convertKitSubscriberId) {
    cookies().set('convertKitSubscriberId', convertKitSubscriberId);
  }

  const responseUrl = new URL(`${env.BASE_URL}/project-react`);
  searchParams.forEach((value, key) => {
    responseUrl.searchParams.set(key, value);
  });

  return NextResponse.redirect(responseUrl);
}
