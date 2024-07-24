import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../../interfaces/position';
import { BorderRadius } from '../../interfaces/border-radius';

@Component({
  selector: 'cfr-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  borderRadiusClass: string = 'button__border-radius--all';
  @Input()
  buttonText: string = 'Button';
  @Input()
  buttonIconName: string = '';
  @Input()
  iconPosition: Position = Position.Left;
  @Input()
  height: string = '40px';
  @Input()
  width: string = 'auto';
  @Input()
  fontSize: string = '16px';
  @Input()
  borderRadius: BorderRadius = BorderRadius.All;
  

  ngOnInit(): void {
    this.borderRadiusClass = this.getBorderRadiusClass();
  }

  getBorderRadiusClass(): string {
    switch (this.borderRadius) {
      case BorderRadius.All:
        return 'button__border-radius--all';
      case BorderRadius.Bottom:
        return 'button__border-radius--bottom';
      case BorderRadius.Left:
        return 'button__border-radius--left';
      case BorderRadius.None:
        return 'button__border-radius--none';
      case BorderRadius.Right:
        return 'button__border-radius--right';
      case BorderRadius.Top:
        return 'button__border-radius--top';          
      default:
        return 'button__border-radius--all';
    }
  }
}
