'use server';

import * as MetaSdk from 'facebook-nodejs-business-sdk';

import { env } from '@/utils/env';

import { MetaEvent } from './types';

export async function sendMetaConversionsApiEvent(event: MetaEvent) {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const accessToken = env.FACEBOOK_CONVERSIONS_API_TOKEN;
  const pixelId = env.FACEBOOK_PIXEL_ID;

  MetaSdk.FacebookAdsApi.init(accessToken);

  const serverEvent = new MetaSdk.ServerEvent()
    .setEventName(event.event)
    .setEventId(event.event_id)
    .setEventTime(Math.floor(Date.now() / 1000))
    .setActionSource('website');

  const userData = new MetaSdk.UserData()
    .setClientUserAgent(event.client_user_agent)
    .setClientIpAddress(event.client_ip_address);
  serverEvent.setUserData(userData);

  if (event.event === 'Purchase') {
    const customData = new MetaSdk.CustomData()
      .setValue(event.value)
      .setCurrency(event.currency);
    serverEvent.setCustomData(customData);
  }

  const eventRequest = new MetaSdk.EventRequest(accessToken, pixelId).setEvents(
    [serverEvent],
  );
  eventRequest.execute();
}
