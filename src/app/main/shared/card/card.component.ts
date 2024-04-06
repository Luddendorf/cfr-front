import { Component, Input } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'cfr-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  item: Item = {
    itemName: '',
    price: 0,
    currency: ''
  };


}
