import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_INSTAGRAM_URL: z.string(),
  NEXT_PUBLIC_TIKTOK_URL: z.string(),
  NEXT_PUBLIC_YOUTUBE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
