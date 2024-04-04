import { MetaEvent } from './types';

export function sendMetaAnalyticsEvent({ event, ...data }: MetaEvent) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  import('react-facebook-pixel')
    .then(module => module.default)
    .then(ReactPixel => {
      ReactPixel.track(event, data);
    });
}
