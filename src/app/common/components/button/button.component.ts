import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfr-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonType: string = 'slide';
  @Input() buttonText: string = 'Button';
}
