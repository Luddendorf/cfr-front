import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { TopbarService } from '../topbar.service';

@Component({
  selector: 'cfr-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  menuItemsList: string[] = ['Jokes', 'Events', 'Meetings', 'Parties',
    'Find friends'];
  
  @Input() greetingFromUser: string = 'Hello from the bottom';

  @ViewChild('titleInput') titleInput: ElementRef;
  @ViewChild('bodyInput') bodyInput: ElementRef;

  constructor(//@Inject(DOCUMENT) private document: Document
              private router: Router, 
              private topbarService: TopbarService
  ) {}


  shuffleMenu(): void {
    for (let i = this.menuItemsList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.menuItemsList[i];
      this.menuItemsList[i] = this.menuItemsList[j];
      this.menuItemsList[j] = temp;
    }
  }

  goToTestimonials(): void {
    this.router.navigate(['/testimonials', '16']);
  }

  sendPost(event: Event): void {
    event.preventDefault();
    let title: string = this.titleInput.nativeElement.value;
    let body: string = this.bodyInput.nativeElement.value;
    
    this.topbarService.updateLastPost$({userId: 0, id: 0, title: title,
      body: body});
  }
}
