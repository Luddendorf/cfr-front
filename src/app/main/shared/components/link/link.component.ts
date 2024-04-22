import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfr-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input()
  buttonText: string = 'Button';
  @Input()
  buttonIconName: string = '';
  @Input()
  iconPosition: string = '';
}
