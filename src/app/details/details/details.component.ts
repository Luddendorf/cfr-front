import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cfr-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  itemId: string | null = '';

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log('Started.');
    
    this.itemId = this.route.snapshot.paramMap.get('itemId');
    // this.hero$ = this.service.getHero(heroId);
    console.log('itemId is ' + this.itemId);
    
  }
}
