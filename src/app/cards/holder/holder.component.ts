import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Subscription } from 'rxjs';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'cfr-holder',
  templateUrl: './holder.component.html',
  styleUrl: './holder.component.scss'
})
export class HolderComponent implements OnInit, OnDestroy {
  cardsSub: Subscription;
  cards: Card[];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cardsSub = this.cardsService.getAllPosts$().subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnDestroy(): void {
    this.cardsSub.unsubscribe();  
  }
}
