import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    BASE_URL: z.string(),
    CONVERTKIT_API_KEY: z.string(),
    CONVERTKIT_API_SECRET: z.string(),
    CONVERTKIT_API_URL: z.string().url(),
    CONVERTKIT_PRE_LAUNCH_SEQUENCE_ID: z.string(),
    DISCORD_BOT_BASE_URL: z.string(),
    DISCORD_BOT_TOKEN: z.string(),
    DISCORD_CLIENT_ID: z.string(),
    DISCORD_CLIENT_SECRET: z.string(),
    DISCORD_OAUTH_URL: z.string(),
    DISCORD_REDIRECT_URL: z.string(),
    RESEND_API_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_DISCORD_URL: z.string(),
    NEXT_PUBLIC_INSTAGRAM_URL: z.string(),
    NEXT_PUBLIC_TEACHABLE_CHECKOUT_URL: z.string(),
    NEXT_PUBLIC_TIKTOK_URL: z.string(),
    NEXT_PUBLIC_YOUTUBE_URL: z.string(),
  },
  runtimeEnv: {
    BASE_URL: process.env.BASE_URL,
    CONVERTKIT_API_KEY: process.env.CONVERTKIT_API_KEY,
    CONVERTKIT_API_SECRET: process.env.CONVERTKIT_API_SECRET,
    CONVERTKIT_API_URL: process.env.CONVERTKIT_API_URL,
    CONVERTKIT_PRE_LAUNCH_SEQUENCE_ID:
      process.env.CONVERTKIT_PRE_LAUNCH_SEQUENCE_ID,
    DISCORD_BOT_BASE_URL: process.env.DISCORD_BOT_BASE_URL,
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    DISCORD_OAUTH_URL: process.env.DISCORD_OAUTH_URL,
    DISCORD_REDIRECT_URL: process.env.DISCORD_REDIRECT_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_DISCORD_URL: process.env.NEXT_PUBLIC_DISCORD_URL,
    NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    NEXT_PUBLIC_TEACHABLE_CHECKOUT_URL:
      process.env.NEXT_PUBLIC_TEACHABLE_CHECKOUT_URL,
    NEXT_PUBLIC_TIKTOK_URL: process.env.NEXT_PUBLIC_TIKTOK_URL,
    NEXT_PUBLIC_YOUTUBE_URL: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  },
});
