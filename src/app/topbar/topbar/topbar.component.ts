import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Inject, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { TopbarService } from '../topbar.service';
import { Post } from '../../cards/interfaces/post.interface';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'cfr-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit, OnDestroy {
  menuItemsList: string[] = ['Jokes', 'Events', 'Meetings', 'Parties',
    'Find friends'];
  updatedPost: Post = {userId: 0, id: 0, title: '', body: ''};
  
  @Input() greetingFromUser: string = 'Hello from the bottom';

  @ViewChild('titleInput') titleInput: ElementRef;
  @ViewChild('bodyInput') bodyInput: ElementRef;

  @ViewChild('starContainer', { read: ViewContainerRef }) starContainer: ViewContainerRef;
  componentRef: ComponentRef<StarComponent>;

  constructor(//@Inject(DOCUMENT) private document: Document
              private router: Router, 
              private topbarService: TopbarService,
              private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    // this.componentRef.instance.heatRay.subscribe(event => console.log('From star: ' + event));
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }


  shuffleMenu(): void {
    for (let i = this.menuItemsList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.menuItemsList[i];
      this.menuItemsList[i] = this.menuItemsList[j];
      this.menuItemsList[j] = temp;
    }
  }

  goToTestimonials(): void {
    this.router.navigate(['/testimonials', '16', this.updatedPost]);
  }

  sendPost(event: Event): void {
    event.preventDefault();
    let title: string = this.titleInput.nativeElement.value;
    let body: string = this.bodyInput.nativeElement.value;
    
    this.updatedPost = { userId: this.updatedPost.userId++,
      id: this.updatedPost.id++, title: title, body: body };
    // this.topbarService.updateLastPost$({userId: 0, id: 0, title: title,
    //   body: body});
  }

  createStar(starColor: string) {
    this.starContainer.clear(); 
    const factory: ComponentFactory<StarComponent> = this.resolver.resolveComponentFactory(StarComponent);
    this.componentRef = this.starContainer.createComponent(factory);

    this.componentRef.instance.starColor = starColor;

    // this.componentRef.instance.heatRay.subscribe(event => console.log('From star: ' + event));
  }

  removeStar() {
    this.starContainer.clear();
  }
}
