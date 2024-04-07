import { Component } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'cfr-offering',
  templateUrl: './offering.component.html',
  styleUrl: './offering.component.scss'
})
export class OfferingComponent {
  tiles: number[] = [1, 2, 3, 4, 5, 6];
  items: Item[] = [
    {itemId: '1', itemName: 'Мобільний телефон Samsung Galaxy A54',
      priceOld: 999999, price: 999999, currency: '₴',
      itemStatus: 'Немає в наявності', imageLink: 'assets/img/cards/watch.webp'},
    {itemId: '2', itemName: 'Папір офісний Maestro Standard+ A4 80 г/м² B',
      priceOld: 123456, price: 999999, currency: '₴',
      itemStatus: 'Немає в наявності', imageLink: 'assets/img/cards/cat-food.webp'},
    {itemId: '3', itemName: 'Набір подушок для сну Sleepingg',
      priceOld: 876445, price: 999999, currency: '₴',
      itemStatus: 'Є на складі', imageLink: 'assets/img/cards/cushion.webp'},
    {itemId: '4', itemName: 'Упаковка вологого корму для кішок Purina',
      priceOld: 454354, price: 999999, currency: '₴',
      itemStatus: 'Є на складі', imageLink: 'assets/img/cards/smartphone.webp'},
    {itemId: '5', itemName: 'Рушники паперові Диво Premio Grande XL',
      priceOld: 222333, price: 999999, currency: '₴',
      itemStatus: 'Закінчується', imageLink: 'assets/img/cards/paper.webp'},
    {itemId: '6', itemName: 'Електропростирадло Termosoft тепле',
      priceOld: 4444555, price: 999999, currency: '₴',
      itemStatus: 'Закінчується', imageLink: 'assets/img/cards/whiskey.webp'},  
  ];
}
