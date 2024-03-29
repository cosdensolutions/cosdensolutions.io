import { sendGAEvent as _sendGAEvent } from '@next/third-parties/google';

type Item = {
  item_id: string;
  item_name: string;
  price: number;
};

type ViewItemEvent = {
  event: 'view_item';
  currency: string;
  value: number;
  items: Item[];
};

type BeginCheckoutEvent = {
  event: 'begin_checkout';
  currency: string;
  value: number;
  items: Item[];
};

type PurchaseEvent = {
  event: 'purchase';
  currency: string;
  value: number;
  transaction_id: string;
  tax: number;
  items: Item[];
};

export type GAEvent = ViewItemEvent | BeginCheckoutEvent | PurchaseEvent;

export function sendGAEvent(event: GAEvent) {
  _sendGAEvent(event);
}
