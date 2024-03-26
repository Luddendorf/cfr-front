import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfr-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input()
  modalHeader = 'Modal title';
}
