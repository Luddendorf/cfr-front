import { Component, Input } from '@angular/core';
import { Position } from '../../interfaces/position';

@Component({
  selector: 'cfr-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input()
  checkboxId: string = 'checkbox1';
  @Input()
  checkboxText: string = 'Check Me';
  @Input()
  position: Position = Position.Left;
}
