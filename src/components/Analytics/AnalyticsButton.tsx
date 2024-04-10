'use client';

import { useCookies } from 'next-client-cookies';

import { Button, ButtonProps } from '@/components/ui';
import { createEventId } from '@/utils/analytics/helpers';
import { sendMetaAnalyticsEvent } from '@/utils/analytics/metaAnalytics';
import { MetaEvent } from '@/utils/analytics/types';
import { GAEvent, sendGAEvent } from '@/utils/googleAnalytics';

type AnalyticsButtonProps = ButtonProps & {
  gaEvent?: GAEvent;
  metaEvent?: Omit<MetaEvent, 'event_id'>;
};

export default function AnalyticsButton({
  children,
  gaEvent,
  metaEvent,
  ...rest
}: AnalyticsButtonProps) {
  const cookies = useCookies();
  const fbc = cookies.get('_fbc');

  return (
    <Button
      {...rest}
      onClick={() => {
        const eventId = createEventId();

        if (gaEvent) {
          sendGAEvent(gaEvent);
        }

        if (metaEvent) {
          sendMetaAnalyticsEvent({
            ...metaEvent,
            fbc,
            event_id: eventId,
          } as MetaEvent);
        }
      }}
    >
      {children}
    </Button>
  );
}
