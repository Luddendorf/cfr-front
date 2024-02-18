import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'cfr-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }
}