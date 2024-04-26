import { Component, Input } from '@angular/core';
import { Position } from '../../interfaces/position';

@Component({
  selector: 'cfr-button-social',
  templateUrl: './button-social.component.html',
  styleUrl: './button-social.component.scss'
})
export class ButtonSocialComponent {
  @Input()
  buttonText: string = 'Button';
  @Input()
  buttonIconName: string = '';
  @Input()
  iconPosition: Position = Position.Left;
  @Input()
  height: string = '48px';
  @Input()
  fontSize: string = '18px';
}
