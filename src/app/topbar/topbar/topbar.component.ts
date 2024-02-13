import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'cfr-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  menuItemsList: string[] = ['Jokes', 'Events', 'Meetings', 'Parties',
    'Find friends'];
  
  @Input() greetingFromUser: string = 'Hello from the bottom';

  constructor(//@Inject(DOCUMENT) private document: Document
  ) {}


  shuffleMenu(): void {
    for (let i = this.menuItemsList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.menuItemsList[i];
      this.menuItemsList[i] = this.menuItemsList[j];
      this.menuItemsList[j] = temp;
    }
  }
}
