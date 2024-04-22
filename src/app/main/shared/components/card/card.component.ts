import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/good/item';
import { Router } from '@angular/router';

@Component({
  selector: 'cfr-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input()
  item: Item = {
    itemId: '',
    itemName: '',
    price: 0,
    currency: '',
    imageLink: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // const itemId = this.route.snapshot.paramMap.get('itemId');
    // this.hero$ = this.service.getHero(heroId);
  }  

  goToDetails(): void {
    this.router.navigate(['/details/id', this.item.itemId ]);
  }
}
