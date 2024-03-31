'use client';

import { useEffect } from 'react';

import { GAEvent, sendGAEvent } from '@/utils/googleAnalytics';

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
