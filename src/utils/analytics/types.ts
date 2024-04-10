type BaseEvent = {
  event_id: string;
  client_ip_address: string;
  event_source_url: string;
  client_user_agent: string;
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
