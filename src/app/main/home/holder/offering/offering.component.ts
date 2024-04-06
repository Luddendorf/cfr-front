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
    {itemName: 'Мобільний телефон Samsung Galaxy A54',
      priceOld: 999999, price: 999999, currency: '₴',
      itemStatus: 'Немає в наявності'},
    {itemName: 'Папір офісний Maestro Standard+ A4 80 г/м² B',
      priceOld: 123456, price: 999999, currency: '₴',
      itemStatus: 'Немає в наявності'},
    {itemName: 'Набір подушок для сну Sleepingg',
      priceOld: 876445, price: 999999, currency: '₴',
      itemStatus: 'Є на складі'},
    {itemName: 'Упаковка вологого корму для кішок Purina',
      priceOld: 454354, price: 999999, currency: '₴',
      itemStatus: 'Є на складі'},
    {itemName: 'Рушники паперові Диво Premio Grande XL',
      priceOld: 222333, price: 999999, currency: '₴',
      itemStatus: 'Закінчується'},
    {itemName: 'Електропростирадло Termosoft тепле',
      priceOld: 4444555, price: 999999, currency: '₴',
      itemStatus: 'Закінчується'},  
  ];
}
