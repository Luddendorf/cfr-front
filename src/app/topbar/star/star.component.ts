import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cfr-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  @Input() starColor: string = 'yellow';
  @Output()
  heatRay: EventEmitter<string>;
}
