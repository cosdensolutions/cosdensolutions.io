type BaseEvent = {
  eventId: string;
  ipAddress: string;
  sourceUrl: string;
  userAgent: string;
};

type ViewContentEvent = BaseEvent & {
  event: 'ViewContent';
};

type InitiateCheckoutEvent = BaseEvent & {
  event: 'InitiateCheckout';
};

type PurchaseEvent = BaseEvent & {
  event: 'Purchase';
  currency: string;
  value: number;
};

export type MetaEvent =
  | InitiateCheckoutEvent
  | PurchaseEvent
  | ViewContentEvent;
