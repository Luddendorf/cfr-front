export interface Item {
  itemId: string;
  itemName: string;
  priceOld?: number;
  price: number;
  currency: string;
  itemStatus?: string;
  imageLink: string;
}