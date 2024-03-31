'use client';

import { Button, ButtonProps } from '@/components/ui';
import { GAEvent, sendGAEvent } from '@/utils/googleAnalytics';

type GoogleAnalyticsButtonProps = ButtonProps & {
  children: React.ReactNode;
  event: GAEvent;
};

export default function GoogleAnalyticsButton({
  children,
  event,
  ...rest
}: GoogleAnalyticsButtonProps) {
  return (
    <Button {...rest} onClick={() => sendGAEvent(event)}>
      {children}
    </Button>
  );
}
