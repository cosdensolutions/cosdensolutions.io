'use server';

import { env } from '@/utils/env';

type JoinWaitlistData = {
  name: string;
  email: string;
};

export async function joinWaitlist(data: JoinWaitlistData) {
  const response = await fetch(
    `${env.CONVERTKIT_API_URL}/v3/sequences/${env.CONVERTKIT_PRE_LAUNCH_SEQUENCE_ID}/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: env.CONVERTKIT_API_KEY,
        first_name: data.name,
        email: data.email,
      }),
    },
  );

  if (!response.ok) {
    console.log(await response.text());
  }
}
