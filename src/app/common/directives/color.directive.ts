import { HostListener, Directive, HostBinding, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[cfr-color]'
 })
export class ColorDirective implements OnInit {
  colorsList: string[] = [];
  lastColor: number = 0;

  @Input() startColor: string = 'black';
  @Input() startBackgroundColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor = 'salmon'; 

  constructor(private elementRef: ElementRef) {
    for (let i = 1; i < 360; i++) {
      this.colorsList.push(`hsla(${i},91%,65%,1)`);
    }
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = this.startColor;
    this.elementRef.nativeElement.style.backgroundColor = this.startBackgroundColor;
  }

  @HostListener('mouseenter') onEnter() {
    this.lastColor >= 359 ? this.lastColor = 0 : this.lastColor++;
    this.backgroundColor = this.colorsList[this.lastColor];
   }
 
   @HostListener('mouseleave') onLeave() {
     this.lastColor >= 359 ? this.lastColor = 0 : this.lastColor++;
     this.backgroundColor = this.colorsList[this.lastColor];
   }
 
   @HostListener('mousemove') onMove() {
     this.lastColor >= 359 ? this.lastColor = 0 : this.lastColor++;
     this.backgroundColor = this.colorsList[this.lastColor];
   }
}