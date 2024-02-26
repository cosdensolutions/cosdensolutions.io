import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    CONVERTKIT_API_KEY: z.string(),
    CONVERTKIT_API_URL: z.string().url(),
    CONVERTKIT_PRE_LAUNCH_SEQUENCE_ID: z.string(),
    RESEND_API_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_INSTAGRAM_URL: z.string(),
    NEXT_PUBLIC_TIKTOK_URL: z.string(),
    NEXT_PUBLIC_YOUTUBE_URL: z.string(),
  },
  runtimeEnv: {
    CONVERTKIT_API_KEY: process.env.CONVERTKIT_API_KEY,
    CONVERTKIT_API_URL: process.env.CONVERTKIT_API_URL,
    CONVERTKIT_PRE_LAUNCH_SEQUENCE_ID:
      process.env.CONVERTKIT_PRE_LAUNCH_SEQUENCE_ID,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    NEXT_PUBLIC_TIKTOK_URL: process.env.NEXT_PUBLIC_TIKTOK_URL,
    NEXT_PUBLIC_YOUTUBE_URL: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  },
});
