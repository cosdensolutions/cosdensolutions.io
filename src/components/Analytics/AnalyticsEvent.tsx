'use client';

import { useEffect } from 'react';

import { sendMetaAnalyticsEvent } from '@/utils/analytics/metaAnalytics';
import { sendMetaConversionsApiEvent } from '@/utils/analytics/metaAnalyticsConversionsApi';
import { MetaEvent } from '@/utils/analytics/types';
import { GAEvent, sendGAEvent } from '@/utils/googleAnalytics';

type AnalyticsEventProps = {
  gaEvent?: GAEvent;
  metaEvent?: MetaEvent;
};

export default function AnalyticsEvent({
  gaEvent,
  metaEvent,
}: AnalyticsEventProps) {
  useEffect(() => {
    if (gaEvent) {
      sendGAEvent(gaEvent);
    }

    if (metaEvent) {
      sendMetaAnalyticsEvent(metaEvent);
      sendMetaConversionsApiEvent(metaEvent);
    }
  }, [gaEvent, metaEvent]);

  return null;
}
