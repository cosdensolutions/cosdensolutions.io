'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { useEffect } from 'react';

type GoogleAnalyticsEventProps = {
  event: Record<string, string>;
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
