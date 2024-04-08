import { ItemStatus } from './item-status';

export interface Good {
  id: string;
  itemName: string;
  priceOld?: number;
  price: number;
  currency: string;
  itemStatus?: ItemStatus;
  imageLink: string;
}