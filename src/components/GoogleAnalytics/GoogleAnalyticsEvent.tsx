'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { useEffect } from 'react';

import { GAEvent } from '@/utils/googleAnalytics';

type GoogleAnalyticsEventProps = {
  event: GAEvent;
};

export default function GoogleAnalyticsEvent({
  event,
}: GoogleAnalyticsEventProps) {
  useEffect(() => {
    // Needs to wait for dataLayer to be available
    setTimeout(() => sendGAEvent(event), 100);
  }, [event]);

  return null;
}
