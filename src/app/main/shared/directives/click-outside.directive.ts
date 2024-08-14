import { Directive, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  searchInputClass = 'typeahead__input';
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    const clickedInInput = target.classList.contains(this.searchInputClass);
    if (!clickedInside && !clickedInInput) {
      this.clickOutside.emit();
    }
  }
}