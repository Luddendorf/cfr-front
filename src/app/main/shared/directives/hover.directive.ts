import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({selector: '[cfr-hover]'})
export class HoverDirective {

  @HostListener('mouseenter', ['$event.target'])
  onMouseOver(button: HTMLButtonElement): void {
    if (!button.classList.contains('offering__button')) {
      return;
    }
    button.classList.add('offering__button--hovered');
    // Array.from(button.children)[1].classList.add('offering__button--icon-hovered');
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseOut(button: HTMLButtonElement): void {
    if (!button.classList.contains('offering__button')) {
      return;
    }
    button.classList.remove('offering__button--hovered');
    //Array.from(button.children)[1].classList.remove('offering__button--icon-hovered');
  }
}