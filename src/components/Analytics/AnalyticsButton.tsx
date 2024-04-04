'use client';

import { Button, ButtonProps } from '@/components/ui';
import { createEventId } from '@/utils/analytics/helpers';
import { sendMetaAnalyticsEvent } from '@/utils/analytics/metaAnalytics';
import { MetaEvent } from '@/utils/analytics/types';
import { GAEvent, sendGAEvent } from '@/utils/googleAnalytics';

type AnalyticsButtonProps = ButtonProps & {
  gaEvent?: GAEvent;
  metaEvent?: Omit<MetaEvent, 'eventId'>;
};

export default function AnalyticsButton({
  children,
  gaEvent,
  metaEvent,
  ...rest
}: AnalyticsButtonProps) {
  return (
    <Button
      {...rest}
      onClick={() => {
        const eventId = createEventId();

        if (gaEvent) {
          sendGAEvent(gaEvent);
        }

        if (metaEvent) {
          sendMetaAnalyticsEvent({ ...metaEvent, eventId } as MetaEvent);
        }
      }}
    >
      {children}
    </Button>
  );
}
