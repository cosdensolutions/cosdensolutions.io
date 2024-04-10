'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

import { env } from '@/utils/env';

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV !== 'development') {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    });
  }
}

type PostHogProviderProps = {
  children: React.ReactNode;
};

export default function PostHogProvider({ children }: PostHogProviderProps) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
