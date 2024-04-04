'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type MetaAnalyticsInitProps = {
  pixelId: string;
};

export default function MetaAnalyticsInit({ pixelId }: MetaAnalyticsInitProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      return;
    }

    import('react-facebook-pixel')
      .then(module => module.default)
      .then(ReactPixel => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      });
  }, [pathname, searchParams, pixelId]);

  return null;
}
