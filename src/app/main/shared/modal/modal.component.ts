import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfr-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  isShown: boolean = false;

  @Input()
  modalHeader = 'Modal title';

  @Input()
  modalData: any;

  openModal(): void {
    this.isShown = true;
  }

  closeModal(event: Event): void {
    const target: HTMLElement = event.target as HTMLElement;
    if (target.classList.contains('modal__close--icon')
      || target.classList.contains('modal__main')) {
      this.isShown = false;
    }
    
  }
}
