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

  toggleModal(event: MouseEvent): void {
    event.stopPropagation();
    this.isShown = !this.isShown;
  }
}
