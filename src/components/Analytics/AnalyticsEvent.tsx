'use client';

import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';

import ClientOnly from '@/components/ClientOnly/ClientOnly';
import { sendMetaAnalyticsEvent } from '@/utils/analytics/metaAnalytics';
import { sendMetaConversionsApiEvent } from '@/utils/analytics/metaAnalyticsConversionsApi';
import { MetaEvent } from '@/utils/analytics/types';
import { GAEvent, sendGAEvent } from '@/utils/googleAnalytics';

type AnalyticsEventProps = {
  gaEvent?: GAEvent;
  metaEvent?: MetaEvent;
};

export default function AnalyticsEvent(props: AnalyticsEventProps) {
  return (
    <ClientOnly>
      <AnalyticsEventHandler {...props} />
    </ClientOnly>
  );
}

function AnalyticsEventHandler({ gaEvent, metaEvent }: AnalyticsEventProps) {
  const cookies = useCookies();
  const fbc = cookies.get('_fbc');

  useEffect(() => {
    if (gaEvent) {
      sendGAEvent(gaEvent);
    }

    if (metaEvent) {
      const event = {
        ...metaEvent,
        fbc,
      } as MetaEvent;

      sendMetaAnalyticsEvent(event);

      sendMetaConversionsApiEvent(event);
    }
  }, [fbc, gaEvent, metaEvent]);

  return null;
}
