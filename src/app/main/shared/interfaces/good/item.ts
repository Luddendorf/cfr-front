import { ItemStatus } from './item-status';

export interface Item {
  itemId: string;
  itemName: string;
  priceOld?: number;
  price: number;
  currency: string;
  itemStatus?: ItemStatus;
  imageLink: string;
}