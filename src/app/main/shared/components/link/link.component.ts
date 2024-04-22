import { Component, Input } from '@angular/core';
import { LinkSize } from '../../interfaces/link-size';

@Component({
  selector: 'cfr-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input()
  size: LinkSize = LinkSize.Medium;
  @Input()
  buttonText: string = 'Button';
  @Input()
  buttonIconName: string = '';
  @Input()
  iconPosition: string = '';
}
