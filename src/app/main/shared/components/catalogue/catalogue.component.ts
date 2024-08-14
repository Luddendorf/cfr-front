import { Component } from '@angular/core';

@Component({
  selector: 'cfr-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {
  catalogueIsShown: boolean = false;

  openCatalogue(): void {
    this.catalogueIsShown = true;
  }

  closeCatalogue(event: Event): void {
    const target: HTMLElement = event.target as HTMLElement;
    if (target.classList.contains('catalogue__close')) {
      this.catalogueIsShown = false;
    }
  }
}
