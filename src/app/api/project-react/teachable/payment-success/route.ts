import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { env } from '@/utils/env';

// Updates a ConvertKit subscriber to mark that they have purchased the course
export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const teachableToken = searchParams.get('teachable_token');

  if (!teachableToken) {
    return NextResponse.redirect(`${env.BASE_URL}`);
  }

  const convertKitSubscriberId = cookies().get('convertKitSubscriberId');
  if (convertKitSubscriberId) {
    await fetch(
      `${env.CONVERTKIT_API_URL}/v3/subscribers/${convertKitSubscriberId.value}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_secret: env.CONVERTKIT_API_SECRET,
          fields: {
            has_purchased: true,
          },
        }),
      },
    );
  }

  return NextResponse.redirect(`${env.BASE_URL}/project-react/success`);
}
