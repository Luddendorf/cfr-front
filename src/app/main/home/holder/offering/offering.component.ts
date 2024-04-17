import { Component } from '@angular/core';
import { Item } from '../../../shared/interfaces/good/item';
import { ItemStatus } from '../../../shared/interfaces/good/item-status';

@Component({
  selector: 'cfr-offering',
  templateUrl: './offering.component.html',
  styleUrl: './offering.component.scss'
})
export class OfferingComponent {
  isOpened: boolean = false;

  items: Item[] = [
    {itemId: '1', itemName: 'Мобільний телефон Samsung Galaxy A54',
      priceOld: 999999, price: 999999, currency: '₴',
      itemStatus: ItemStatus.OutOfStock, imageLink: 'assets/img/cards/watch.webp'},
    {itemId: '2', itemName: 'Папір офісний Maestro Standard+ A4 80 г/м² B',
      priceOld: 123456, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/cat-food.webp'},
    {itemId: '3', itemName: 'Набір подушок для сну Sleepingg',
      priceOld: 876445, price: 999999, currency: '₴',
      itemStatus: ItemStatus.Available, imageLink: 'assets/img/cards/cushion.webp'},
    {itemId: '4', itemName: 'Упаковка вологого корму для кішок Purina',
      priceOld: 454354, price: 999999, currency: '₴',
      itemStatus: ItemStatus.Available, imageLink: 'assets/img/cards/smartphone.webp'},
    {itemId: '5', itemName: 'Рушники паперові Диво Premio Grande XL',
      priceOld: 222333, price: 999999, currency: '₴',
      itemStatus: ItemStatus.RunningOut, imageLink: 'assets/img/cards/paper.webp'},
    {itemId: '6', itemName: 'Електропростирадло Termosoft тепле',
      priceOld: 4444555, price: 999999, currency: '₴',
      itemStatus: ItemStatus.RunningOut, imageLink: 'assets/img/cards/whiskey.webp'},

    {itemId: '7', itemName: 'Мобільний телефон Samsung Galaxy A54',
      priceOld: 999999, price: 999999, currency: '₴',
      itemStatus: ItemStatus.OutOfStock, imageLink: 'assets/img/cards/watch.webp'},
    {itemId: '8', itemName: 'Папір офісний Maestro Standard+ A4 80 г/м² B',
      priceOld: 123456, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/cat-food.webp'},
    {itemId: '9', itemName: 'Набір подушок для сну Sleepingg',
      priceOld: 876445, price: 999999, currency: '₴',
      itemStatus: ItemStatus.Available, imageLink: 'assets/img/cards/cushion.webp'},
    {itemId: '10', itemName: 'Упаковка вологого корму для кішок Purina',
      priceOld: 454354, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/smartphone.webp'},
    {itemId: '11', itemName: 'Рушники паперові Диво Premio Grande XL',
      priceOld: 222333, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/paper.webp'},
    {itemId: '12', itemName: 'Електропростирадло Termosoft тепле',
      priceOld: 4444555, price: 999999, currency: '₴',
      itemStatus: ItemStatus.RunningOut, imageLink: 'assets/img/cards/whiskey.webp'},

      {itemId: '13', itemName: 'Мобільний телефон Samsung Galaxy A54',
      priceOld: 999999, price: 999999, currency: '₴',
      itemStatus: ItemStatus.OutOfStock, imageLink: 'assets/img/cards/watch.webp'},
    {itemId: '14', itemName: 'Папір офісний Maestro Standard+ A4 80 г/м² B',
      priceOld: 123456, price: 999999, currency: '₴',
      itemStatus: ItemStatus.OutOfStock, imageLink: 'assets/img/cards/cat-food.webp'},
    {itemId: '15', itemName: 'Набір подушок для сну Sleepingg',
      priceOld: 876445, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/cushion.webp'},
    {itemId: '16', itemName: 'Упаковка вологого корму для кішок Purina',
      priceOld: 454354, price: 999999, currency: '₴',
      itemStatus: ItemStatus.Available, imageLink: 'assets/img/cards/smartphone.webp'},
    {itemId: '17', itemName: 'Рушники паперові Диво Premio Grande XL',
      priceOld: 222333, price: 999999, currency: '₴',
      itemStatus: ItemStatus.RunningOut, imageLink: 'assets/img/cards/paper.webp'},
    {itemId: '18', itemName: 'Електропростирадло Termosoft тепле',
      priceOld: 4444555, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/whiskey.webp'},

      {itemId: '19', itemName: 'Мобільний телефон Samsung Galaxy A54',
      priceOld: 999999, price: 999999, currency: '₴',
      itemStatus: ItemStatus.OutOfStock, imageLink: 'assets/img/cards/watch.webp'},
    {itemId: '20', itemName: 'Папір офісний Maestro Standard+ A4 80 г/м² B',
      priceOld: 123456, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/cat-food.webp'},
    {itemId: '21', itemName: 'Набір подушок для сну Sleepingg',
      priceOld: 876445, price: 999999, currency: '₴',
      itemStatus: ItemStatus.InDelivery, imageLink: 'assets/img/cards/cushion.webp'},
    {itemId: '22', itemName: 'Упаковка вологого корму для кішок Purina',
      priceOld: 454354, price: 999999, currency: '₴',
      itemStatus: ItemStatus.Available, imageLink: 'assets/img/cards/smartphone.webp'},
    {itemId: '23', itemName: 'Рушники паперові Диво Premio Grande XL',
      priceOld: 222333, price: 999999, currency: '₴',
      itemStatus: ItemStatus.RunningOut, imageLink: 'assets/img/cards/paper.webp'},
    {itemId: '24', itemName: 'Електропростирадло Termosoft тепле',
      priceOld: 4444555, price: 999999, currency: '₴',
      itemStatus: ItemStatus.RunningOut, imageLink: 'assets/img/cards/whiskey.webp'}
  ];

  expandOffering(): void {
    this.isOpened = !this.isOpened;
  }
}
