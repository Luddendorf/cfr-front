import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfr-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  buttonText: string = 'Button';
  @Input()
  buttonIconName: string = '';
  @Input()
  iconPosition: string = '';
}
