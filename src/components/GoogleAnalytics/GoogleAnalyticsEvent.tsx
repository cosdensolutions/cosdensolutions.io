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
    sendGAEvent(event);
  }, [event]);

  return null;
}
