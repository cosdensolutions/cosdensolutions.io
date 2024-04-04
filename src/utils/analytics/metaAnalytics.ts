import { MetaEvent } from './types';

export function sendMetaAnalyticsEvent({ event, ...data }: MetaEvent) {
  console.log('HERE', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    return;
  }
  console.log('AFTER', event, data);

  import('react-facebook-pixel')
    .then(module => module.default)
    .then(ReactPixel => {
      ReactPixel.track(event, data);
    });
}
